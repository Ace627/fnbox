/**
 * 检查一个值是否为整数
 * @param value 要检查的值
 * @returns 如果值是整数则返回 true，否则返回 false
 * @description 该函数基于原生 Number.isInteger 实现，比传统的 typeof + 取模方式更可靠
 * @example
 * isInteger(5) // => true
 * isInteger(5.0) // => true
 * isInteger(5.5) // => false
 * isInteger('5') // => false
 * isInteger(null) // => false
 * isInteger(Infinity) // => false
 * isInteger(Number.MIN_VALUE) // => false
 */
export function isInteger(value: any): boolean {
  return Number.isInteger(value)
}
