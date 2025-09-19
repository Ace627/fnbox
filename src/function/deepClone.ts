import { isMap } from '../validate/isMap'
import { isSet } from '../validate/isSet'
import { isDate } from '../validate/isDate'
import { isArray } from '../validate/isArray'
import { isRegExp } from '../validate/isRegExp'

/**
 * 深拷贝一个值，支持多种数据类型并处理循环引用
 * @template T - 源值的类型，决定返回值的类型
 * @param {T} source - 要深拷贝的值，可以是任何数据类型
 * @param {Map<object, any>} [map=new Map()] - 用于处理循环引用的映射表，记录已拷贝的对象，避免无限递归（内部使用，外部调用通常无需传入）
 * @returns {T} 源值的深拷贝副本，与源值具有相同的类型和结构，但引用完全独立
 */
export function deepClone<T>(source: T, map = new Map<object, any>()): T {
  // 处理 null 和 undefined
  if (source === null || source === undefined) return source

  // 处理原始类型和函数（函数直接返回，不深拷贝）
  if (typeof source !== 'object') return source

  const sourceObj = source as object
  // 处理循环引用
  if (map.has(sourceObj)) return map.get(sourceObj)

  let target: any
  // 断言 Constructor 是可构造的函数类型
  const Constructor = sourceObj.constructor as new (...args: any[]) => any

  // 处理内置对象类型
  if (isDate(source)) {
    target = new Date(source)
  } else if (isRegExp(source)) {
    const reg = source
    target = new RegExp(reg.source, reg.flags)
    target.lastIndex = reg.lastIndex
  } else if (isMap(source)) {
    target = new Map()
  } else if (isSet(source)) {
    target = new Set()
  } else if (isArray(source)) {
    target = new Array()
  } else if (Constructor) {
    try {
      // 现在可以安全地使用 new 调用 Constructor
      target = new Constructor()
    } catch {
      // 处理没有无参构造函数的情况
      target = Object.create(Object.getPrototypeOf(sourceObj))
    }
  } else {
    // 处理无构造函数的对象（如 Object.create(null)）
    target = {}
  }

  // 缓存已拷贝对象，处理循环引用
  map.set(sourceObj, target)

  // 拷贝 Map 内容
  if (isMap(source)) {
    source.forEach((value, key) => target.set(deepClone(key, map), deepClone(value, map)))
    return target
  }

  // 拷贝 Set 内容
  if (isSet(source)) {
    source.forEach((value) => target.add(deepClone(value, map)))
    return target
  }

  // 拷贝数组和对象的属性（包括 Symbol 键）
  Reflect.ownKeys(sourceObj).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(sourceObj, key)) {
      target[key] = deepClone((sourceObj as any)[key], map)
    }
  })

  return target
}
