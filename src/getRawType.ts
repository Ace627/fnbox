import type { VariableType } from '#/global'

/** 获取数据的真实类型 */
export function getRawType(value: any): VariableType {
  return Object.prototype.toString.call(value).split(' ')[1].replace(']', '').toLowerCase() as VariableType
}
