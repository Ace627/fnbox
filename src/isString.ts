/** 校验是数据是否为 string 类型 */
export function isString(value: unknown): boolean {
  return typeof value === 'string' || value instanceof String
}
