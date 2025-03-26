[**Browser Adapter Documentation v0.0.2**](../../../README.md)

***

[Browser Adapter Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / SetBrowserResponseResolverMiddleware

# Function: SetBrowserResponseResolverMiddleware()

> **SetBrowserResponseResolverMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: browser-adapter/src/middleware/BlueprintMiddleware.ts:18

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
