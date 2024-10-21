/** 暂停当前线程指定时间 单位毫秒 */
export function sleep(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}
