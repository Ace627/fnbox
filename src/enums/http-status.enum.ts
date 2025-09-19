/**
 * HTTP 状态码常量定义
 * 参考标准：RFC 7231及相关扩展规范
 */
export const HttpStatus = {
  /** 服务器已接收请求的初始部分，客户端应继续发送剩余部分 */
  CONTINUE: 100,
  /** 服务器同意客户端的协议转换请求 */
  SWITCHING_PROTOCOLS: 101,
  /** 服务器正在处理请求，但尚未完成 */
  PROCESSING: 102,
  /** 服务器发送的预加载提示，用于提前加载资源 */
  EARLYHINTS: 103,
  /** 请求成功，服务器已成功处理请求 */
  OK: 200,
  /** 请求成功并创建了新资源 */
  CREATED: 201,
  /** 请求已被接受，但尚未处理完成 */
  ACCEPTED: 202,
  /** 服务器成功处理请求，但返回的信息来自第三方源 */
  NON_AUTHORITATIVE_INFORMATION: 203,
  /** 服务器成功处理请求，但无需返回内容 */
  NO_CONTENT: 204,
  /** 服务器成功处理请求，要求客户端重置文档视图 */
  RESET_CONTENT: 205,
  /** 服务器成功处理了部分 GET 请求 */
  PARTIAL_CONTENT: 206,
  /** 多状态响应，用于返回多个资源的状态信息 */
  MULTI_STATUS: 207,
  /** 已在先前的请求中报告过该资源，无需重复报告 */
  ALREADY_REPORTED: 208,
  /** 内容与之前版本不同（WebDAV 扩展） */
  CONTENT_DIFFERENT: 210,
  /** 请求的资源有多个可能的响应，需要客户端进一步选择 */
  AMBIGUOUS: 300,
  /** 请求的资源已永久移动到新位置 */
  MOVED_PERMANENTLY: 301,
  /** 请求的资源临时移动到新位置 */
  FOUND: 302,
  /** 客户端应使用 GET 方法从新位置获取资源 */
  SEE_OTHER: 303,
  /** 资源未修改，客户端可使用缓存的版本 */
  NOT_MODIFIED: 304,
  /** 请求的资源临时移动到新位置，客户端应使用原方法重定向 */
  TEMPORARY_REDIRECT: 307,
  /** 请求的资源永久移动到新位置，客户端应使用原方法重定向 */
  PERMANENT_REDIRECT: 308,
  /** 请求存在语法错误或参数错误，服务器无法理解 */
  BAD_REQUEST: 400,
  /** 请求需要身份验证，客户端未提供或验证失败 */
  UNAUTHORIZED: 401,
  /** 预留状态码，用于未来的支付需求 */
  PAYMENT_REQUIRED: 402,
  /** 服务器理解请求，但拒绝执行（权限不足） */
  FORBIDDEN: 403,
  /** 请求的资源不存在 */
  NOT_FOUND: 404,
  /** 请求使用的方法不被允许 */
  METHOD_NOT_ALLOWED: 405,
  /** 服务器无法提供客户端请求的内容类型 */
  NOT_ACCEPTABLE: 406,
  /** 请求需要代理身份验证 */
  PROXY_AUTHENTICATION_REQUIRED: 407,
  /** 服务器等待请求超时 */
  REQUEST_TIMEOUT: 408,
  /** 请求与服务器当前状态冲突 */
  CONFLICT: 409,
  /** 请求的资源已永久删除，无法恢复 */
  GONE: 410,
  /** 请求需要 Content-Length 头信息 */
  LENGTH_REQUIRED: 411,
  /** 请求的前置条件不满足 */
  PRECONDITION_FAILED: 412,
  /** 请求体过大，服务器无法处理 */
  PAYLOAD_TOO_LARGE: 413,
  /** 请求的 URI 过长，服务器无法处理 */
  URI_TOO_LONG: 414,
  /** 请求的媒体类型不被服务器支持 */
  UNSUPPORTED_MEDIA_TYPE: 415,
  /** 请求的范围无法满足 */
  REQUESTED_RANGE_NOT_SATISFIABLE: 416,
  /** 服务器无法满足 Expect 请求头中的要求 */
  EXPECTATION_FAILED: 417,
  /** 彩蛋状态码：服务器是一个茶壶，无法煮咖啡（RFC 2324） */
  I_AM_A_TEAPOT: 418,
  /** 请求被发送到错误的服务器 */
  MISDIRECTED: 421,
  /** 请求格式正确，但包含无法处理的语义错误 */
  UNPROCESSABLE_ENTITY: 422,
  /** 请求的资源被锁定 */
  LOCKED: 423,
  /** 由于之前的请求失败，当前请求无法完成 */
  FAILED_DEPENDENCY: 424,
  /** 服务器要求请求必须包含前置条件 */
  PRECONDITION_REQUIRED: 428,
  /** 客户端发送请求过于频繁，超出限制 */
  TOO_MANY_REQUESTS: 429,
  /** 无法恢复的错误（非标准状态码） */
  UNRECOVERABLE_ERROR: 456,
  /** 服务器内部错误，无法完成请求 */
  INTERNAL_SERVER_ERROR: 500,
  /** 服务器不支持请求的功能 */
  NOT_IMPLEMENTED: 501,
  /** 网关或代理服务器从上游服务器收到无效响应 */
  BAD_GATEWAY: 502,
  /** 服务器暂时无法处理请求（通常是过载或维护） */
  SERVICE_UNAVAILABLE: 503,
  /** 网关或代理服务器等待上游服务器响应超时 */
  GATEWAY_TIMEOUT: 504,
  /** 服务器不支持请求的 HTTP 版本 */
  HTTP_VERSION_NOT_SUPPORTED: 505,
  /** 服务器存储空间不足，无法完成请求 */
  INSUFFICIENT_STORAGE: 507,
  /** 服务器检测到请求循环 */
  LOOP_DETECTED: 508,
} as const
