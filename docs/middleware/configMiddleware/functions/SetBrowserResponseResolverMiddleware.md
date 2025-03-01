[**Browser Adapter Documentation v0.0.2**](../../../README.md)

***

[Browser Adapter Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / SetBrowserResponseResolverMiddleware

# Function: SetBrowserResponseResolverMiddleware()

> **SetBrowserResponseResolverMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: [browser-adapter/src/middleware/configMiddleware.ts:18](https://github.com/stonemjs/browser-adapter/blob/d2a6c7f067a005360bdac09297f0863b704b814a/src/middleware/configMiddleware.ts#L18)

Middleware to dynamically set response resolver for adapter.

## Parameters

### context

`BlueprintContext`\<`IBlueprint`, `ClassType`\>

The configuration context containing modules and blueprint.

### next

`NextPipe`\<`BlueprintContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>

The next pipeline function to continue processing.

## Returns

`Promise`\<`IBlueprint`\>

The updated blueprint or a promise resolving to it.

## Example

```typescript
SetBrowserResponseResolverMiddleware(context, next)
```
