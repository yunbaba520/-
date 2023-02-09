import ArrayStack from "./02栈结构array实现 ts重构"

// 思路：十进制数字一直除2取余，加入栈中，最后取出
function decimalToBinary(decimal: number): string {
    const stack1 = new ArrayStack<number>()
    let myDecimal = decimal
    let returnStr = ''
    // 知道循环次数for，不知道while
    while (myDecimal > 0) {
        stack1.push(myDecimal % 2)
        myDecimal = Math.floor(myDecimal / 2)
    }
    // 从栈中取出，并拼接字符串
    while (!stack1.isEmpty()) {
        returnStr += stack1.pop()
    }

    return returnStr
}
console.log(decimalToBinary(35));
console.log(decimalToBinary(100));

export { }