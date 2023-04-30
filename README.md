## Diverse data structures

<p align="center">
  <a href="https://www.npmjs.com/package/decimal-subtract" target="_blank"><img src="https://img.shields.io/npm/v/decimal-subtract.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/decimal-subtract" target="_blank"><img src="https://img.shields.io/npm/l/decimal-subtract.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/package/decimal-subtract" target="_blank"><img src="https://img.shields.io/npm/dm/decimal-subtract.svg" alt="NPM Downloads" /></a>
</p>

### Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage example](#Usage-example)
- [API](#API)
  - [Stack](#Stack)

### Description

Provides diverse data structures implementations.

## Installation

For the usage in CJS or ESM run the following command:

```console
npm i diverse-data-structures
```

For script tag usage include the following script:

```html
<!DOCTYPE html>
<html>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/diverse-data-structures@1.1.0/dist/diverse-data-structures.min.js"></script>
  </body>
</html>
```

### Usage example

ESM:

```ts
import { Stack } from 'diverse-data-structures'
const stack = new Stack(10, Int8Array)

stack.push(45)
stack.push(44)
stack.push(100)
stack.pop()
```

Classic:

```ts
const { Stack } = window.diverseDataStructures
const stack = new Stack(10, Int8Array)

stack.push(45)
stack.push(44)
stack.push(100)
stack.pop()
```

### API

#### `class Stack<T>`

- Models
  - `ArrayType<T>`
    ```ts
    type ArrayType<T> =
      | (new (args: any) => Array<T>)
      | (new (args: any) => Int8Array)
      | (new (args: any) => Int16Array)
      | (new (args: any) => Int32Array)
      | (new (args: any) => Uint8Array)
      | (new (args: any) => Uint16Array)
      | (new (args: any) => Uint32Array)
      | (new (args: any) => Float32Array)
      | (new (args: any) => Float64Array)
      | (new (args: any) => BigInt64Array)
      | (new (args: any) => BigUint64Array)
    ```
- Constructor parameters
  - maxSize `number` stack size
  - array `Array` container where the stack will store its items. It
    supports typed arrays for the memory usage optimization
    **Default**: `new Array(maxSize)`
- Properties
  - maxSize `number` stack size
  - items `ArrayType<T>` container where the stack will store its items
  - top `number` is used to access the element at the top
- Methods
  - push(item)
    - item `any` stack item
    - Returns: `boolean`
    - Description: if stack is overflowed, it will return `false`, else
      it will return `true`
  - pop()
    - Returns: `boolean`
    - Description: if stack is underflowed, it will return `false`, else
      it will return the stack item

#### `class ExtendedStack<T>`

- Models
  - `ArrayType<T>`
    ```ts
    type ArrayType<T> =
      | (new (args: any) => Array<T>)
      | (new (args: any) => Int8Array)
      | (new (args: any) => Int16Array)
      | (new (args: any) => Int32Array)
      | (new (args: any) => Uint8Array)
      | (new (args: any) => Uint16Array)
      | (new (args: any) => Uint32Array)
      | (new (args: any) => Float32Array)
      | (new (args: any) => Float64Array)
      | (new (args: any) => BigInt64Array)
      | (new (args: any) => BigUint64Array)
    ```
- Constructor parameters
  - maxSize `number` stack size
  - array `Array` container where the stack will store its items. It
    supports typed arrays for the memory usage optimization
    **Default**: `new Array(maxSize)`
- Properties
  - maxSize `number` stack size
  - items `ArrayType<T>` container where the stack will store its items
  - top `number` is used to access the element at the top
- Methods
  - peek()
    - Returns: `any`
    - Description: Returns most recently added item from the stack,
      without removing it from the stack
  - duplicate()
    - Returns: `boolean`
    - Description: Picks top item and pushes its duplicate at the top of
      the stack
  - swap()
    - Returns: `boolean`
    - Description: Swaps the places of two upper items
