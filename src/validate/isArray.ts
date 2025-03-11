/**
 * 判断给定的数据是否为数组类型
 * @param {any} value - 要判断的数据
 * @returns 如果是数组则返回 true，否则返回 false
 */
export function isArray(value: any): boolean {
  if (Array.isArray) return Array.isArray(value)
  // 兼容旧环境，使用 Object.prototype.toString 判断
  return Object.prototype.toString.call(value) === '[object Array]'
}
