import { isNil } from './isNil'
import { getTag } from '@/private/_getTag'

/**
 * 判断值是否为函数类型
 * @param value 要检查的未知类型值
 * @returns 如果是函数则返回 true，否则返回 false
 * @example
 * isFunction(() => {}) // => true
 * isFunction(function() {}) // => true
 * isFunction(class {}) // => true（类本质上是特殊函数）
 * isFunction('function') // => false
 * isFunction(null) // => false
 */
export function isFunction(value: any): value is Function {
  if (isNil(value)) return false
  if (typeof value === 'function') return true // 标准函数判断
  return getTag(value) === '[object Function]'
}
