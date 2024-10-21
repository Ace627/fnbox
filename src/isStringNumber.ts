/** 校验是否是字符串类型的数字 */
export function isStringNumber(value: string): boolean {
  if (typeof value !== 'string') return false
  return !Number.isNaN(Number(value))
}
