import { isNumber } from '@/validate/isNumber'

/**
 * 延迟指定时间后 resolve 的 Promise
 * @param delay 延迟时间（毫秒），默认 1000ms
 * @param delay 支持数字类型，非数字类型会被转换为 0
 * @returns Promise<void> 延迟结束后 resolve 的 Promise
 * @example
 * await sleep() // => 延迟 1 秒
 * await sleep(500) // => 延迟 500 毫秒
 */
export function sleep(delay: number = 1000): Promise<void> {
  // 严格处理输入：确保为非负数字，无效值转为 0
  const safeDelay = isNumber(delay) ? Math.max(0, delay) : 0
  return new Promise((resolve, _) => setTimeout(resolve, safeDelay))
}
