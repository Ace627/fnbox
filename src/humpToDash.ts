/** 驼峰字符串转中划线字符串 */
export function humpToDash(str: string): string {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}
