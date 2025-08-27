import { getTag } from '@/private/_getTag'
import { isObjectLike } from './isObjectLike'

/**
 * 判断值是否为布尔类型（包括原始布尔值和 Boolean 对象）
 * @param value 要检查的值
 * @returns 若是布尔类型则返回 true，否则返回 false
 * @example
 * isBoolean(true) // => true
 * isBoolean(false) // => true
 * isBoolean(new Boolean(true)) // => true
 * isBoolean('true') // => false
 * isBoolean(1) // => false
 */
export function isBoolean(value: any): boolean {
  return value === true || value === false || (isObjectLike(value) && getTag(value) === '[object Boolean]')
}
