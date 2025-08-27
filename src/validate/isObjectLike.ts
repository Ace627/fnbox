/**
 * 判断 `value` 是否为类对象（object-like）
 * 类对象指的是值不为 `null` 且 `typeof` 运算结果为 "object" 的值
 * @param {unknown} value - 要检查的值
 * @returns {boolean} 如果值是类对象则返回 true，否则返回 false
 * @example
 * isObjectLike({}) // => true
 * isObjectLike([1, 2, 3]) // => true
 * isObjectLike(null) // => false
 */
export function isObjectLike(value: unknown): boolean {
  return value != null && typeof value == 'object'
}
