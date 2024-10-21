import type { AnyFunction } from '#/global'

/** 表示节流后的函数类型 */
type ThrottledFunction<T extends AnyFunction> = T

/** 对函数进行节流处理 */
export function throttle<T extends AnyFunction>(callback: T, delay: number) {
  let timestamp = Date.now()
  const _throttle = function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const now = Date.now()
    if (Date.now() - timestamp > delay) {
      callback.apply(this, args)
      timestamp = now
    }
  }
  return _throttle as ThrottledFunction<T>
}
