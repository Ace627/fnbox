import { getRawType } from './getRawType'

/**
 * 判断传入的数据是否为 Date 类型
 *
 * @param {any} value - 需要检查类型的值
 * @returns {boolean} - 如果传入的值是 Date 类型，返回 true；否则返回 false
 */
export function isDate(value: any): boolean {
  return getRawType(value) === 'date' && !isNaN(value.getTime())
}
