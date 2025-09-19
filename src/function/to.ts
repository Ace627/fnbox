/**
 * 将 Promise 转换为 [错误, 结果] 格式的返回值，避免使用 try/catch
 * @param {Promise<T>} promise - 需要处理的 Promise 对象
 * @param {object=} errorExt - 可选，额外的错误信息，将合并到错误对象中
 * @returns {Promise<[U, undefined] | [null, T]>} 包含错误和结果的元组
 *   - 成功时: [null, 结果值]
 *   - 失败时: [错误对象, undefined]
 */
export async function to<T, U = Error>(promise: Promise<T>, errorExt?: object): Promise<[U, undefined] | [null, T]> {
  try {
    const data = await promise
    return [null, data]
  } catch (err) {
    if (errorExt && err instanceof Error) Object.assign(err, errorExt)
    return [err as unknown as U, undefined]
  }
}
