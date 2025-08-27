import { isArray } from './isArray'

/**
 * 判断给定的值是否为空数组
 * @param {unknown} value - 要检查的值
 * @returns {boolean} 如果值是空数组则返回 true，否则返回 false
 * @example
 * isEmptyArray([]) // => true
 * isEmptyArray([1, 2, 3]) // => false
 * isEmptyArray('not an array') // => false
 */
export function isEmptyArray(value: unknown): boolean {
  if (!isArray(value)) return false
  return value.length === 0
}
