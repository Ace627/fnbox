import { isNil } from './isNil'
import { getTag } from '@/private/_getTag'

/**
 * 判断给定的值是否为 WeakMap 实例
 * @param {any} value - 要检查的值
 * @returns {value is WeakMap<any, any>} 如果是 WeakMap 实例则返回 true，否则返回 false
 * @example
 * isWeakMap(new WeakMap()) // => true
 * isWeakMap(new Map()) // => false
 * isWeakMap({}) // => false
 * isWeakMap(null) // => false
 * isWeakMap(undefined) // => false
 */
export function isWeakMap(value: any): value is WeakMap<any, any> {
  if (isNil(value)) return false
  return getTag(value) === '[object WeakMap]'
}
