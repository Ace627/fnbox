import { isNumber } from './isNumber'

/**
 * 判断给定的值是否为整数
 * @param {any} value - 要检查的值
 * @returns {boolean} - 如果值是整数，返回 true；否则返回 false
 */
export function isInt(value: any): boolean {
  return isNumber(value) && value % 1 === 0
}
