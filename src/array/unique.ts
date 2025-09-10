/**
 * 对基本类型数组进行去重（简洁实现）
 * @param array 包含基本类型的数组（string | number | boolean | null | undefined | symbol）
 * @returns 去重后的新数组，类型与输入保持一致
 * @example
 * unique([1, 2, 2, 3]) // 推断为 number[]，返回 [1, 2, 3]
 * unique(['a', 'a', 'b']) // 推断为 string[]，返回 ['a', 'b']
 * unique([true, false, true, null]) // 推断为 (boolean | null)[]，返回 [true, false, null]
 */
export function unique<T>(array: Array<Extract<T, string | number | boolean | null | undefined | symbol>>): T[] {
  return Array.from(new Set(array)) // 利用 Set 的天然去重特性，配合 Array.from 转换回数组
}
