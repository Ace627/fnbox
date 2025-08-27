import { isNil } from './isNil'
import { getTag } from '@/private/_getTag'

/**
 * 判断值是否为 Symbol 类型（包括原始类型和包装对象）
 * @param value 要检查的未知类型值
 * @returns 若是 Symbol 类型则返回 true，否则返回 false
 * @example
 * isSymbol(Symbol('test')) // => true
 * isSymbol(Object(Symbol('test'))) // => true
 * isSymbol(Symbol.iterator) // => true
 * isSymbol('symbol') // => false
 */
export function isSymbol(value: any): value is symbol {
  // 基础类型检查：typeof 直接返回 'symbol' 类型
  if (typeof value === 'symbol') return true
  // 边缘情况处理：某些环境中 Symbol 对象的判断（如通过 Object(Symbol()) 创建的包装对象）
  return typeof value === 'object' && !isNil(value) && getTag(value) === '[object Symbol]'
}
