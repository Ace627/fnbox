/** 校验是否为外链 */
export function isExternal(path: string): boolean {
  const reg = /^(https?:|mailto:|tel:)/
  return reg.test(path)
}
