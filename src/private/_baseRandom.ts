const nativeFloor = Math.floor
const nativeRandom = Math.random

/**
 * 生成 [lower, upper] 范围内的随机整数（包含上下限）
 * @param lower 下限数值
 * @param upper 上限数值
 * @returns 范围内的随机整数
 */
export function _baseRandom(lower: number, upper: number): number {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1))
}
