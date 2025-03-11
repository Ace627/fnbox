/**
 * 反转给定的字符串
 * @param {string} str - 要反转的字符串
 * @returns {string} - 反转后的字符串
 */
export function reverseString(str: string): string {
  if (typeof str !== 'string') throw new Error(`参数错误，必须是 String 类型`)
  return str.split('').reverse().join('')
}
