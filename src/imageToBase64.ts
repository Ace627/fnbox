import { isBrowser } from './isBrowser'

/**
 * 将图片 URL 转换为 Base64 格式
 *
 * @param {string} imgURL - 图片的 URL 地址
 * @param {number} [quality=0.9] - 图片质量，范围为 0 到 1
 * @returns {Promise<string>} - 返回包含图片 Base64 数据的 Promise
 *
 * @throws {Error} 如果当前环境不是浏览器，则抛出错误
 * @throws {Error} 如果指定的质量不在 0 到 1 的范围内，则抛出错误
 */
export function imageToBase64(imgURL: string, quality = 0.9): Promise<string> {
  if (!isBrowser()) throw new Error('此方法仅支持在浏览器环境运行')

  if (quality < 0 || quality > 1) throw new Error(`图片质量范围在 0 到 1 之间`)

  const img = new Image()
  // 因为是网络资源所以会有图片跨域问题产生，此属性可以解决跨域问题
  img.setAttribute('crossOrigin', 'anonymous')
  // 如果需要兼容 iOS，这两个顺序一定不能换，先设置 crossOrigin 后设置 src
  img.src = imgURL
  return new Promise((resolve, reject) => {
    img.onload = () => {
      const cvs = document.createElement('canvas')
      cvs.width = img.width
      cvs.height = img.height
      const ctx = cvs.getContext('2d')!
      // 将图片绘制到 canvas 上
      ctx.drawImage(img, 0, 0, cvs.width, cvs.height)
      // 将 canvas 转换为 Base64 格式的数据 URL，并返回
      resolve(cvs.toDataURL('image/png', quality))
    }
    // 如果图片加载失败，拒绝 Promise 并返回错误信息
    img.onerror = (error: any) => reject(error)
  })
}
