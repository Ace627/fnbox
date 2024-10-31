import type { AnyFunction } from '#/global'

type DebouncedFunction<T extends AnyFunction> = (...args: Parameters<T>) => ReturnType<T>

/**
 * 创建防抖函数，在指定的延迟时间后执行回调。如果立即执行选项为 `true`，则在延迟时间前立即执行一次。
 *
 * @template T - 回调函数的类型
 * @param {T} callback - 需要防抖的回调函数
 * @param {number} delay - 延迟时间（毫秒）
 * @param {boolean} [immediate=false] - 是否立即执行
 * @returns {DebouncedFunction<T>} - 防抖后的函数
 */
export function debounce<T extends AnyFunction>(callback: T, delay: number, immediate = false) {
  // 通过闭包缓存一个定时器 id
  let timer: NodeJS.Timeout | null

  const _debounce = function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    // 如果已经设定过定时器就清空上一次的定时器
    if (timer) clearTimeout(timer)

    // 如果需要立即执行，且之前未执行过，则立即执行原始函数
    if (immediate && !timer) {
      callback.apply(this, args)
      timer = setTimeout(() => (timer = null), delay)
    } else {
      // 设置新的定时器，在延迟结束时执行原始函数
      // 使用保存的上下文和参数执行原始函数 箭头函数 所以可以直接用上级作用域的值
      timer = setTimeout(() => {
        timer = null
        callback.apply(this, args)
      }, delay)
    }
  }

  // 返回防抖后的函数，并根据原始函数的类型来断言返回函数的类型
  return _debounce as DebouncedFunction<T>
}
