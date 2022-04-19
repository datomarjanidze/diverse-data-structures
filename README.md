# Diverse data structures

![language](https://img.shields.io/badge/language-JavaScript-yellow.svg)
![license](https://img.shields.io/badge/license-ISC-green)
[![npm version](https://img.shields.io/npm/v/diverse-data-structures.svg?style=flat)](https://npmjs.org/package/diverse-data-structures)
[![npm download](https://img.shields.io/npm/dt/diverse-data-structures.svg)](https://npmjs.org/package/diverse-data-structures)

## Installation
```console
npm i diverse-data-structures
```

## Example usage
```javascript
const { Stack } = require('diverse-data-structures')
const stack = new Stack(10, Int8Array)

stack.push(45)
stack.push(44)
stack.push(100)
stack.pop()
```

## Table of contents
- [Stack](#stack)

## Stack

### `Stack` class
<table>
  <thead>
    <tr>
      <th>Constructor Param</th>
      <th>Description</th>
      <th>Default value</th>
      <th>Possible values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>maxSize</td>
      <td>Max size of stack items</td>
      <td>undefined</td>
      <td>> 0</td>
    </tr>
    <tr>
      <td>array</td>
      <td>Array class for optimizing performance and memory usage</td>
      <td>Array</td>
      <td>
        Array, Int8Array, Int16Array, Int32Array, Uint8Array, Uint16Array,
        Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <thead>
    <tr>
      <th>Class Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>push</td>
      <td>Pushes an item at the top of the stack</td>
    </tr>
    <tr>
      <td>pop</td>
      <td>Removes most recently added item from the stack</td>
    </tr>
  </tbody>
</table>

<br>

### `ExtendedStack` class
<table>
  <thead>
    <tr>
      <th>Class Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>peek</td>
      <td>
        Returns most recently added item from the stack, without removing it
        from the stack
      </td>
    </tr>
    <tr>
      <td>duplicate</td>
      <td>Picks top item and pushes its duplicate at the top of the stack</td>
    </tr>
    <tr>
      <td>swap</td>
      <td>Swaps the places of two upper items</td>
    </tr>
  </tbody>
</table>
