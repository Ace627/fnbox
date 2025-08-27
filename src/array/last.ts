import { isArray } from '@/validate/isArray'

/**
 * 获取数组的最后一个元素
 * @param array 要查询的值（可为任意类型）
 * @param defaultValue 非数组或空数组时的默认返回值，默认为 undefined
 * @returns 数组的最后一个元素；非数组或空数组返回默认值
 * @example
 * last([1, 2, 3]) // => 3
 * last([]) // => undefined
 * last('not array', 0) // => 0
 */
export function last<T>(array: readonly T[], defaultValue: T | undefined = undefined) {
  if (!isArray(array)) return defaultValue
  return array.length > 0 ? array[array.length - 1] : defaultValue
}
