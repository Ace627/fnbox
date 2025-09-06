/**
 * 检查一个值是否为 JavaScript 原始类型
 * 原始类型包括：undefined、null、string、number、boolean、Symbol、BigInt
 * 引用类型（如对象、数组、函数、Map、Set等）会返回 false
 * @param {any} value - 要检查的值
 * @returns {boolean} 如果是原始类型则返回 true，否则返回 false
 */
export function isPrimitive(value: any): boolean {
  return value === undefined || value === null || (typeof value !== 'object' && typeof value !== 'function')
}
