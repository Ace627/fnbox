/** 任意类型的 Function */
type AnyFunction = (...args: any[]) => any
/** 表示节流后的函数类型 */
type ThrottledFunction<T extends AnyFunction> = T

/**
 * 创建节流函数
 * @param {Function} callback 原始函数
 * @param {Number} delay 节流延时
 * @returns {Function} 节流后的函数
 */
export function throttle<T extends AnyFunction>(callback: T, delay: number) {
  let lastExecTime = Date.now()
  const _throttle = function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const now = Date.now()
    if (now - lastExecTime > delay) {
      callback.apply(this, args)
      lastExecTime = now
    }
  }
  return _throttle as ThrottledFunction<T>
}
