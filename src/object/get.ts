/**
 * 根据 object对象的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代
 * @param value 要检索的对象
 * @param path 要获取属性的路径
 * @param defaultValue 如果解析值是 undefined ，这值会被返回
 * @returns 返回解析的值
 */
export function get<T = unknown>(value: any, path: string, defaultValue?: T): T {
  defaultValue = defaultValue ? defaultValue : undefined
  const keys: string[] = path.split(/[\.\[\]]+/g).filter(Boolean)
  let result: any = value
  for (const key of keys) {
    if (result === null || result === undefined) return defaultValue as T
    result = result[key]
  }
  return result === undefined ? (defaultValue as T) : result
}
