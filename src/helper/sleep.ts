/**
 * 延时函数 指定 ms 后再执行后续函数
 * @param {number} [delay=0] 延迟时间（毫秒），默认 0
 * @returns {Promise<void>} 在延迟结束后解析的 Promise
 */
export function sleep(delay: number = 0): Promise<void> {
  return new Promise((resolve, _) => setTimeout(() => resolve(), delay))
}
