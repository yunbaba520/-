
import ArrayStack from "./02栈结构array实现 ts重构";
function isValid(s: string): boolean {
  const stack = new ArrayStack<string>()
  for (let i = 0; i < s.length; i++) {
    const e = s[i];
    switch (e) {
      case '(':
        stack.push(')')
        break;
      case '{':
        stack.push('}')
        break;
      case '[':
        stack.push(']')
        break;
      default:
        if (e !== stack.pop()) return false
        break;
    }
  }
  return stack.isEmpty()
}
// 测试
console.log(isValid('{}(){'));
console.log(isValid('{}'));
console.log(isValid('{}[]()'));
console.log(isValid('{[}]()'));


