import { isBrowser } from './isBrowser'

/** 创建一个临时的链接，用于下载指定 URL 的文件 */
export function linkDownload(fileURL: string, fileName?: string): void {
  // 判断当前是否为浏览器环境
  if (!isBrowser()) throw new Error('此方法仅支持在浏览器环境运行')
  const a = document.createElement('a')
  a.style.position = 'relative'
  a.style.left = '-999999px'
  a.style.top = '-999999px'
  a.href = fileURL
  a.download = fileName || Date.now().toString()
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
