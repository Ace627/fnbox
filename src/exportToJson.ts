import { getRawType } from './getRawType'
import { linkDownload } from './linkDownload'

/**
 * 将对象或者数组导出为 JSON 文件
 */
export function exportToJson(value: any, fileName: string) {
  if (!['object', 'array'].includes(getRawType(value))) {
    throw new Error(`仅支持 Object 和 Array 类型的数据导出`)
  }
  const jsonStr = JSON.stringify(value, null, 2)
  const blob = new Blob([jsonStr], { type: 'application/json' })
  linkDownload(blob, fileName)
}
