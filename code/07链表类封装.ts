// 封装一个Node类，用于封装每一个节点上的信息（包括值和指向下一个节点的引用），它是一个泛型类
class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

// 封装一个LinkedList类，用于表示我们的链表结构。链表中我们保存两个属性，一个是链表的长度，一个是链表中第一个节点。
class LinkedList<T> {
  head: Node<T> | null = null;
  size: number = 0;

  // 向链表尾部添加新一项
  append(value: T) {
    // 1.根据value创建一个新节点
    const newNode = new Node<T>(value);
    // 2.判断this.head是否为null
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      // current肯定是指向最后一个节点的
      current.next = newNode;
    }
    // 3.size++
    this.size++;
  }
  // 遍历链表的方法
  traverse() {
    const values: T[] = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join("->"));
  }
}

const linkedList = new LinkedList<string>();
linkedList.append("aaa");
linkedList.append("bbb");
linkedList.append("ccc");
linkedList.append("ddd");

linkedList.traverse();
export {};
