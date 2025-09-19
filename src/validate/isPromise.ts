import { isFunction } from './isFunction'

/**
 * 判断一个值是否为 Promise 对象
 * @param value 要检查的值
 * @returns 如果是Promise对象则返回true，否则返回false
 */
export function isPromise(value: any): value is Promise<any> {
  if (!value) return false
  if (!value.then) return false
  if (!isFunction(value.then)) return false
  return true
}
