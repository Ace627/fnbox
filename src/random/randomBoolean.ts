/**
 * 随机返回布尔值（true/false 概率各约 50%）
 * @returns 随机布尔值
 */
export function randomBoolean(): boolean {
  return Math.random() < 0.5
}
