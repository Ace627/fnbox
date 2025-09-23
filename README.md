## 安装

```bash
npm i fnbox | yarn add fnbox | pnpm i fnbox
```

## 注意事项

- 所有方法均为 `TypeScript` 实现，提供了完善的类型提示
- 兼容环境目前基本上只考虑 `ES6+`
- 所有源码都在仓库中，欢迎使用学习与提建议，不断完善中

## 更新记录

### 1.2.1

- 新增 `version`，项目中本库的版本号
- 新增 `isUnsafeProperty`，检查属性键是否存在原型污染风险
- 新增 `at`，从数组中提取指定索引位置的元素，支持负索引（从数组末尾反向计数）
- 新增 `difference`，计算两个数组的差集，返回在第一个数组中存在但不在第二个数组中的元素
- 新增 `differenceBy`，基于映射函数计算两个数组的差集，返回在第一个数组中存在但不在第二个数组中的元素

### 1.2.0

- 新增 `isArray`，判断给定的值是否为数组
- 新增 `isBlob`，检测一个值是否为 Blob 对象
- 新增 `isBoolean`，判断值是否为布尔类型（包括原始布尔值和 Boolean 对象）
- 新增 `isBrowser`，判断当前运行环境是否为浏览器环境
- 新增 `isDate`，判断值是否为 Date 对象（包括无效日期对象）
- 新增 `isEmpty`，判断给定的值是否为空
- 新增 `isFloat`，判断值是否为浮点数（含小数部分的有限数字）
- 新增 `isInteger`，检查一个值是否为整数
- 新增 `isFunction`，判断值是否为函数类型
- 新增 `isHexColor`，判断字符串是否为有效的十六进制颜色值
- 新增 `isLeapYear`，判断一个年份是否为闰年
- 新增 `isNil`，检查值是否为 null 或 undefined
- 新增 `isNull`，严格判断指定值是否为 null 类型
- 新增 `isUndefined`，严格判断指定值是否为 undefined 类型
- 新增 `isNumber`，判断给定的值是否为有效数字（排除 NaN）
- 新增 `isObjectLike`，判断 `value` 是否为类对象（object-like）
- 新增 `isPlainObject`，判断给定的值是否为纯对象（通过 `{}` 或 `new Object` 创建）
- 新增 `isPrimitive`，检查一个值是否为 JavaScript 原始类型
- 新增 `isPromise`，判断一个值是否为 Promise 对象
- 新增 `isRegExp`，判断值是否为正则表达式（RegExp）对象
- 新增 `isSet`，判断给定的值是否为 Set 实例
- 新增 `isMap`，判断给定的值是否为 Map 实例
- 新增 `isWeakMap`，判断给定的值是否为 WeakMap 实例
- 新增 `isString`，判断给定的值是否为字符串
- 新增 `isStringBoolean`，检查值是否为字符串 "true" 或 "false"
- 新增 `isSymbol`，判断值是否为 Symbol 类型（包括原始类型和包装对象）
- 新增 `isStringNumber`，判断值是否为可转换为有效数字的字符串
- 新增 `linkDownload`，通过创建隐藏的 `a` 标签实现文件下载功能
- 新增 `upperFirst`，将字符串的首字母转为大写，其余字母转为小写
- 新增 `reverseString`，反转字符串
- 新增 `random`，生成 [lower, upper] 范围内的随机整数（包含上下限）
- 新增 `randomBoolean`，随机返回布尔值（true/false 概率各约 50%）
- 新增 `randomIndex`，为字符串或数组返回一个随机索引
- 新增 `get`，根据 object 对象的 path 路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代
- 新增 `omit`，从对象中移除指定属性，返回不包含这些属性的新对象
- 新增 `pick`，从对象中选取指定的属性，返回包含这些属性的新对象
- 新增 `HttpStatus`，HTTP 状态码常量定义
- 新增 `MediaType`，媒体类型（MIME 类型）常量定义，参考 Java 的 MediaType 设计
- 新增 `TimeUnit`，时间单位常量（均以秒为基准）
- 新增 `debounce`，防抖函数：在指定时间内多次触发时，只执行最后一次或第一次
- 新增 `throttle`，节流函数
- 新增 `to`，将 Promise 转换为 [错误, 结果] 格式的返回值，避免使用 try/catch
- 新增 `sleep`，延时函数
- 新增 `deepClone`，深拷贝一个值，支持多种数据类型并处理循环引用
- 新增 `first`，获取数组的第一个元素
- 新增 `last`，获取数组的最后一个元素
- 新增 `unique`，对基本类型数组进行去重（简洁实现）
- 新增 `uniqueBy`，对对象数组进行去重，同 `lodash.uniqueBy`
