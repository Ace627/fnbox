/**
 * 判断给定的字符串是否可以转换为有效的数字
 * @param {string} value - 要检查的字符串
 * @returns {boolean} - 如果字符串可以转换为数字，返回 true；否则返回 false
 */
export function isStringNumber(value: string): boolean {
  if (typeof value !== 'string') return false
  return !Number.isNaN(Number(value))
}
