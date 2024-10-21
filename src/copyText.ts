import { isBrowser } from './isBrowser'

/**
 * 将指定内容复制到剪贴板，支持 string、number 和对象等类型
 * 该函数优先使用 `Clipboard API` 进行复制，若不支持则回退到使用 `textarea` 元素的方式
 *
 * @param {string} text 要复制到剪贴板的文本
 *
 * @throws {Error} 如果当前环境不是浏览器环境，则抛出错误
 *
 * @example
 * copyText('Hello, world!') // 复制字符串
 * copyText(9527) // 复制数字
 * copyText({ name: 'John', age: 30 }) // 复制对象
 */
export async function copyText(value: string | number | object): Promise<void> {
  // 判断当前是否为浏览器环境
  if (!isBrowser()) throw new Error('此方法仅支持在浏览器环境运行')

  // 将输入内容转换为字符串
  let text: string

  if (typeof value === 'string') {
    text = value
  } else if (typeof value === 'number') {
    text = value.toString()
  } else if (typeof value === 'object') {
    text = JSON.stringify(value, null, 2) // 格式化 JSON 字符串，便于阅读
  } else {
    throw new Error('不支持的参数类型')
  }

  // 是否支持 navigator.clipboard 属性
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
