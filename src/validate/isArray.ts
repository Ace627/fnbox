/**
 * 判断给定的值是否为数组
 * @param {unknown} value - 要检查的值
 * @returns {boolean} 如果值是数组则返回 true，否则返回 false
 */
export function isArray(value: any): value is any[] {
  return Array.isArray(value)
}
