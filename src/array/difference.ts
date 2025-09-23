/**
 * 计算两个数组的差集，返回在第一个数组中存在但不在第二个数组中的元素
 *
 * 差集定义：对于给定的两个数组，差集结果包含所有属于第一个数组且不属于第二个数组的元素，
 * 元素顺序与第一个数组中出现的顺序一致，且保留原始重复项（如果第一个数组有重复元素，
 * 且该元素不在第二个数组中，则重复项会被保留）
 *
 * @template T - 数组元素的类型，两个数组需包含相同类型的元素
 * @param {readonly T[]} firstArr - 主数组（差集的基准数组），支持只读数组
 * @param {readonly T[]} secondArr - 对比数组（用于排除元素的数组），支持只读数组
 * @returns {T[]} 差集结果数组，包含所有在 firstArr 中但不在 secondArr 中的元素
 *
 * @example
 * // 基础用法：数字数组差集
 * const arr1 = [1, 2, 3, 4];
 * const arr2 = [3, 4, 5, 6];
 * difference(arr1, arr2); // 输出：[1, 2]
 *
 * @example
 * // 保留第一个数组的重复项
 * const arr3 = [1, 2, 2, 3];
 * const arr4 = [3];
 * difference(arr3, arr4); // 输出：[1, 2, 2]
 *
 * @example
 * // 字符串数组差集
 * const arr5 = ['a', 'b', 'c'];
 * const arr6 = ['b', 'd'];
 * difference(arr5, arr6); // 输出：['a', 'c']
 *
 * @example
 * // 引用类型注意事项：Set 基于严格相等（===）判断，引用类型需注意地址是否相同
 * const obj = { id: 1 };
 * const arr7 = [obj, { id: 2 }];
 * const arr8 = [obj];
 * difference(arr7, arr8); // 输出：[{ id: 2 }]
 */
export function difference<T>(firstArr: readonly T[], secondArr: readonly T[]): T[] {
  const secondSet = new Set(secondArr)
  return firstArr.filter((item) => !secondSet.has(item))
}
