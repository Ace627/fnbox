import type { AnyFunction } from '#/global'

/** 表示节流后的函数类型 */
type ThrottledFunction<T extends AnyFunction> = T

/**
 * 创建一个节流函数，在指定的间隔时间内最多执行一次回调函数。
 *
 * @template T - 回调函数的类型
 * @param {T} callback - 需要节流的回调函数
 * @param {number} delay - 节流间隔时间（毫秒）
 * @returns {ThrottledFunction<T>} - 节流后的函数
 */
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
