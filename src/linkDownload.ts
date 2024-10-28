import { isBrowser } from './isBrowser'

/**
 * 创建一个临时的链接，用于下载指定 URL 的文件 支持 URL、File 对象和 Blob 对象下载
 */
export function linkDownload(fileURL: string | Blob | File, fileName?: string): void {
  // 判断当前是否为浏览器环境
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
