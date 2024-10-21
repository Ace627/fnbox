/** 判断数据是否为 number 类型 */
export function isNumber(value: any): boolean {
  try {
    return Number(value) === value
  } catch (error) {
    return false
  }
}
