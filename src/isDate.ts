import { getRawType } from './getRawType'

/** 判断传入数据是否为 Date 类型 */
export function isDate(value: any): boolean {
  return getRawType(value) === 'date'
}
