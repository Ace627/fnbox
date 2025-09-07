/**
 * 从对象中移除指定属性，返回不包含这些属性的新对象
 * @param obj 源对象
 * @param keys 需要移除的属性数组
 * @returns 移除指定属性后的新对象
 */
export function omit<T extends object, K extends keyof T>(object: T, keys: K[]): Omit<T, K> {
  // 处理空值或非对象输入（如 null、undefined、基本类型） 此时返回空对象，符合"从无效对象中选取属性"的语义
  if (!object || typeof object !== 'object') return {} as Omit<T, K>

  // 创建原对象的浅拷贝，避免修改源对象，保持数据不可变性，符合函数式编程原则
  const result = { ...object }

  // 遍历需要移除的属性并从副本中删除
  for (const key of keys) delete result[key]

  // 返回处理后的新对象，类型为移除指定属性后的Omit<T, K>
  return result
}
