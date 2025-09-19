import { isInteger } from './isInteger'
import { isNumber } from './isNumber'

/**
 * 判断一个年份是否为闰年
 * 闰年规则：能被 4 整除且不能被 100 整除，或者能被 400 整除的年份
 * @param year 要判断的年份（必须是整数）
 * @returns 如果是闰年则返回 true，否则返回 false
 */
export function isLeapYear(year: number): boolean {
  if (!isNumber(year)) throw new TypeError('年份必须是数字类型')

  if (!isInteger(year)) throw new RangeError('年份必须是整数')

  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}
