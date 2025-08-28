import { isNil } from './isNil'
import { MAX_SAFE_INTEGER } from '@/enums/constant'

/**
 * 判断给定的值是否为有效的长度值
 * @param {any} value - 要检查的值
 * @returns {boolean} 如果是有效的长度值则返回 true，否则返回 false
 * @description 有效的长度值需满足：
 * - 不是 null 或 undefined
 * - 是 number 原始类型
 * - 大于等于 0
 * - 是整数（无小数部分）
 * - 小于等于 Number.MAX_SAFE_INTEGER（2^53 - 1）
 * @example
 * isLength(5) // => true
 * isLength(0) // => true
 * isLength(10.5) // => false
 * isLength(-3) // => false
 * isLength('10') // => false
 * isLength(null) // => false
 * isLength(Number.MAX_SAFE_INTEGER) // => true
 */
export function isLength(value: any): boolean {
  if (isNil(value)) return false
  // 使用 typeof value === 'number' 确保值是原始数字类型，排除了 Number 对象等情况
  return typeof value === 'number' && value >= 0 && value % 1 === 0 && value <= MAX_SAFE_INTEGER
}
