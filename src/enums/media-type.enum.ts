/**
 * 媒体类型（MIME 类型）常量定义，参考 Java 的 MediaType 设计
 * 包含常见的 HTTP 请求/响应内容类型，区分带 UTF-8 编码和不带编码的版本
 */
export const MediaType = Object.freeze({
  /** 纯文本类型 */
  TEXT_PLAIN: 'text/plain',
  /** 带 UTF-8 编码的纯文本类型 */
  TEXT_PLAIN_UTF8: 'text/plain;charset=UTF-8',
  /** HTML 文本类型 */
  TEXT_HTML: 'text/html',
  /** 带 UTF-8 编码的 HTML 文本类型 */
  TEXT_HTML_UTF8: 'text/html;charset=UTF-8',
  /** CSS 样式表类型 */
  TEXT_CSS: 'text/css',
  /** 带 UTF-8 编码的 CSS 样式表类型 */
  TEXT_CSS_UTF8: 'text/css;charset=UTF-8',
  /** JavaScript 脚本类型 */
  TEXT_JAVASCRIPT: 'text/javascript',
  /** 带 UTF-8 编码的 JavaScript 脚本类型 */
  TEXT_JAVASCRIPT_UTF8: 'text/javascript;charset=UTF-8',
  /** 文本 XML 类型 */
  TEXT_XML: 'text/xml',
  /** 带 UTF-8 编码的文本 XML 类型 */
  TEXT_XML_UTF8: 'text/xml;charset=UTF-8',

  /** JSON 数据类型 */
  APPLICATION_JSON: 'application/json',
  /** 带 UTF-8 编码的 JSON 数据类型 */
  APPLICATION_JSON_UTF8: 'application/json;charset=UTF-8',
  /** JSON Patch 格式类型（RFC 6902） */
  APPLICATION_JSON_PATCH: 'application/json-patch+json',
  /** 带 UTF-8 编码的 JSON Patch 格式类型 */
  APPLICATION_JSON_PATCH_UTF8: 'application/json-patch+json;charset=UTF-8',
  /** 应用程序 XML 类型 */
  APPLICATION_XML: 'application/xml',
  /** 带 UTF-8 编码的应用程序 XML 类型 */
  APPLICATION_XML_UTF8: 'application/xml;charset=UTF-8',
  /** URL 编码的表单数据类型 */
  APPLICATION_FORM_URLENCODED: 'application/x-www-form-urlencoded',
  /** 带 UTF-8 编码的 URL 编码表单数据类型 */
  APPLICATION_FORM_URLENCODED_UTF8: 'application/x-www-form-urlencoded;charset=UTF-8',
  /** 二进制流类型 */
  APPLICATION_OCTET_STREAM: 'application/octet-stream',
  /** PDF 文档类型 */
  APPLICATION_PDF: 'application/pdf',
  /** ZIP 压缩文件类型 */
  APPLICATION_ZIP: 'application/zip',
  /** GZIP 压缩文件类型 */
  APPLICATION_GZIP: 'application/gzip',
  /** 流式 JSON 类型 */
  APPLICATION_STREAM_JSON: 'application/stream+json',

  /** 多部分表单数据类型(用于文件上传) */
  MULTIPART_FORM_DATA: 'multipart/form-data',

  /** JPEG 图片类型 */
  IMAGE_JPEG: 'image/jpeg',
  /** PNG 图片类型 */
  IMAGE_PNG: 'image/png',
  /** GIF 图片类型 */
  IMAGE_GIF: 'image/gif',
  /** SVG 矢量图类型 */
  IMAGE_SVG_XML: 'image/svg+xml',
  /** 带 UTF-8 编码的 SVG 矢量图类型 */
  IMAGE_SVG_XML_UTF8: 'image/svg+xml;charset=UTF-8',

  /** Atom XML 类型（用于 RSS 订阅） */
  APPLICATION_ATOM_XML: 'application/atom+xml',
  /** 带 UTF-8 编码的 Atom XML 类型 */
  APPLICATION_ATOM_XML_UTF8: 'application/atom+xml;charset=UTF-8',
  /** RSS XML 类型（用于 RSS 订阅） */
  APPLICATION_RSS_XML: 'application/rss+xml',
  /** 带 UTF-8 编码的（RSS XML）类型 */
  APPLICATION_RSS_XML_UTF8: 'application/rss+xml;charset=UTF-8',
  /** 问题详情 JSON 类型（RFC 7807） */
  APPLICATION_PROBLEM_JSON: 'application/problem+json',
  /** 带 UTF-8 编码的问题详情 JSON 类型 */
  APPLICATION_PROBLEM_JSON_UTF8: 'application/problem+json;charset=UTF-8',
  /** 问题详情 XML 类型（RFC 7807） */
  APPLICATION_PROBLEM_XML: 'application/problem+xml',
  /** 带 UTF-8 编码的问题详情 XML 类型 */
  APPLICATION_PROBLEM_XML_UTF8: 'application/problem+xml;charset=UTF-8',
})
