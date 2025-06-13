[**Browser Adapter Documentation v0.0.2**](../../../README.md)

***

[Browser Adapter Documentation](../../../modules.md) / [errors/BrowserAdapterError](../README.md) / BrowserAdapterError

# Class: BrowserAdapterError

Defined in: [browser-adapter/src/errors/BrowserAdapterError.ts:6](https://github.com/stonemjs/browser-adapter/blob/6ef18a8abc30e2ff2b6f68150987322f98457246/src/errors/BrowserAdapterError.ts#L6)

Custom error for Browser adapter operations.

## Extends

- `IntegrationError`

## Constructors

### new BrowserAdapterError()

> **new BrowserAdapterError**(`message`, `options`?): [`BrowserAdapterError`](BrowserAdapterError.md)

Defined in: [browser-adapter/src/errors/BrowserAdapterError.ts:7](https://github.com/stonemjs/browser-adapter/blob/6ef18a8abc30e2ff2b6f68150987322f98457246/src/errors/BrowserAdapterError.ts#L7)

#### Parameters

##### message

`string`

##### options?

`ErrorOptions`

#### Returns

[`BrowserAdapterError`](BrowserAdapterError.md)

#### Overrides

`IntegrationError.constructor`

## Properties

### cause?

> `readonly` `optional` **cause**: `Error`

Defined in: core/dist/index.d.ts:3343

#### Inherited from

`IntegrationError.cause`

***

### code?

> `readonly` `optional` **code**: `string`

Defined in: core/dist/index.d.ts:3342

#### Inherited from

`IntegrationError.code`

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

Defined in: core/dist/index.d.ts:3344

#### Inherited from

`IntegrationError.metadata`

## Methods

### toString()

> **toString**(`multiline`?): `string`

Defined in: core/dist/index.d.ts:3365

Converts the error to a formatted string representation.

#### Parameters

##### multiline?

`boolean`

Determine if output value must be multiline or not.

#### Returns

`string`

A formatted error string.

#### Inherited from

`IntegrationError.toString`

***

### create()

> `static` **create**\<`T`\>(`message`, `options`?): `T`

Defined in: core/dist/index.d.ts:3351

Create a RuntimeError.

#### Type Parameters

• **T** *extends* `RuntimeError` = `RuntimeError`

#### Parameters

##### message

`string`

##### options?

`ErrorOptions`

The options to create a RuntimeError.

#### Returns

`T`

A new RuntimeError instance.

#### Inherited from

`IntegrationError.create`
