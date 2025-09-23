/**
 * 基于映射函数计算两个数组的差集，返回在第一个数组中存在但不在第二个数组中的元素
 *
 * 与普通差集不同，该函数通过映射函数转换元素后再进行比较，适用于需要自定义比较规则的场景。
 * 结果保留第一个数组中元素的原始值、顺序和重复项（仅当映射后的值不在第二个数组的映射结果中时）。
 *
 * @template T - 第一个数组元素的类型
 * @template U - 第二个数组元素的类型（可与第一个数组不同）
 * @param {readonly T[]} firstArr - 主数组（差集的基准数组），支持只读数组
 * @param {readonly U[]} secondArr - 对比数组（用于排除元素的数组），支持只读数组
 * @param {(value: T | U) => unknown} mapper - 映射函数，用于转换元素后进行比较：
 *   - 接收两个数组中的元素作为参数（类型为 T 或 U）
 *   - 返回值将作为实际比较的依据（会被存入 Set 进行快速查找）
 * @returns {T[]} 差集结果数组，包含所有在 firstArr 中且其映射值不在 secondArr 映射结果中的元素
 *
 * @example
 * // 基础用法：根据数字绝对值比较
 * const arr1 = [2, 3, 4];
 * const arr2 = [1, -2, 5];
 * differenceBy(arr1, arr2, (n) => Math.abs(n));
 * // 输出：[3, 4]（2的绝对值在arr2中存在，被排除）
 *
 * @example
 * // 不同类型数组：根据对象属性比较
 * const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
 * const excludedIds = [2, 4];
 * differenceBy(users, excludedIds, (item) =>
 *   typeof item === 'object' ? item.id : item
 * );
 * // 输出：[{ id: 1 }, { id: 3 }]（id为2的对象被排除）
 *
 * @example
 * // 保留原始顺序和重复项
 * const arr3 = ['a', 'b', 'b', 'c'];
 * const arr4 = ['B', 'd'];
 * differenceBy(arr3, arr4, (s) => s.toLowerCase());
 * // 输出：['a', 'c']（'b'的小写在arr4映射结果中存在，被排除）
 */
export function differenceBy<T, U>(firstArr: readonly T[], secondArr: readonly U[], mapper: (value: T | U) => unknown): T[] {
  const mappedSecondSet = new Set(secondArr.map((item) => mapper(item)))
  return firstArr.filter((item) => !mappedSecondSet.has(mapper(item)))
}
