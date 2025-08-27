import { isPlainObject } from './isPlainObject'

/**
 * 判断给定的值是否为空对象（无任何自有可枚举属性的纯对象）
 * @param {unknown} value - 要检查的值
 * @returns {boolean} 是空对象则返回 true，否则返回 false
 * @example
 * isEmptyObject({}) // => true
 * isEmptyObject(new Object()) // => true
 * isEmptyObject(Object.create(null)) // => true
 * isEmptyObject({ a: 1 }) // => false
 * isEmptyObject([]) // => false（非纯对象）
 */
export function isEmptyObject(value: unknown): boolean {
  if (!isPlainObject(value)) return false
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) return false
  }
  return true
}
