import { isBrowser } from './isBrowser'

/**
 * 创建一个临时的链接，用于下载指定 URL 的文件
 * 该函数会动态创建一个 `<a>` 元素，触发下载操作，下载完成后移除该元素
 *
 * @param {string} fileURL 要下载的文件的 URL
 * @param {string} [fileName] 可选参数。保存文件的名称，如果未提供，将使用当前的时间戳作为文件名
 *
 * @example 通过指定文件名下载文件
 * linkDownload('https://example.com/file.pdf', 'example-file.pdf')
 *
 * @example 使用默认的时间戳作为文件名下载文件
 * linkDownload('https://example.com/file.pdf')
 */
export function linkDownload(fileURL: string, fileName?: string): void {
  // 判断当前是否为浏览器环境
  if (!isBrowser()) throw new Error('此方法仅支持在浏览器环境运行')

  const a = document.createElement('a')
  // 确保临时元素不会显示在页面中
  a.style.position = 'relative'
  a.style.left = '-999999px'
  a.style.top = '-999999px'
  a.href = fileURL
  // 指定下载后的文件名
  a.download = fileName || Date.now().toString()
  document.body.appendChild(a)
  // 自动触发点击下载
  a.click()
  // 下载完成移除元素
  document.body.removeChild(a)
}
