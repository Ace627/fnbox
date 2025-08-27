import { isString } from './isString'

/**
 * 判断值是否为可转换为有效数字的字符串
 * @param value 要检查的未知类型值
 * @returns 若是可转换为有效数字的字符串则返回 true，否则返回 false
 * @example
 * isStringNumber('123') // => true
 * isStringNumber('-45.67') // => true
 * isStringNumber('  1e3  ') // => true（忽略前后空白）
 * isStringNumber('12a3') // => false
 * isStringNumber('') // => false（空字符串）
 * isStringNumber(123) // => false（不是字符串类型）
 */
export function isStringNumber(value: any): value is string {
  // 首先检查是否为字符串类型
  if (!isString(value)) return false

  // 处理空字符串或仅含空白字符的情况
  if (value.trim() === '') return false

  // 检查是否可转换为有效数字
  return !Number.isNaN(Number(value))
}
