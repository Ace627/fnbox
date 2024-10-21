/** 判断传入数据是否为 Symbol 类型 */
export function isSymbol(value: any): boolean {
  return !!value && value.constructor === Symbol
}
