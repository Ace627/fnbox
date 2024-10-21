import { getRawType } from './getRawType'

/** 判断当前数据是否为函数类型 */
export function isFunction(value: any): boolean {
  // return !!(value && value.constructor && value.call && value.apply)
  return getRawType(value) === 'function'
}
