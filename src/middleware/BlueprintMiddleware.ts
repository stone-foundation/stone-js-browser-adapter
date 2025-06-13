import { BROWSER_PLATFORM } from '../constants'
import { MetaPipe, NextPipe } from '@stone-js/pipeline'
import { ClassType, BlueprintContext, IBlueprint } from '@stone-js/core'
import { OutgoingBrowserResponse, OutgoingBrowserResponseOptions } from '@stone-js/browser-core'

/**
 * Middleware to dynamically set response resolver for adapter.
 *
 * @param context - The configuration context containing modules and blueprint.
 * @param next - The next pipeline function to continue processing.
 * @returns The updated blueprint or a promise resolving to it.
 *
 * @example
 * ```typescript
 * SetBrowserResponseResolverMiddleware(context, next)
 * ```
 */
export const SetBrowserResponseResolverMiddleware = async (
  context: BlueprintContext<IBlueprint, ClassType>,
  next: NextPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>
): Promise<IBlueprint> => {
  if (context.blueprint.get<string>('stone.adapter.platform') === BROWSER_PLATFORM) {
    context.blueprint.set('stone.kernel.responseResolver', (options: OutgoingBrowserResponseOptions) => OutgoingBrowserResponse.create(options))
  }

  return await next(context)
}

/**
 * Configuration for adapter processing middleware.
 *
 * This array defines a list of middleware pipes, each with a `pipe` function and a `priority`.
 * These pipes are executed in the order of their priority values, with lower values running first.
 */
export const metaAdapterBlueprintMiddleware: Array<MetaPipe<BlueprintContext<IBlueprint, ClassType>, IBlueprint>> = [
  { module: SetBrowserResponseResolverMiddleware, priority: 6 }
]
