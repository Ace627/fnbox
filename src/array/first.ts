import { isArray } from '@/validate/isArray'

/**
 * 获取数组的第一个元素
 * @param array 要查询的数组
 * @param defaultValue 非数组或空数组时的默认返回值，默认为 undefined
 * @returns 数组的第一个元素；非数组或空数组返回默认值
 */
export function first<T>(array: readonly T[], defaultValue: T | undefined = undefined) {
  if (!isArray(array)) return defaultValue
  return array.length > 0 ? array[0] : defaultValue
}
