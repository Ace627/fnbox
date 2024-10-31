import { isBrowser } from './isBrowser'

/**
 * 一个利用 a 标签下载文件的函数
 *
 * @param {string | Blob | File} fileURL - 文件的 URL、Blob 对象或 File 对象
 * @param {string} [fileName] - 下载时的文件名（可选）。如果未提供，则使用当前时间戳作为文件名
 * @throws {Error} - 如果在非浏览器环境中调用该函数，将抛出错误
 */
export function linkDownload(fileURL: string | Blob | File, fileName?: string): void {
  if (!isBrowser()) throw new Error('此方法仅支持在浏览器环境运行')
  let href: string = typeof fileURL === 'string' ? fileURL : URL.createObjectURL(fileURL)
  const a = document.createElement('a')
  a.style.display = 'none'
  a.href = href
  a.download = fileName || Date.now().toString()
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  if (typeof fileURL !== 'string') URL.revokeObjectURL(href)
}
