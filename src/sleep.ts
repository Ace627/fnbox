/**
 * 暂停执行一段时间，返回一个在指定延迟后完成的 Promise。
 *
 * @param {number} delay - 延迟时间（毫秒）
 * @returns {Promise<void>} - 在延迟时间结束后完成的 Promise
 */
export function sleep(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}
