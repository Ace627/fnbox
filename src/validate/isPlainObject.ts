import { getTag } from '@/private/_getTag'
import { isObjectLike } from './isObjectLike'

/**
 * 判断给定的值是否为纯对象（通过 {} 或 new Object 创建）
 * 纯对象不包括：数组、日期、正则、函数等特殊对象
 * @param {unknown} value - 要检查的值
 * @returns {boolean} 如果是纯对象则返回 true，否则返回 false
 * @example
 * isPlainObject({}) // => true
 * isPlainObject(new Object()) // => true
 * isPlainObject(Object.create(null)) // => true
 * isPlainObject([]) // => false
 * isPlainObject(new Date()) // => false
 */
export function isPlainObject(value: unknown): value is object {
  // 快速排除非类对象类型（如 null、基本类型、函数等）
  if (!isObjectLike(value)) return false
  // 类型标签必须为 [object Object]（排除数组、日期等内置对象）
  if (getTag(value) !== '[object Object]') return false
  // 处理 Object.create(null) 创建的对象（无 prototype）
  const prototype = Object.getPrototypeOf(value)
  if (prototype === null) return true
  // 必须是自身原型上的 constructor，且严格等于 Object 构造函数
  const constructor = Object.hasOwnProperty.call(prototype, 'constructor') ? prototype.constructor : undefined
  return typeof constructor === 'function' && constructor.prototype === prototype && constructor === Object
}
