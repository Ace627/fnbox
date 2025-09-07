/**
 * 从对象中选取指定的属性，返回包含这些属性的新对象
 * @template T - 输入对象的类型
 * @template K - 要选取的属性键名类型（必须是T的键名子集）
 * @param {T} object - 源对象，从中选取属性
 * @param {K[]} keys - 要选取的属性键名数组
 * @returns {Pick<T, K>} 包含所选属性的新对象，类型与选取的属性匹配
 */
export function pick<T extends object, K extends keyof T>(object: T, keys: K[]): Pick<T, K> {
  // 处理空值或非对象输入（如 null、undefined、基本类型） 此时返回空对象，符合"从无效对象中选取属性"的语义
  if (!object || typeof object !== 'object') return {} as Pick<T, K>
  // 处理空数组情况：当不需要选取任何属性时，直接返回空对象
  if (keys.length === 0) return {} as Pick<T, K>

  // 使用reduce遍历键名数组，构建新对象
  return keys.reduce((acc, key) => {
    // 只选取对象自身的属性（排除原型链上的属性）
    if (Object.prototype.hasOwnProperty.call(object, key)) acc[key] = object[key]
    // 传递累加器到下一次迭代
    return acc
  }, {} as Pick<T, K>) // 初始值为空对象，类型为Pick<T, K>
}
