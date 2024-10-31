/**
 * 将驼峰命名法字符串转换为短横线命名法
 *
 * @param {string} str - 要转换的驼峰字符串
 * @returns {string} - 转换后的短横线命名字符串
 */
export function humpToDash(str: string): string {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}
