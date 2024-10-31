import { isString } from './isString'

/**
 * 检查给定值是否是字符串形式的布尔值，即 "true" 或 "false"
 * @param {any} value - 要检查的值
 * @returns {boolean} 如果值是 "true" 或 "false" 字符串，返回 true；否则返回 false
 */
export function isStringBoolean(value: any): boolean {
  if (!isString(value)) return false
  return ['true', 'false'].includes(value)
}
