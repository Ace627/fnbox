import { isNumber } from './isNumber'

/** 判断数字是否为浮点数 */
export function isFloat(value: any): boolean {
  return isNumber(value) && value % 1 !== 0
}
