/** 对引用数据类型进行深度克隆 */
export function cloneDeep<T extends any>(source: T): T {
  // 检查是否为 null 或 undefined
  if (source === null || source === undefined) {
    return source
  }

  // 检查是否为日期对象
  if (source instanceof Date) {
    return new Date(source.getTime()) as T
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
