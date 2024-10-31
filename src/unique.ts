/**
 * 从数组中移除重复值，并返回一个仅包含唯一值的新数组
 * @param {Array<T>} array - 要去重的数组
 * @returns {Array<T>} 返回一个包含唯一值的新数组
 */
export function unique<T = any>(array: Array<T>): Array<T> {
  return Array.from(new Set(array))
}
