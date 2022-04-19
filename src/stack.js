class Stack {
  constructor(
    maxSize /*: number */,
    array = Array /*:
      Array |
      Int8Array |
      Int16Array |
      Int32Array |
      Uint8Array |
      Uint16Array |
      Uint32Array |
      Float32Array |
      Float64Array |
      BigInt64Array |
      BigUint64Array
    */
  ) {
    this.maxSize = maxSize
    this.items = new array(maxSize)
    this.top = -1
  }

  push(item /*: any */) /*: boolean */ {
    if (this.top === this.maxSize - 1) {
      console.error('Stack overflow')
      return false
    } else {
      this.items[++this.top] = item
      return true
    }
  }

  pop() /*: false | any */ {
    if (this.top === -1) {
      console.error('Stack underflow')
      return false
    } else return this.items[this.top--]
  }
}

class ExtendedStack extends Stack {
  constructor(...args) {
    super(...args)
  }

  peek() /*: any */ {
    return this.items[this.top]
  }

  duplicate() /*: boolean */ {
    return this.push(this.peek())
  }

  swap() /*: boolean */ {
    const [top, next] = [this.pop(), this.pop()]

    if (top && next) {
      this.push(top)
      this.push(next)
      return true
    } else return false
  }
}

module.exports = { Stack, ExtendedStack }
