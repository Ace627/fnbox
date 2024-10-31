import { isNumber } from './isNumber'

/**
 * 将角度从度数转换为弧度
 * @param {number} angle - 需要转换的角度（单位：度数），可以为正负任意实数。例如，输入 180 表示 180 度
 * @returns {number} - 返回对应的弧度值（单位：弧度），例如输入 180 度将返回 π 弧度
 * @throws {TypeError} 如果输入值不是数字类型，将抛出错误
 * @throws {RangeError} 如果输入值不在合理的角度范围内（例如非有限数值），将抛出错误
 */
export function angleToRadius(angle: number): number {
  if (!isNumber(angle)) {
    throw new TypeError("参数 'angle' 必须是一个数字")
  }

  if (!isFinite(angle)) {
    throw new RangeError("参数 'angle' 必须是有限数值")
  }

  return (Math.PI / 180) * angle
}
