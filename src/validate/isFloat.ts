import { isNumber } from './isNumber'

/**
 * 判断值是否为浮点数（含小数部分的有限数字）
 * @param value 要检查的未知类型值
 * @returns 若是浮点数则返回 true，否则返回 false
 * @example
 * isFloat(123.45) // => true
 * isFloat(-0.1) // => true
 * isFloat(123) // => false
 * isFloat(Infinity) // => false
 */
export function isFloat(value: any): value is number {
  if (!isNumber(value) || !Number.isFinite(value)) return false
  return value % 1 !== 0
}
