import { getRawType } from './getRawType'
import { linkDownload } from './linkDownload'

/**
 * 将数据导出为 JSON 文件
 *
 * @param {any} value - 要导出的数据，必须是对象或数组类型
 * @param {string} fileName - 导出文件的名称，应该以 .json 结尾。如果未提供，则自动添加 .json 后缀
 * @throws {Error} - 如果传入的值既不是对象也不是数组，将抛出错误
 */
export function exportToJson(value: any, fileName: string): void {
  if (!['object', 'array'].includes(getRawType(value))) {
    throw new Error(`仅支持 Object 和 Array 类型的数据导出`)
  }
  const jsonStr = JSON.stringify(value, null, 2)
  const blob = new Blob([jsonStr], { type: 'application/json' })
  if (!fileName.endsWith('.json')) fileName += '.json'
  linkDownload(blob, fileName)
}
