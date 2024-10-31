/**
 * 判断给定的路径是否为外部链接
 *
 * @param {string} path - 要检查的路径，可以是 URL 或其他链接
 * @returns {boolean} - 如果路径是外部链接（如 HTTP、HTTPS、mailto 或 tel），返回 true；否则返回 false
 */
export function isExternal(path: string): boolean {
  const reg = /^(https?:|mailto:|tel:)/
  return reg.test(path)
}
