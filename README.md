[使用说明](https://juejin.cn/post/7427687624351727650)

```typescript
/** 对引用数据类型进行深度克隆 */
declare function cloneDeep<T extends any>(source: T): T

/** 将指定内容复制到剪贴板，支持 string、number 和对象等类型 */
declare function copyText(value: string | number | object): Promise<void>

/** 中划线字符串转驼峰字符串 */
declare function dashToHump(str: string): string

/** 对函数进行防抖处理 */
declare function debounce<T extends AnyFunction>(callback: T, delay: number, immediate?: boolean): DebouncedFunction<T>

/** 获取数据的真实类型 */
declare function getRawType(value: any): VariableType

/** 驼峰字符串转中划线字符串 */
declare function humpToDash(str: string): string

/** 驼峰字符串转下划线字符串 */
declare function humpToUnderline(str: string): string

/** 将指定 URL 的图片转换为 Base64 编码的字符串 */
declare function imageToBase64(imgURL: string, quality?: number): Promise<string>

/** 判断当前环境是否为浏览器环境 */
declare function isBrowser(): boolean

/** 判断传入数据是否为 Date 类型 */
declare function isDate(value: any): boolean

/** 校验是否为外链 */
declare function isExternal(path: string): boolean

/** 判断数字是否为浮点数 */
declare function isFloat(value: any): boolean

/** 判断当前数据是否为函数类型 */
declare function isFunction(value: any): boolean

/** 判断数字是否为整数 */
declare function isInt(value: any): boolean

/** 判断数据是否为 number 类型 */
declare function isNumber(value: any): boolean

/** 校验是否为手机号 */
declare function isPhone(phone: string): boolean

/** 校验是数据是否为 string 类型 */
declare function isString(value: unknown): boolean

/** 校验是否是字符串类型的数字 */
declare function isStringNumber(value: string): boolean

/** 判断传入数据是否为 Symbol 类型 */
declare function isSymbol(value: any): boolean

/** 创建一个临时的链接，用于下载指定 URL 的文件 */
declare function linkDownload(fileURL: string, fileName?: string): void

/** 反转字符串 */
declare function reverseString(str: string): string

/** 暂停当前线程指定时间 单位毫秒 */
declare function sleep(delay: number): Promise<unknown>

/** 对函数进行节流处理 */
declare function throttle<T extends AnyFunction>(callback: T, delay: number): T

/** 下划线字符串转驼峰字符串  */
declare function underlineToHump(str: string): string
```
