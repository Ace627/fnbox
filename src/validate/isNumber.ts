import { getTag } from '@/private/_getTag'
import { isObjectLike } from './isObjectLike'

/**
 * 判断给定的值是否为有效数字（排除 NaN）
 * @param {unknown} value - 要检查的值
 * @returns {boolean} - 如果值是有效数字，返回 true；否则返回 false
 */
export function isNumber(value: unknown): value is number {
  return (typeof value === 'number' && !Number.isNaN(value)) || (isObjectLike(value) && getTag(value) === '[object Number]')
}
