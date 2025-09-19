/**
 * 将字符串的首字母转为大写，其余字母转为小写
 * @param str 要处理的字符串
 * @returns 首字母大写的新字符串（空字符串输入返回空字符串）
 * @example
 * upperFirst('hello') // 'Hello'
 * upperFirst('WORLD') // 'World'
 * upperFirst('tEsT') // 'Test'
 * upperFirst('hello world') // 'Hello world'
 * upperFirst('123abc') // '123abc'（数字不影响，首字符是数字时保持原样）
 * upperFirst('#tag') // '#tag'（特殊字符不影响，首字符是特殊字符时保持原样）
 */
export function upperFirst(str: string): string {
  // 移除首尾空白后检查是否为空（处理全空白字符串）
  if (!str.trim()) return ''
  // 取第一个非空白字符转为大写，拼接剩余字符的小写形式
  return str[0].toUpperCase() + str.slice(1).toLowerCase()
}
