[**Browser Adapter Documentation v0.0.2**](../../README.md)

***

[Browser Adapter Documentation](../../modules.md) / [declarations](../README.md) / RawBrowserResponseOptions

# Interface: RawBrowserResponseOptions

Defined in: [browser-adapter/src/declarations.ts:46](https://github.com/stonemjs/browser-adapter/blob/d2a6c7f067a005360bdac09297f0863b704b814a/src/declarations.ts#L46)

Represents options for configuring a raw browser response.

Extends the `RawResponseOptions` interface to include additional properties
for managing response rendering in the Browser.

## Extends

- `RawResponseOptions`

## Indexable

\[`k`: `string` \| `number` \| `symbol`\]: `unknown`

## Properties

### render()

> **render**: () => `Promiseable`\<`void`\>

Defined in: [browser-adapter/src/declarations.ts:50](https://github.com/stonemjs/browser-adapter/blob/d2a6c7f067a005360bdac09297f0863b704b814a/src/declarations.ts#L50)

The raw response object to send back to the Browser.

#### Returns

`Promiseable`\<`void`\>
