import { isNil } from './isNil'
import { getTag } from '@/private/_getTag'

/**
 * 判断给定的值是否为 Map 实例
 * @param {any} value - 要检查的值
 * @returns {value is Map<any, any>} 如果是 Map 实例则返回 true，否则返回 false
 * @example
 * isMap(new Map()) // => true
 * isMap(new WeakMap()) // => false
 * isMap({}) // => false
 * isMap(null) // => false
 */
export function isMap(value: any): value is Map<any, any> {
  if (isNil(value)) return false
  return getTag(value) === '[object Map]'
}
