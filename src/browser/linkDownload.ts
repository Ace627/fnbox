import { isBlob } from '@/validate/isBlob'
import { isBrowser } from '@/validate/isBrowser'

/**
 * 通过创建隐藏的a标签实现文件下载功能
 * 该函数支持两种下载源：URL 字符串或 Blob 对象，会自动处理不同类型的资源
 * 注意：此函数仅能在浏览器环境中使用，在 Node.js 等非浏览器环境中会抛出错误
 * @param {string | Blob} fileURL - 下载资源的 URL 字符串或 Blob 对象
 * @param {string} fileName - 可选的文件名，若未提供则使用当前时间戳作为默认文件名
 * @example
 * // 从URL下载文件
 * linkDownload('https://example.com/file.pdf', 'document.pdf')
 * // 从Blob对象下载文件
 * const blob = new Blob(['hello world'], { type: 'text/plain' })
 * linkDownload(blob, 'hello.txt')
 */
export function linkDownload(fileURL: string | Blob, fileName?: string): void {
  // 检查是否在浏览器环境，非浏览器环境抛出错误
  if (!isBrowser()) throw new Error('此方法仅支持浏览器环境使用')

  // 创建隐藏的a标签用于触发下载
  const a: HTMLAnchorElement = document.createElement('a')
  a.style.display = 'none'

  // 根据资源类型设置 href 属性
  // 如果是 Blob 对象，使用 URL.createObjectURL 创建临时 URL
  // 否则直接使用提供的 URL 字符串
  a.href = isBlob(fileURL) ? URL.createObjectURL(fileURL) : fileURL

  // 设置下载文件名，未提供则使用时间戳
  a.download = fileName ? fileName : `${Date.now()}`

  // 将 a 标签添加到文档中并触发点击
  document.body.appendChild(a)
  a.click()

  // 清理：如果是 Blob 对象创建的 URL，需要释放资源
  if (isBlob(fileURL)) URL.revokeObjectURL(a.href)

  // 从文档中移除 a 标签
  document.body.removeChild(a)
}
