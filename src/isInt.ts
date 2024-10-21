import { isNumber } from './isNumber'

/** 判断数字是否为整数 */
export function isInt(value: any): boolean {
  return isNumber(value) && value % 1 === 0
}
