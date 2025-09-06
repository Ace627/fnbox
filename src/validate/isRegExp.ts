import { getTag } from '@/private/_getTag'

/**
 * 判断值是否为正则表达式（RegExp）对象
 * @param value 要检查的值
 * @returns 如果是 RegExp 对象则返回 true，否则返回 false，同时提供类型谓词
 * @note 基于对象的内部 [[Class]] 标签判断，比 instanceof 更可靠（尤其跨窗口场景）
 */
export function isRegExp(value: any): value is RegExp {
  return getTag(value) === '[object RegExp]'
}
