class ArrayStack {
   private data: any[] = []
   // 添加元素
   push(element: any): void {
    this.data.push(element)
   }
   // 删除元素
   pop(): any {
    return this.data.pop()
   }
   // 返回栈顶元素，不对栈做任何修改
   peek(): any {
    return this.data[this.data.length -1]
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
const stack1 = new ArrayStack()

stack1.push('aaa')
stack1.push('bbb')
console.log(stack1);
console.log(stack1.pop());
console.log(stack1.peek());
console.log(stack1.isEmpty());
console.log(stack1.size());






export {}