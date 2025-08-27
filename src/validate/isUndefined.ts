/**
 * 严格判断指定值是否为 undefined 类型
 * 该函数使用严格相等运算符(===)进行判断，仅当值的类型和值均为 undefined 时返回 true
 * 与 null、空字符串、0 等其他假值(falsy value)严格区分，确保类型判断的精确性
 * @param {unknown} value - 待检查的值，可以是任意类型
 * @returns {value is undefined} 当值严格为 undefined 时返回 true，否则返回 false
 * @example
 * isUndefined(undefined) // => true
 * isUndefined(null) // => false (null 与 undefined 是不同类型)
 * isUndefined('') // => false (空字符串不是 undefined)
 * isUndefined(0) // => false (数字 0 不是 undefined)
 */
export function isUndefined(value: unknown): value is undefined {
  return value === undefined
}
