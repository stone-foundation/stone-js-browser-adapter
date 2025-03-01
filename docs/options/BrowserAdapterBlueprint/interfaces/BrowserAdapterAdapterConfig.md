[**Browser Adapter Documentation v0.0.2**](../../../README.md)

***

[Browser Adapter Documentation](../../../modules.md) / [options/BrowserAdapterBlueprint](../README.md) / BrowserAdapterAdapterConfig

# Interface: BrowserAdapterAdapterConfig

Defined in: [browser-adapter/src/options/BrowserAdapterBlueprint.ts:16](https://github.com/stonemjs/browser-adapter/blob/d2a6c7f067a005360bdac09297f0863b704b814a/src/options/BrowserAdapterBlueprint.ts#L16)

Configuration interface for the Browser Adapter.

Extends the `AdapterConfig` interface from the Stone.js framework and provides
customizable options specific to the Browser platform. This includes
alias, resolver, middleware, hooks, and various adapter state flags.

## Extends

- `AdapterConfig`

## Properties

### alias?

> `optional` **alias**: `string`

Defined in: core/dist/index.d.ts:426

The alias name for the adapter.
This is a unique identifier used to reference the adapter.
Optional property.

#### Inherited from

`AdapterConfig.alias`

***

### current?

> `optional` **current**: `boolean`

Defined in: core/dist/index.d.ts:432

The current status identifier for the adapter.
Used to indicate if this adapter instance is active or currently in use.
Optional property.

#### Inherited from

`AdapterConfig.current`

***

### default?

> `optional` **default**: `boolean`

Defined in: core/dist/index.d.ts:437

Defines whether this adapter is the default adapter used by the application.
Optional property.

#### Inherited from

`AdapterConfig.default`

***

### errorHandlers

> **errorHandlers**: `Record`\<`string`, `MetaAdapterErrorHandler`\>

Defined in: core/dist/index.d.ts:420

Error handlers used to manage and report errors that occur within the adapter.
These handlers can be used to customize error handling behavior and logging.

#### Inherited from

`AdapterConfig.errorHandlers`

***

### eventHandlerResolver

> **eventHandlerResolver**: `AdapterEventHandlerResolver`\<`IncomingEvent`, `OutgoingResponse`\>

Defined in: core/dist/index.d.ts:415

The event handler resolver used to create instances of the event handler.

#### Inherited from

`AdapterConfig.eventHandlerResolver`

***

### events

> **events**: `string`[]

Defined in: [browser-adapter/src/options/BrowserAdapterBlueprint.ts:20](https://github.com/stonemjs/browser-adapter/blob/d2a6c7f067a005360bdac09297f0863b704b814a/src/options/BrowserAdapterBlueprint.ts#L20)

Browser-specific events that the adapter should listen for.

***

### middleware

> **middleware**: `AdapterMixedPipeType`\<`AdapterContext`\<`any`, `any`, `any`\>, `any`\>[]

Defined in: core/dist/index.d.ts:411

The middleware used for processing incoming or outgoing data in the adapter.
Middleware can modify or handle events at different stages of the adapter's lifecycle.

#### Inherited from

`AdapterConfig.middleware`

***

### platform

> **platform**: `string`

Defined in: core/dist/index.d.ts:402

The platform identifier for the adapter.
This is used to categorize the adapter based on the environment or technology it supports.

#### Inherited from

`AdapterConfig.platform`

***

### resolver

> **resolver**: `AdapterResolver`

Defined in: core/dist/index.d.ts:406

The class type resolver used to create instances of the adapter.

#### Inherited from

`AdapterConfig.resolver`
