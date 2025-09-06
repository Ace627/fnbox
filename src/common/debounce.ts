/**
 * 防抖函数：在指定时间内多次触发时，只执行最后一次或第一次
 * @param fn 需要防抖的函数
 * @param delay 延迟时间(毫秒)
 * @param options 配置项 { immediate: 是否立即执行 }
 * @returns 包装后的防抖函数，与原函数参数和this类型一致
 */

/** 任意类型的 Function */
type AnyFunction = (...args: any[]) => any

/** 表示防抖后的函数类型 */
type DebouncedFunction<T extends AnyFunction> = (...args: Parameters<T>) => ReturnType<T>

interface DebounceOptions {
  immediate?: boolean
}

/**
 * 创建防抖函数
 * @param {Function} callback 原始函数
 * @param {Number} delay 防抖延时
 * @param {Boolean} immediate 是否立即执行
 * @returns {Function} 防抖后的函数
 */
export function debounce<T extends AnyFunction>(callback: T, delay: number, options: DebounceOptions = {}) {
  const { immediate = false } = options

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
