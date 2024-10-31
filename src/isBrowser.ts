/**
 * 检测当前环境是否为浏览器
 *
 * @returns {boolean} - 如果当前环境是浏览器，返回 true；否则返回 false
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}
