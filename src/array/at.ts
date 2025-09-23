/**
 * 从数组中提取指定索引位置的元素，支持负索引（从数组末尾反向计数）
 *
 * 核心特性：
 * 1. 负索引处理：如索引为 -1 表示最后一个元素，-2 表示倒数第二个元素
 * 2. 异常索引兼容：非整数索引会自动截断（如 2.8 → 2），超出边界/NaN 索引返回 undefined
 * 3. 类型安全：通过泛型保持输入输出的类型一致性，无效索引返回值标注为 undefined
 *
 * @template T - 数组元素的类型（自动推导，无需手动指定）
 * @param {readonly T[]} arr - 源数组（支持只读数组，避免函数内部误修改原数组）
 * @param {number[]} indices - 要提取的索引数组（可包含正整数、负整数、非整数，甚至 NaN）
 * @returns {(T | undefined)[]} 提取结果数组：
 *   - 索引有效时返回对应元素（类型为 T）
 *   - 索引无效（越界、NaN 等）时返回 undefined
 *
 * @example
 * // 1. 基础用法：提取正索引元素
 * const numbers = [10, 20, 30, 40, 50];
 * at(numbers, [1, 3, 4]); // 输出：[20, 40, 50]
 *
 * @example
 * // 2. 负索引用法：从末尾反向提取
 * const fruits = ['苹果', '香蕉', '橙子', '葡萄'];
 * at(fruits, [-1, -3]); // 输出：['葡萄', '香蕉']（-1=最后一个，-3=倒数第三个）
 *
 * @example
 * // 3. 异常索引处理：越界、非整数、NaN
 * const colors = ['红', '绿', '蓝'];
 * at(colors, [3, -4, 1.9, NaN]);
 * // 输出：[undefined, undefined, '绿', undefined]
 * // 说明：3（越界）、-4（越界）、1.9（截断为1）、NaN（无效）
 *
 * @example
 * // 4. 只读数组兼容（TypeScript 特性）
 * const readonlyArr: readonly number[] = [1, 2, 3];
 * at(readonlyArr, [0, 2]); // 类型推导正确，输出：[1, 3]
 */
export function at<T>(array: readonly T[], indices: number[]): T[] {
  // 初始化结果数组
  const records = new Array<T>(indices.length)
  // 缓存源数组长度
  const length = array.length
  // 循环处理每个索引（核心逻辑）
  for (let i = 0; i < indices.length; i++) {
    // 取出当前要处理的索引（比如第一次循环取 indices[0]）
    let index = indices[i]
    // 步骤2：处理负索引（如 -1 → 源数组最后一个元素的索引）
    index = Number.isInteger(index) ? index : Math.trunc(index) || 0
    // 负索引 + 源数组长度 = 对应的正向索引（例：length=4，-1 → 3）
    if (index < 0) index += length
    // 步骤3：提取元素，存入结果数组
    records[i] = array[index]
  }
  // 返回结果
  return records
}
