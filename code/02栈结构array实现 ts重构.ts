// 定义一个接口
interface IStack<T> {
  push(element: T): void
  pop(): T | undefined
  peek(): T | undefined
  isEmpty(): boolean
  size(): number
}
// ArrayStack实现IStack接口
class ArrayStack<T> implements IStack<T> {
  private data: T[] = []
  // 添加元素
  push(element: T): void {
    this.data.push(element)
  }
  // 删除元素
  pop(): T | undefined {
    return this.data.pop()
  }
  // 返回栈顶元素，不对栈做任何修改
  peek(): T | undefined {
    return this.data[this.data.length - 1]
  }
  // 判断栈是否为空
  isEmpty(): boolean {
    return this.data.length === 0
  }
  // 返回栈里元素个数
  size(): number {
    return this.data.length
  }
}
const stack1 = new ArrayStack<string>()
stack1.push('aaa')
const stack2 = new ArrayStack<number>()
stack2.push(123)

export default ArrayStack