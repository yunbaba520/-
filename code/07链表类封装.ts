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
  // 插入方法: abc
  insert(value: T, position: number): boolean {
    // 1.越界的判断
    if (position < 0 || position > this.size) return false;

    // 2.根据value创建新的节点
    const newNode = new Node(value);

    // 3.判断是否需要插入头部
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous: Node<T> | null = null;
      let index = 0;
      while (index++ < position && current) {
        previous = current;
        current = current.next;
      }
      // index === position
      newNode.next = current;
      previous!.next = newNode;
    }
    this.size++;

    return true;
  }
  // 删除方法:
  removeAt(position: number): T | null {
    // 1.越界的判断
    if (position < 0 || position >= this.size) return null;

    // 2.判断是否是删除第一个节点
    let current = this.head;
    if (position === 0) {
      this.head = current?.next ?? null;
    } else {
      let previous: Node<T> | null = null;
      let index = 0;
      while (index++ < position && current) {
        previous = current;
        current = current.next;
      }

      // 找到需要的节点
      previous!.next = current?.next ?? null;
    }

    this.size--;

    return current?.value ?? null;
  }
  // 获取方法:
  get(position: number): T | null {
    // 越界问题
    if (position < 0 || position >= this.size) return null;

    // 2.查找元素, 并且范围元素
    let index = 0;
    let current = this.head;
    while (index++ < position && current) {
      current = current.next;
    }

    // index === position
    return current?.value ?? null;
  }
  // 更新某个值
  update(position: number, value: T): boolean {
    // 判断越界
    if (position < 0 || position >= this.size) return false;
    // 获取position对应node
    let index: number = 0;
    let current: Node<T> | null = this.head;
    while (index < position && current) {
      current = current?.next;
      index++;
    }
    current!.value = value;
    return true;
  }
  // 根据值获取索引
  indexOf(value: T): number {
    let index: number = 0;
    let current: Node<T> | null = this.head;
    while (index < this.size) {
      if (value === current?.value) {
        return index;
      }
      current = current!.next;
      index++;
    }
    return -1;
  }
  // 根据value删除节点
  remove(value: T): T | null {
    const currentIndex = this.indexOf(value);
    return this.removeAt(currentIndex);
  }
  // 判读单链表是否为空的方法
  isEmpty() {
    return this.size === 0;
  }
}

const linkedList = new LinkedList<string>();
linkedList.append("aaa");
linkedList.append("bbb");
linkedList.append("ccc");
linkedList.append("ddd");

linkedList.traverse();
console.log("```````````````````````插入");

linkedList.insert("abc", 1);
linkedList.traverse();
console.log("```````````````````````删除");

linkedList.removeAt(1);
linkedList.traverse();
console.log("```````````````````````get");
console.log(linkedList.get(1));
console.log("```````````````````````update");

console.log(linkedList.update(1, "bcb"));

linkedList.traverse();
console.log("```````````````````````indexOf");
console.log(linkedList.indexOf("ddd"));
console.log("```````````````````````remove");
linkedList.remove("ccc");
linkedList.traverse();

export {};
