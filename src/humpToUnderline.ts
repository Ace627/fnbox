/** 驼峰字符串转下划线字符串 */
export function humpToUnderline(str: string): string {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase()
}
