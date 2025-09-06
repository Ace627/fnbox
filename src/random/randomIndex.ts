import { isArray } from '@/validate/isArray'
import { isString } from '@/validate/isString'

/**
 * 为字符串或数组返回一个随机索引
 * @param value 字符串或数组
 * @returns 随机索引（0 到 length-1 之间），如果是非法类型则返回 -1
 */
export function randomIndex(value: string | any[]): number {
  // 检查输入是否为字符串或数组
  if (!isString(value) && !isArray(value)) return -1

  // 对于合法类型，计算长度并生成随机索引
  const length = value.length
  return length > 0 ? Math.floor(Math.random() * length) : -1
}
