import { isNil } from './isNil'
import { getTag } from '@/private/_getTag'

/**
 * 判断给定的值是否为 Set 实例
 * @param {any} value - 要检查的值
 * @returns {value is Set<any>} 如果是 Set 实例则返回 true，否则返回 false
 * @example
 * isSet(new Set()) // => true
 * isSet(new Set([1, 2, 3])) // => true
 * isSet(new Map()) // => false
 * isSet({}) // => false
 * isSet(null) // => false
 * isSet(undefined) // => false
 */
export function isSet(value: any): value is Set<any> {
  if (isNil(value)) return false
  return getTag(value) === '[object Set]'
}
