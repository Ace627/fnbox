/**
 * 一个利用 a 标签下载文件的函数
 * @param {string | Blob | File} fileURL - 文件的 URL 或 Blob 对象或 File 对象
 * @param {string} [fileName] - 下载文件的名称，可选参数，默认为当前时间戳
 */
export function linkDownload(fileURL: string | Blob | File, fileName?: string): void {
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
