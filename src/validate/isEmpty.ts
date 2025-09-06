import { isMap } from './isMap'
import { isSet } from './isSet'
import { isDate } from './isDate'
import { isArray } from './isArray'
import { isNumber } from './isNumber'
import { isString } from './isString'
import { isSymbol } from './isSymbol'
import { isFunction } from './isFunction'
import { isPlainObject } from './isPlainObject'
import { isEmptyObject } from './isEmptyObject'

/**
 * 判断给定的值是否为空
 * @param {any} value - 要检查的值
 * @returns {boolean} 如果值为空则返回 true，否则返回 false
 * @description 以下情况被视为空值：
 * - null 或 undefined（通过 isNil 判断）
 * - 空字符串（长度为 0 的字符串）
 * - 空的纯对象（通过 isEmptyObject 判断）
 * - 空数组（长度为 0 的数组）
 * - 空 Map 实例（size 为 0）
 * - 空 Set 实例（size 为 0）
 * - NaN（非数字类型视为"空"）
 * - 其他类型（如数字0、布尔值、非空对象等）默认返回 false
 * @example
 * isEmpty(NaN) // => true
 * isEmpty('') // => true
 * isEmpty({}) // => true
 * isEmpty([]) // => true
 * isEmpty(100) // => false
 * isEmpty(3.14) // => false
 * isEmpty(0) // => false（补充：明确数字0非空）
 * isEmpty(true) // => false（补充：明确布尔值非空）
 */
export function isEmpty(value: any): boolean {
  if (value === true || value === false) return false
  if (value === null || value === undefined) return true
  if (isDate(value)) return Number.isNaN(value.getTime())
  if (isString(value)) return value.length === 0
  if (isNumber(value)) return false
  if (isFunction(value) || isSymbol(value)) return false // 函数或 Symbol 始终视为非空
  if (isPlainObject(value)) return isEmptyObject(value)
  if (isArray(value)) return value.length === 0
  if (isMap(value) || isSet(value)) return value.size === 0
  return false
}
