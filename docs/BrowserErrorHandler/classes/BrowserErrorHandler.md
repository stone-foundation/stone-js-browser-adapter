[**Browser Adapter Documentation v0.0.2**](../../README.md)

***

[Browser Adapter Documentation](../../modules.md) / [BrowserErrorHandler](../README.md) / BrowserErrorHandler

# Class: BrowserErrorHandler

Defined in: [browser-adapter/src/BrowserErrorHandler.ts:22](https://github.com/stonemjs/browser-adapter/blob/d2a6c7f067a005360bdac09297f0863b704b814a/src/BrowserErrorHandler.ts#L22)

Class representing an BrowserErrorHandler.

## Implements

- `IAdapterErrorHandler`\<[`BrowserEvent`](../../declarations/type-aliases/BrowserEvent.md), [`BrowserResponse`](../../declarations/type-aliases/BrowserResponse.md), [`BrowserContext`](../../declarations/type-aliases/BrowserContext.md)\>

## Constructors

### new BrowserErrorHandler()

> **new BrowserErrorHandler**(`options`): [`BrowserErrorHandler`](BrowserErrorHandler.md)

Defined in: [browser-adapter/src/BrowserErrorHandler.ts:30](https://github.com/stonemjs/browser-adapter/blob/d2a6c7f067a005360bdac09297f0863b704b814a/src/BrowserErrorHandler.ts#L30)

Create an BrowserErrorHandler.

#### Parameters

##### options

[`BrowserErrorHandlerOptions`](../interfaces/BrowserErrorHandlerOptions.md)

BrowserErrorHandler options.

#### Returns

[`BrowserErrorHandler`](BrowserErrorHandler.md)

## Methods

### handle()

> **handle**(`error`, `context`): `AdapterEventBuilderType`\<`unknown`\>

Defined in: [browser-adapter/src/BrowserErrorHandler.ts:41](https://github.com/stonemjs/browser-adapter/blob/d2a6c7f067a005360bdac09297f0863b704b814a/src/BrowserErrorHandler.ts#L41)

Handle an error.

#### Parameters

##### error

`Error`

The error to handle.

##### context

`AdapterErrorContext`\<[`BrowserEvent`](../../declarations/type-aliases/BrowserEvent.md), `unknown`, `Window` & *typeof* `globalThis`\>

The context of the adapter.

#### Returns

`AdapterEventBuilderType`\<`unknown`\>

The raw response builder.

#### Implementation of

`IAdapterErrorHandler.handle`
