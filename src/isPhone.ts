/**
 * 判断给定的字符串是否为有效的中国手机号
 *
 * @param {string} phone - 要检查的手机号
 * @returns {boolean} - 如果手机号有效，返回 true；否则返回 false
 */
export function isPhone(phone: string): boolean {
  const reg = /^1[3-9]\d{9}$/
  return reg.test(phone)
}
