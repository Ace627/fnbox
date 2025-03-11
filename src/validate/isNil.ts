/**
 * 检查值是否为 null 或 undefined
 * @param {any} value - 要检查的值
 * @returns {boolean} 如果值为 null 或 undefined，返回 true；否则返回 false
 */
export function isNil(value: any): boolean {
  return value === null || value === undefined
}
