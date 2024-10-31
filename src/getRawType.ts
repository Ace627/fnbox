import type { VariableType } from '#/global'

/**
 * 获取变量的原始类型
 *
 * @param {any} value - 需要检查类型的值
 * @returns {VariableType} - 返回值的原始类型（如 'object', 'array', 'string', 'number' 等）
 */
export function getRawType(value: any): VariableType {
  return Object.prototype.toString.call(value).split(' ')[1].replace(']', '').toLowerCase() as VariableType
}
