
import { RawResponseWrapper } from './RawResponseWrapper'
import { BrowserAdapterError } from './errors/BrowserAdapterError'
import { Adapter, AdapterEventBuilder, AdapterEventHandlerType, IBlueprint } from '@stone-js/core'
import { IncomingBrowserEvent, IncomingBrowserEventOptions, OutgoingBrowserResponse } from '@stone-js/browser-core'
import { BrowserContext, BrowserEvent, BrowserResponse, BrowserAdapterContext, RawBrowserResponseOptions } from './declarations'

/**
 * Browser Adapter for Stone.js.
 *
 * The `BrowserAdapter` provides seamless integration between Stone.js applications
 * and the Browser environment. It processes incoming events from Browser,
 * transforms them into `IncomingBrowserEvent` instances, and returns a `BrowserResponse`.
 *
 * This adapter ensures compatibility with Browser's execution model and
 * abstracts the event handling process for Stone.js developers.
 *
 * @template BrowserEvent - The type of the raw event received from Browser.
 * @template BrowserResponse - The type of the response to send back to Browser.
 * @template BrowserContext - The Browser execution context type.
 * @template IncomingBrowserEvent - The type of the processed incoming event.
 * @template IncomingBrowserEventOptions - Options used to create an incoming event.
 * @template OutgoingBrowserResponse - The type of the outgoing response after processing.
 * @template BrowserAdapterContext - Context type specific to the adapter.
 *
 * @extends Adapter
 *
 * @example
 * ```typescript
 * import { BrowserAdapter } from '@stone-js/browser-adapter';
 *
 * const adapter = BrowserAdapter.create({...});
 *
 * await adapter.run();
 * ```
 *
 * @see {@link https://stone-js.com/docs Stone.js Documentation}
 */
export class BrowserAdapter extends Adapter<
BrowserEvent,
BrowserResponse,
BrowserContext,
IncomingBrowserEvent,
IncomingBrowserEventOptions,
OutgoingBrowserResponse,
BrowserAdapterContext
> {
  /**
   * Creates an instance of the `BrowserAdapter`.
   *
   * @param blueprint - The application blueprint.
   * @returns A new instance of `BrowserAdapter`.
   *
   * @example
   * ```typescript
   * const adapter = BrowserAdapter.create(blueprint);
   * await adapter.run();
   * ```
   */
  static create (blueprint: IBlueprint): BrowserAdapter {
    return new this(blueprint)
  }

  /**
   * Executes the adapter and provides an Browser-compatible handler function.
   *
   * The `run` method initializes the adapter and listens for incoming Browser events.
   * It processes these events, generates a response, and sends it back to the Browser.
   *
   * @throws {BrowserAdapterError} If used outside the Browser environment.
   */
  public async run<ExecutionResultType = undefined>(): Promise<ExecutionResultType> {
    await this.onStart()

    const eventHandler = this.resolveEventHandler()

    this.blueprint.get<string[]>('stone.adapter.events', []).forEach((eventName) => {
      /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
      window.addEventListener(eventName, async (rawEvent: BrowserEvent) => {
        await this.eventListener(eventHandler, rawEvent, window)
      })
    })

    await this.executeEventHandlerHooks('onInit', eventHandler)

    return undefined as ExecutionResultType
  }

  /**
   * Initializes the adapter and validates its execution context.
   *
   * Ensures the adapter is running in a Browser environment. If not, it
   * throws an error to prevent misuse.
   *
   * @throws {BrowserAdapterError} If executed outside a Browser context (e.g., node).
   */
  protected async onStart (): Promise<void> {
    if (typeof window === 'undefined') {
      throw new BrowserAdapterError('This `BrowserAdapter` must be used only in Browser context.')
    }

    await this.executeHooks('onStart')
  }

  /**
   * Processes an incoming Browser event.
   *
   * This method transforms the raw Browser event into a Stone.js `IncomingBrowserEvent`,
   * processes it through the pipeline, and generates a `RawResponse` to send back.
   *
   * @param rawEvent - The raw Browser event to be processed.
   * @param executionContext - The Browser execution context for the event.
   * @returns A promise resolving to the processed `RawResponse`.
   */
  protected async eventListener (
    eventHandler: AdapterEventHandlerType<IncomingBrowserEvent, OutgoingBrowserResponse>,
    rawEvent: BrowserEvent,
    executionContext: BrowserContext
  ): Promise<BrowserResponse> {
    const incomingEventBuilder = AdapterEventBuilder.create<IncomingBrowserEventOptions, IncomingBrowserEvent>({
      resolver: (options) => IncomingBrowserEvent.create(options)
    })

    const rawResponseBuilder = AdapterEventBuilder.create<RawBrowserResponseOptions, RawResponseWrapper>({
      resolver: (options) => RawResponseWrapper.create(options)
    })

    const context: BrowserAdapterContext = {
      rawEvent,
      executionContext,
      rawResponseBuilder,
      incomingEventBuilder
    }

    try {
      return await this.sendEventThroughDestination(context, eventHandler)
    } catch (error: any) {
      const rawResponseBuilder = await this.handleError(error, context)
      return await this.buildRawResponse({ ...context, rawResponseBuilder })
    }
  }
}
