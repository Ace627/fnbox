/**
 * 判断当前环境是否为浏览器环境
 * 通过检查全局对象 `window` 和 `document` 来确定是否运行在浏览器中
 * 这在一些需要区分 Node.js 和浏览器环境的情况下非常有用，例如服务端渲染时
 *
 * @returns {boolean} 如果当前环境是浏览器，返回 `true`；否则返回 `false`
 *
 * @example 判断是否为浏览器环境
 * console.log(`${isBrowser()} ? '当前运行在浏览器环境中' : '当前不是浏览器环境'`)
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}
