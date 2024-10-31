/**
 * 判断给定的值是否为数字
 *
 * @param {any} value - 要检查的值
 * @returns {boolean} - 如果值是数字，返回 true；否则返回 false
 */
export function isNumber(value: any): boolean {
  try {
    return Number(value) === value
  } catch (error) {
    return false
  }
}
