/**
 * 生成 [lower, upper] 范围内的随机整数（包含上下限）
 * @param lower 下限数值
 * @param upper 上限数值
 * @returns 范围内的随机整数
 */
export function random(lower?: number, upper?: number | boolean, floating?: boolean): number {
  let min: number = 0
  let max: number = 1
  let float: boolean = floating ?? false

  // random() => Math.random()
  if (lower === undefined && upper === undefined && floating === undefined) {
    return Math.random()
  }

  // random(10) => random(0, 10, false)
  if (typeof lower === 'number' && upper === undefined) {
    max = lower
  }

  // random(10, true) => random(0, 10, true)
  if (typeof lower === 'number' && typeof upper === 'boolean') {
    max = lower
    float = upper
  }

  // random(3, 9) => random(3, 9, false)
  if (typeof lower === 'number' && typeof upper === 'number') {
    min = lower
    max = upper
  }

  // 防止最值错位
  if (min > max) [min, max] = [max, min]

  // 返回随机浮点数
  if (float || max % 1 || min % 1) {
    const rand = Math.random()
    return Math.min(min + rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1))), max)
  }

  // 返回随机整数
  return min + Math.floor(Math.random() * (max - min + 1))
}
