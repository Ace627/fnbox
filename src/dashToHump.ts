/** 中划线字符串转驼峰字符串 */
export function dashToHump(str: string): string {
  return str.replace(/\-(\w)/g, (_, letter: string) => letter.toUpperCase())
}
