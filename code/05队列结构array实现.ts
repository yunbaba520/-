interface IQueue<T> {
  enqueue(element: T): void
  dequeue(): T | undefined
  peek(): T | undefined
  isEmpty(): boolean
  size(): number
}

class ArrayQueue<T> implements IQueue<T> {
  private data: T[] = []
  enqueue(element: T): void {
    this.data.push(element)
  }
  dequeue(): T | undefined {
    return this.data.shift()
  }
  peek(): T | undefined {
    return this.data[0]
  }
  isEmpty(): boolean {
    return this.data.length === 0
  }
  size(): number {
    return this.data.length
  }

}

const queue1 = new ArrayQueue<string>()
queue1.enqueue('aa')
queue1.enqueue('bb')
console.log(queue1.dequeue());
console.log(queue1.isEmpty());
console.log(queue1.size());
console.log(queue1.peek());



