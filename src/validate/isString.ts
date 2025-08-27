import { isArray } from './isArray'
import { getTag } from '@/private/_getTag'
import { isObjectLike } from './isObjectLike'

/**
 * 判断给定的值是否为字符串
 * @param {any} value - 要检查的值
 * @returns {boolean} - 如果值是数字，返回 true；否则返回 false
 */
export function isString(value: unknown): value is string {
  return typeof value == 'string' || (!isArray(value) && isObjectLike(value) && getTag(value) === '[object String]')
}
