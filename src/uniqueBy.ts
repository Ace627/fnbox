/**
 * 根据对象数组的某个属性键，对数组进行去重
 * @param {Array<T>} array - 需要去重的对象数组
 * @param {keyof T} key - 用于去重的属性键
 * @returns {Array<T>} 返回去重后的对象数组
 */
export function uniqueBy<T = any>(array: Array<T>, key: keyof T): Array<T> {
  const seen = new Set() // 用于存储已出现的属性值
  const result: Array<T> = []
  for (const item of array) {
    const value = item[key] // 获取当前对象指定的属性值
    // 如果 Set 中没有这个属性值，则将对象添加到结果数组
    if (!seen.has(value)) {
      seen.add(value) // 将属性值添加到 Set 中，避免重复
      result.push(item) // 将当前对象添加到结果数组
    }
  }
  return result
}

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
]

console.log(uniqueBy(users, 'id'))
