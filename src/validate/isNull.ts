/**
 * 严格判断指定值是否为 null 类型
 * 该函数采用严格相等运算符(===)进行判断，仅当值的类型和值均为 null 时返回 true
 * 与 undefined、空字符串、0 等假值(falsy value)严格区分，确保类型判断的精确性
 * @param {unknown} value - 待检查的值，可以是任意类型
 * @returns {value is null} 当值严格为null时返回true，否则返回false
 * @example
 * isNull(null) // => true
 * isNull(undefined) // => false
 * isNull('') // => false (空字符串不是null)
 * isNull(0) // => false (数字0不是null)
 * isNull(NaN) // => false (NaN不是null)
 */
export function isNull(value: unknown): value is null {
  return value === null
}
