/**
 * 判断给定的值是否为 Symbol 类型
 * @param {any} value - 要检查的值
 * @returns {boolean} - 如果值是 Symbol 类型，返回 true；否则返回 false
 */
export function isSymbol(value: any): boolean {
  return !!value && value.constructor === Symbol
}
