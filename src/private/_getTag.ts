/**
 * 获取值的原始类型标签（基于 Object.prototype.toString.call）
 * @private
 * @param {unknown} value - 要检查的值（支持任意类型）
 * @returns {string} 原始类型标签，格式为 '[object 类型名]'（如 '[object Number]'）
 * @example
 * getTag(123) // => '[object Number]'
 * getTag('hello') // => '[object String]'
 * getTag([]) // => '[object Array]'
 * getTag(null) // => '[object Null]'
 */
export function getTag(value: unknown): string {
  return Object.prototype.toString.call(value)
}
