/** 下划线字符串转驼峰字符串  */
export function underlineToHump(str: string): string {
  return str.replace(/\_(\w)/g, (_, letter: string) => letter.toUpperCase())
}
