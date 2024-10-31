/**
 * 将驼峰命名法字符串转换为下划线命名法
 *
 * @param {string} str - 要转换的驼峰字符串
 * @returns {string} - 转换后的下划线命名字符串
 */
export function humpToUnderline(str: string): string {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase()
}
