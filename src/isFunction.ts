import { getRawType } from './getRawType'

/**
 * 判断给定的值是否为函数
 *
 * @param {any} value - 要检查的值
 * @returns {boolean} - 如果值是函数，返回 true；否则返回 false
 */
export function isFunction(value: any): boolean {
  return getRawType(value) === 'function'
}
