import { isString } from './isString'

/**
 * 判断字符串是否为有效的十六进制颜色值
 * 支持 3 位或 6 位十六进制格式，必须以 # 开头，允许大小写字母
 * 例如：#fff、#ffffff、#F0F0F0 都是有效的格式
 * 而：fff（无 #）、#12（长度不足）、#12g（包含无效字符）都是无效的
 * @param {any} value - 要检查的值（可以是任意类型）
 * @returns {boolean} 若为有效的十六进制颜色值则返回 true，否则返回 false
 * isHexColor('#fff') // true
 * isHexColor('#123456') // true
 * isHexColor('#ABCdef') // true
 * isHexColor('fff') // false
 * isHexColor('#12') // false
 */
export function isHexColor(value: any): boolean {
  if (!isString(value)) return false
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value)
}
