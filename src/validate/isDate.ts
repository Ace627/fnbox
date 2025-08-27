import { isNil } from './isNil'
import { getTag } from '@/private/_getTag'

/**
 * 判断值是否为 Date 对象（包括无效日期对象）
 * @param value 要检查的未知类型值
 * @returns 若是 Date 对象则返回 true，否则返回 false
 * @example
 * isDate(new Date()) // => true
 * isDate(new Date('invalid-date')) // => true（虽为无效日期，但仍是 Date 对象）
 * isDate('2023-01-01') // => false（字符串类型）
 * isDate(null) // => false
 */
export function isDate(value: any): value is Date {
  if (isNil(value)) return false
  return getTag(value) === '[object Date]'
}
