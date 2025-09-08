import { isUndefined } from '@/validate/isUndefined'

/**
 * 生成 [lower, upper] 范围内的随机整数（包含上下限）
 * @param lower 下限数值
 * @param upper 上限数值
 * @returns 范围内的随机整数
 */
export function random(lower: number, upper?: number): number {
  if (isUndefined(upper)) {
    upper = lower
    lower = 0
  }
  if (lower > upper) [lower, upper] = [upper, lower]
  return lower + Math.floor(Math.random() * (upper - lower + 1))
}
