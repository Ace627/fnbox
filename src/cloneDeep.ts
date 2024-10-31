/**
 * 深拷贝给定的值，包括对象、数组、日期和正则表达式对象
 *
 * @template T
 * @param {T} source - 要深拷贝的值
 * @returns {T} - 返回深拷贝的值
 */
export function cloneDeep<T extends any>(source: T): T {
  if (source === null || source === undefined) {
    return source
  }

  if (source instanceof Date) {
    return new Date(source.getTime()) as T
  }

  if (source instanceof RegExp) {
    return new RegExp(source.source, source.flags) as T
  }

  // 检查是否为数组
  if (Array.isArray(source)) {
    // 使用 map 方法递归复制数组中的每个元素
    return source.map((item) => cloneDeep(item)) as T
  }

  // 检查是否为对象（排除基本类型）
  if (typeof source === 'object') {
    // 创建一个新的对象用于存放拷贝的属性
    const obj: Record<string, any> = {}
    // 遍历对象的每个属性
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        obj[key] = source[key]
      }
    }
    return obj as T
  }

  // 返回基本类型（数字、字符串、布尔值等）
  return source
}
