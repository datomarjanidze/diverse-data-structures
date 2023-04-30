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

export class Stack<T> {
  maxSize: number
  items: ArrayType<T>
  top: number

  constructor(maxSize: number, array: ArrayType<T> = Array) {
    this.maxSize = maxSize
    this.items = new array(maxSize) as any
    this.top = -1
  }

  push(item: any): boolean {
    if (this.top === this.maxSize - 1) {
      console.error('Stack overflow')
      return false
    } else {
      this.items[++this.top] = item
      return true
    }
  }

  pop(): false | any {
    if (this.top === -1) {
      console.error('Stack underflow')
      return false
    } else return this.items[this.top--]
  }
}

export class ExtendedStack<T> extends Stack<T> {
  constructor(maxSize: number, array: ArrayType<T> = Array) {
    super(maxSize, array)
  }

  peek(): any {
    return this.items[this.top]
  }

  duplicate(): boolean {
    return this.push(this.peek())
  }

  swap(): boolean {
    const [top, next] = [this.pop(), this.pop()]

    if (top && next) {
      this.push(top)
      this.push(next)
      return true
    } else return false
  }
}
