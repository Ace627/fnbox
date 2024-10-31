/**
 * 反转给定的字符串
 *
 * @param {string} str - 要反转的字符串
 * @returns {string} - 反转后的字符串
 */
export function reverseString(str: string): string {
  return str.split('').reverse().join('')
}
