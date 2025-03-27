```TypeScript
/**
 * 判断给定的数据是否为数组类型
 * @param {any} value - 要判断的数据
 * @returns 如果是数组则返回 true，否则返回 false
 */
declare function isArray(value: any): boolean;

/**
 * 判断传入的数据是否为 Date 类型
 * @param {any} value - 需要检查类型的值
 * @returns {boolean} - 如果传入的值是 Date 类型，返回 true；否则返回 false
 */
declare function isDate(value: any): boolean;

/**
 * 判断给定的值是否为浮点数
 * @param {any} value - 要检查的值
 * @returns {boolean} - 如果值是浮点数，返回 true；否则返回 false
 */
declare function isFloat(value: any): boolean;

/**
 * 判断给定的值是否为整数
 * @param {any} value - 要检查的值
 * @returns {boolean} - 如果值是整数，返回 true；否则返回 false
 */
declare function isInt(value: any): boolean;

/**
 * 检查值是否为 null 或 undefined
 * @param {any} value - 要检查的值
 * @returns {boolean} 如果值为 null 或 undefined，返回 true；否则返回 false
 */
declare function isNil(value: any): boolean;

/**
 * 判断给定的值是否为数字
 * @param {any} value - 要检查的值
 * @returns {boolean} - 如果值是数字，返回 true；否则返回 false
 */
declare function isNumber(value: any): boolean;

/**
 * 判断给定的值是否为字符串
 * @param {any} value - 要检查的值
 * @returns {boolean} - 如果值是数字，返回 true；否则返回 false
 */
declare function isString(value: unknown): boolean;

/**
 * 检查给定值是否是字符串形式的布尔值，即 "true" 或 "false"
 * @param {any} value - 要检查的值
 * @returns {boolean} 如果值是 "true" 或 "false" 字符串，返回 true；否则返回 false
 */
declare function isStringBoolean(value: string): boolean;

/**
 * 判断给定的字符串是否可以转换为有效的数字
 * @param {string} value - 要检查的字符串
 * @returns {boolean} - 如果字符串可以转换为数字，返回 true；否则返回 false
 */
declare function isStringNumber(value: string): boolean;

/**
 * 判断给定的值是否为 Symbol 类型
 * @param {any} value - 要检查的值
 * @returns {boolean} - 如果值是 Symbol 类型，返回 true；否则返回 false
 */
declare function isSymbol(value: any): boolean;

/**
 * 反转给定的字符串
 * @param {string} str - 要反转的字符串
 * @returns {string} - 反转后的字符串
 */
declare function reverseString(str: string): string;

/**
 * 封装 Promise 以处理错误，避免使用 try...catch 块
 * @param {Promise} promise - 需要处理的 Promise 对象
 * @returns {Promise<{error: Error|null, data: any|null}>} 返回一个 Promise，其解析值为一个对象，包含错误信息和数据
 */
declare function to<T = any>(promise: Promise<T>): Promise<{ error: null; data: T;} | { error: Error; data: null; }>;
```
