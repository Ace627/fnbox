import { isArray } from '@/validate/isArray'
import { isFunction } from '@/validate/isFunction'

/**
 * 创建一个去重后的数组副本，使用迭代器生成的值进行比较
 * 与 lodash uniqueBy 行为完全一致
 *
 * @param array 要处理的数组，可能为 null 或 undefined
 * @param iteratee 迭代器，可以是属性名、数组索引或函数
 * @returns 去重后的新数组
 */
export function uniqueBy<T>(array: T[] | null | undefined, iteratee: ((value: T) => any) | keyof T | number): T[] {
  // 处理 null/undefined 输入，与 lodash 行为一致
  if (array == null) return []

  const length = array.length
  if (length === 0) return []

  const result: T[] = []
  const seen = new Set<any>()

  // 标准化迭代器函数，完全匹配 lodash 的处理方式
  let iterator: (value: T, index: number, array: T[]) => any

  if (typeof iteratee === 'function') {
    iterator = iteratee
  } else if (typeof iteratee === 'number' || typeof iteratee === 'string') {
    // 处理属性名或数组索引的情况
    iterator = (value) => {
      // 对于 null/undefined 值的安全访问
      if (value == null) {
        return value
      }
      return (value as any)[iteratee]
    }
  } else {
    // 不符合预期的迭代器类型，直接使用值本身
    iterator = (value) => value
  }

  // 遍历数组，保持原始顺序并去重
  for (let i = 0; i < length; i++) {
    const value = array[i]
    // 获取用于判断唯一性的键值
    const key = iterator(value, i, array)

    // 检查是否已存在，使用 Set 确保 O(1) 查找效率
    if (!seen.has(key)) {
      seen.add(key)
      result.push(value)
    }
  }

  return result
}
