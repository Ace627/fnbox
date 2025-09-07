/**
 * 封装 Promise 以处理错误，避免使用 try...catch 块
 * @param {Promise} promise - 需要处理的 Promise 对象
 * @returns {Promise<{error: Error|null, data: any|null}>} 返回一个 Promise，其解析值为一个对象，包含错误信息和数据
 */
export async function tryit<T = any>(promise: Promise<T>): Promise<{ error: null; data: T } | { error: Error; data: null }> {
  try {
    return { error: null, data: await promise }
  } catch (error: unknown) {
    return error instanceof Error ? { error, data: null } : { error: new Error(String(error)), data: null }
  }
}
