/**
 * 将下划线命名的字符串转换为驼峰命名法
 *
 * @param {string} str - 要转换的下划线字符串
 * @returns {string} - 转换后的驼峰命名字符串
 */
export function underlineToHump(str: string): string {
  return str.replace(/\_(\w)/g, (_, letter: string) => letter.toUpperCase())
}
