import { getTag } from '@/private/_getTag'

/**
 * 检测一个值是否为 Blob 对象
 * @param value 要检测的值
 * @returns 如果是 Blob 对象则返回 true，否则返回 false
 */
export function isBlob(value: any): value is Blob {
  if (typeof Blob === 'undefined') return false
  if (value instanceof Blob) return true
  if (Object.getPrototypeOf(value) === Blob.prototype) return true
  return getTag(value) === '[object Blob]'
}
