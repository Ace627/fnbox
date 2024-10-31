import { isBrowser } from './isBrowser'

/**
 * 复制文本到剪贴板
 *
 * @param {string | number | object} value - 要复制的文本，可以是字符串、数字或对象
 * @returns {Promise<void>} - 返回一个 Promise，表示复制操作的结果
 * @throws {Error} - 如果在非浏览器环境中调用此方法，将抛出错误；如果传入的参数类型不被支持，也将抛出错误
 */
export async function copyText(value: string | number | object): Promise<void> {
  if (!isBrowser()) throw new Error('此方法仅支持在浏览器环境运行')

  let text: string

  if (typeof value === 'string') {
    text = value
  } else if (typeof value === 'number') {
    text = value.toString()
  } else if (typeof value === 'object') {
    text = JSON.stringify(value, null, 2)
  } else {
    throw new Error('不支持的参数类型')
  }

  const isClipboardApiSupported = window.navigator && window.navigator.clipboard

  if (isClipboardApiSupported) {
    try {
      await window.navigator.clipboard.writeText(text)
    } catch (error) {
      throw error
    }
  } else {
    const textarea = document.createElement('textarea')
    textarea.readOnly = true
    textarea.value = text
    textarea.style.position = 'absolute'
    textarea.style.top = '-9999px'
    textarea.style.left = '-9999px'
    document.body.appendChild(textarea)
    textarea.select()
    try {
      document.execCommand('copy')
    } catch (error) {
      throw error
    }
    textarea.remove()
  }
}
