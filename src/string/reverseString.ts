/**
 * 反转字符串
 * @param value 要反转的字符串
 * @returns 反转后的字符串
 * @example
 * reverseString('hello') // => 'olleh'
 * reverseString('abc123') // => '321cba'
 * reverseString('') // => ''
 */
export function reverseString(value: string): string {
  if (value.length === 0) return ''
  return value.split('').reverse().join('')
}
