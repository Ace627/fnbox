import { isNumber } from './isNumber'

/**
 * 将弧度值转换为角度值
 * @param {number} radius - 需要转换的弧度值
 * @returns {number} 转换后的角度值
 * @throws {TypeError} 如果输入值不是数字类型，将抛出错误
 * @throws {RangeError} 如果输入值不在合理的角度范围内（例如非有限数值），将抛出错误
 */
export function radiusToAngle(radius: number): number {
  if (!isNumber(radius)) {
    throw new TypeError("参数 'radius' 必须是一个数字")
  }

  if (!isFinite(radius)) {
    throw new RangeError("参数 'radius' 必须是有限数值")
  }

  return (180 / Math.PI) * radius
}
