/**
 * 判断给定的值是否为字符串
 *
 * @param {any} value - 要检查的值
 * @returns {boolean} - 如果值是数字，返回 true；否则返回 false
 */
export function isString(value: unknown): boolean {
  return typeof value === 'string' || value instanceof String
}
