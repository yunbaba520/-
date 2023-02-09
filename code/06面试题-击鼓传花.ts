// 几个朋友一起玩一个游戏，围成一圈，开始数数，数到某个数字的人自动淘汰。
// 最后剩下的这个人会获得胜利，请问最后剩下的是原来在哪一个位置上的人

import ArrayQueue from "./05队列结构array实现"

function hotPotato(arr: string[], num: number): number {
  const queue = new ArrayQueue<string>()
  // 数组所有数据进入队列
  for (const item of arr) {
    queue.enqueue(item)
  }
  while (queue.size() > 1) {
    // 把不是num的删除再加入
    for (let i = 1; i < num; i++) {
      const name = queue.dequeue()
      if (name) {
        queue.enqueue(name)
      }
    }
    // 把数到num的人删除
    queue.dequeue()
  }

  return arr.indexOf(queue.dequeue()!)
}

console.log(hotPotato(['aaa', 'bbb', 'ccc', 'ddd'], 3));
