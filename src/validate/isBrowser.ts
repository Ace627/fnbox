/**
 * 判断当前运行环境是否为浏览器环境
 * 该函数通过检测浏览器特有的全局对象（ window 和 document）来判断执行环境
 * 在浏览器环境中，这两个对象通常都会存在；而在 Node.js 等非浏览器环境中则不存在
 * @returns {boolean} 如果是浏览器环境则返回 true，否则返回 false
 */
export function isBrowser(): boolean {
  // 使用 typeof 检查可以安全地判断对象是否存在，避免在非浏览器环境中抛出引用错误
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}
