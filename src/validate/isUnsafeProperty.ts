/**
 * 检查属性键是否存在原型污染风险，不适宜直接修改
 *
 * 该函数用于防御原型污染攻击，在对象合并(如`merge`)、动态属性赋值等场景中筛选出
 * 可能修改对象原型链或构造函数的危险属性键，避免恶意代码通过原型链影响所有对象实例
 *
 * 原型污染原理：当修改对象的`__proto__`属性时，会直接影响该对象的原型对象，
 * 导致所有继承自该原型的对象都受到污染。例如通过`obj['__proto__'].xxx = '恶意值'`
 * 会使所有同原型的对象都获得`xxx`属性，可能引发权限绕过等安全问题
 *
 * @param {PropertyKey} key - 待检查的属性键，类型可以是string、number或symbol
 * @returns {boolean} 若属性键存在安全风险则返回true，否则返回false
 * @internal 内部工具函数，不对外暴露
 * @example
 * isUnsafeProperty('__proto__'); // true
 * isUnsafeProperty('name'); // false
 * isUnsafeProperty(123); // false
 * isUnsafeProperty(Symbol('proto')); // false
 * isUnsafeProperty('constructor.prototype'); // true
 */
export function isUnsafeProperty(key: PropertyKey): boolean {
  // 转换为字符串形式进行检查，覆盖symbol和number类型的键
  const keyStr = String(key)

  // 检查常见的原型污染攻击向量
  return keyStr === '__proto__' || keyStr === 'constructor' || keyStr === 'constructor.prototype'
}
