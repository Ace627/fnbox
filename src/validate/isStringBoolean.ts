/**
 * 检查值是否为字符串 "true" 或 "false"
 * @param {any} value - 要检查的值
 * @returns {value is "true" | "false"} 如果是字符串"true"或"false"则返回true，否则返回false
 */
export function isStringBoolean(value: any): value is 'true' | 'false' {
  return value === 'true' || value === 'false'
}
