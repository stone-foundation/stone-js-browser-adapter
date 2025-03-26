[**Browser Adapter Documentation v0.0.2**](../../README.md)

***

[Browser Adapter Documentation](../../modules.md) / [BrowserAdapter](../README.md) / BrowserAdapter

# Class: BrowserAdapter

Defined in: [browser-adapter/src/BrowserAdapter.ts:39](https://github.com/stonemjs/browser-adapter/blob/6ef18a8abc30e2ff2b6f68150987322f98457246/src/BrowserAdapter.ts#L39)

Browser Adapter for Stone.js.

The `BrowserAdapter` provides seamless integration between Stone.js applications
and the Browser environment. It processes incoming events from Browser,
transforms them into `IncomingBrowserEvent` instances, and returns a `BrowserResponse`.

This adapter ensures compatibility with Browser's execution model and
abstracts the event handling process for Stone.js developers.

## Template

The type of the raw event received from Browser.

## Template

The type of the response to send back to Browser.

## Template

The Browser execution context type.

## Template

The type of the processed incoming event.

## Template

Options used to create an incoming event.

## Template

The type of the outgoing response after processing.

## Template

Context type specific to the adapter.

## Example

```typescript
import { BrowserAdapter } from '@stone-js/browser-adapter';

const adapter = BrowserAdapter.create({...});

await adapter.run();
```

## See

[Stone.js Documentation](https://stone-js.com/docs)

## Extends

- `Adapter`\<[`BrowserEvent`](../../declarations/type-aliases/BrowserEvent.md), [`BrowserResponse`](../../declarations/type-aliases/BrowserResponse.md), [`BrowserContext`](../../declarations/type-aliases/BrowserContext.md), `IncomingBrowserEvent`, `IncomingBrowserEventOptions`, `OutgoingBrowserResponse`, [`BrowserAdapterContext`](../../declarations/type-aliases/BrowserAdapterContext.md)\>

## Constructors

### new BrowserAdapter()

> `protected` **new BrowserAdapter**(`blueprint`): [`BrowserAdapter`](BrowserAdapter.md)

Defined in: core/dist/index.d.ts:2751

Create an Adapter.

#### Parameters

##### blueprint

`IBlueprint`\<`any`\>

The blueprint to create the adapter.

#### Returns

[`BrowserAdapter`](BrowserAdapter.md)

#### Inherited from

`Adapter< BrowserEvent, BrowserResponse, BrowserContext, IncomingBrowserEvent, IncomingBrowserEventOptions, OutgoingBrowserResponse, BrowserAdapterContext >.constructor`

## Properties

### blueprint

> `protected` `readonly` **blueprint**: `IBlueprint`\<`any`\>

Defined in: core/dist/index.d.ts:2742

#### Inherited from

`Adapter.blueprint`

***

### hooks

> `protected` `readonly` **hooks**: `AdapterHookType`\<[`BrowserAdapterContext`](../../declarations/type-aliases/BrowserAdapterContext.md), `unknown`\>

Defined in: core/dist/index.d.ts:2743

#### Inherited from

`Adapter.hooks`

***

### middleware

> `protected` `readonly` **middleware**: `AdapterMixedPipeType`\<[`BrowserAdapterContext`](../../declarations/type-aliases/BrowserAdapterContext.md), `unknown`\>[]

Defined in: core/dist/index.d.ts:2744

#### Inherited from

`Adapter.middleware`

***

### resolvedErrorHandlers

> `protected` `readonly` **resolvedErrorHandlers**: `Record`\<`string`, `IAdapterErrorHandler`\<[`BrowserEvent`](../../declarations/type-aliases/BrowserEvent.md), `unknown`, `Window` & *typeof* `globalThis`\>\>

Defined in: core/dist/index.d.ts:2745

#### Inherited from

`Adapter.resolvedErrorHandlers`

## Methods

### buildRawResponse()

> `protected` **buildRawResponse**(`context`, `eventHandler`?): `Promise`\<`unknown`\>

Defined in: core/dist/index.d.ts:2805

Build the raw response.

#### Parameters

##### context

[`BrowserAdapterContext`](../../declarations/type-aliases/BrowserAdapterContext.md)

The event context.

##### eventHandler?

`AdapterEventHandlerType`\<`IncomingBrowserEvent`, `OutgoingBrowserResponse`\>

The event handler to be run.

#### Returns

`Promise`\<`unknown`\>

The raw response wrapper.

#### Inherited from

`Adapter.buildRawResponse`

***

### eventListener()

> `protected` **eventListener**(`eventHandler`, `rawEvent`, `executionContext`): `Promise`\<`unknown`\>

Defined in: [browser-adapter/src/BrowserAdapter.ts:115](https://github.com/stonemjs/browser-adapter/blob/6ef18a8abc30e2ff2b6f68150987322f98457246/src/BrowserAdapter.ts#L115)

Processes an incoming Browser event.

This method transforms the raw Browser event into a Stone.js `IncomingBrowserEvent`,
processes it through the pipeline, and generates a `RawResponse` to send back.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingBrowserEvent`, `OutgoingBrowserResponse`\>

##### rawEvent

[`BrowserEvent`](../../declarations/type-aliases/BrowserEvent.md)

The raw Browser event to be processed.

##### executionContext

`Window` & *typeof* `globalThis`

The Browser execution context for the event.

#### Returns

`Promise`\<`unknown`\>

A promise resolving to the processed `RawResponse`.

***

### executeEventHandlerHooks()

> `protected` **executeEventHandlerHooks**(`hook`, `eventHandler`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2833

Execute the event handler lifecycle hooks.

#### Parameters

##### hook

`KernelHookName`

The hook to execute.

##### eventHandler

`AdapterEventHandlerType`\<`IncomingBrowserEvent`, `OutgoingBrowserResponse`\>

The event handler to be run.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.executeEventHandlerHooks`

***

### executeHooks()

> `protected` **executeHooks**(`name`, `context`?, `error`?): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2841

Execute adapter lifecycle hooks.

#### Parameters

##### name

`AdapterHookName`

The hook's name.

##### context?

[`BrowserAdapterContext`](../../declarations/type-aliases/BrowserAdapterContext.md)

The event context.

##### error?

`any`

The error to handle.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.executeHooks`

***

### handleError()

> `protected` **handleError**(`error`, `context`): `Promise`\<`AdapterEventBuilderType`\<`unknown`\>\>

Defined in: core/dist/index.d.ts:2797

Handle error.

#### Parameters

##### error

`Error`

The error to handle.

##### context

[`BrowserAdapterContext`](../../declarations/type-aliases/BrowserAdapterContext.md)

The event context.

#### Returns

`Promise`\<`AdapterEventBuilderType`\<`unknown`\>\>

The raw response.

#### Inherited from

`Adapter.handleError`

***

### handleEvent()

> `protected` **handleEvent**(`context`, `eventHandler`): `Promise`\<`IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<`unknown`\>\>\>

Defined in: core/dist/index.d.ts:2789

Handle the event.

#### Parameters

##### context

[`BrowserAdapterContext`](../../declarations/type-aliases/BrowserAdapterContext.md)

The event context.

##### eventHandler

`AdapterEventHandlerType`\<`IncomingBrowserEvent`, `OutgoingBrowserResponse`\>

The event handler to be run.

#### Returns

`Promise`\<`IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<`unknown`\>\>\>

The raw response wrapper.

#### Inherited from

`Adapter.handleEvent`

***

### makePipelineOptions()

> `protected` **makePipelineOptions**(): `PipelineOptions`\<[`BrowserAdapterContext`](../../declarations/type-aliases/BrowserAdapterContext.md), `AdapterEventBuilderType`\<`unknown`\>\>

Defined in: core/dist/index.d.ts:2811

Create pipeline options for the Adapter.

#### Returns

`PipelineOptions`\<[`BrowserAdapterContext`](../../declarations/type-aliases/BrowserAdapterContext.md), `AdapterEventBuilderType`\<`unknown`\>\>

The pipeline options for transforming the event.

#### Inherited from

`Adapter.makePipelineOptions`

***

### onStart()

> `protected` **onStart**(): `Promise`\<`void`\>

Defined in: [browser-adapter/src/BrowserAdapter.ts:97](https://github.com/stonemjs/browser-adapter/blob/6ef18a8abc30e2ff2b6f68150987322f98457246/src/BrowserAdapter.ts#L97)

Initializes the adapter and validates its execution context.

Ensures the adapter is running in a Browser environment. If not, it
throws an error to prevent misuse.

#### Returns

`Promise`\<`void`\>

#### Throws

If executed outside a Browser context (e.g., node).

***

### resolveErrorHandler()

> `protected` **resolveErrorHandler**(`error`): `IAdapterErrorHandler`\<[`BrowserEvent`](../../declarations/type-aliases/BrowserEvent.md), `unknown`, `Window` & *typeof* `globalThis`\>

Defined in: core/dist/index.d.ts:2826

Get the error handler for the given error.

#### Parameters

##### error

`Error`

The error to get the handler for.

#### Returns

`IAdapterErrorHandler`\<[`BrowserEvent`](../../declarations/type-aliases/BrowserEvent.md), `unknown`, `Window` & *typeof* `globalThis`\>

The error handler.

#### Throws

IntegrationError

#### Inherited from

`Adapter.resolveErrorHandler`

***

### resolveEventHandler()

> `protected` **resolveEventHandler**(): `AdapterEventHandlerType`\<`IncomingBrowserEvent`, `OutgoingBrowserResponse`\>

Defined in: core/dist/index.d.ts:2818

Get the event handler for the adapter.

#### Returns

`AdapterEventHandlerType`\<`IncomingBrowserEvent`, `OutgoingBrowserResponse`\>

The event handler for the adapter.

#### Throws

If the event handler is missing.

#### Inherited from

`Adapter.resolveEventHandler`

***

### run()

> **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

Defined in: [browser-adapter/src/BrowserAdapter.ts:72](https://github.com/stonemjs/browser-adapter/blob/6ef18a8abc30e2ff2b6f68150987322f98457246/src/BrowserAdapter.ts#L72)

Executes the adapter and provides an Browser-compatible handler function.

The `run` method initializes the adapter and listens for incoming Browser events.
It processes these events, generates a response, and sends it back to the Browser.

#### Type Parameters

• **ExecutionResultType** = `undefined`

#### Returns

`Promise`\<`ExecutionResultType`\>

#### Throws

If used outside the Browser environment.

#### Overrides

`Adapter.run`

***

### sendEventThroughDestination()

> `protected` **sendEventThroughDestination**(`context`, `eventHandler`): `Promise`\<`unknown`\>

Defined in: core/dist/index.d.ts:2781

Send the raw event through the destination.

#### Parameters

##### context

[`BrowserAdapterContext`](../../declarations/type-aliases/BrowserAdapterContext.md)

The event context.

##### eventHandler

`AdapterEventHandlerType`\<`IncomingBrowserEvent`, `OutgoingBrowserResponse`\>

The event handler to be run.

#### Returns

`Promise`\<`unknown`\>

Platform-specific response.

#### Throws

IntegrationError

#### Inherited from

`Adapter.sendEventThroughDestination`

***

### validateContextAndEventHandler()

> `protected` **validateContextAndEventHandler**(`context`, `eventHandler`): `void`

Defined in: core/dist/index.d.ts:2849

Validate the context and event handler.

#### Parameters

##### context

[`BrowserAdapterContext`](../../declarations/type-aliases/BrowserAdapterContext.md)

The context to validate.

##### eventHandler

`AdapterEventHandlerType`\<`IncomingBrowserEvent`, `OutgoingBrowserResponse`\>

The event handler to validate.

#### Returns

`void`

#### Throws

IntegrationError

#### Inherited from

`Adapter.validateContextAndEventHandler`

***

### create()

> `static` **create**(`blueprint`): [`BrowserAdapter`](BrowserAdapter.md)

Defined in: [browser-adapter/src/BrowserAdapter.ts:60](https://github.com/stonemjs/browser-adapter/blob/6ef18a8abc30e2ff2b6f68150987322f98457246/src/BrowserAdapter.ts#L60)

Creates an instance of the `BrowserAdapter`.

#### Parameters

##### blueprint

`IBlueprint`

The application blueprint.

#### Returns

[`BrowserAdapter`](BrowserAdapter.md)

A new instance of `BrowserAdapter`.

#### Example

```typescript
const adapter = BrowserAdapter.create(blueprint);
await adapter.run();
```
