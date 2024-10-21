## 安装依赖

```bash
pnpm i fnbox
```

## 方法参考

> 鼠标悬浮在导入的方法名上，VSCode 会有对应的注释和类型提示

### copyText

```typescript
import { copyText } from 'fnbox'

// 将指定内容复制到剪贴板，支持 string、number 和对象等类型

copyText('Hello, world!') // 复制字符串
copyText(9527) // 复制数字
copyText({ name: 'John', age: 30 }) // 复制对象
```

### imageToBase64

```typescript
import { imageToBase64 } from 'fnbox'

// 将指定 URL 的图片转换为 Base64 编码的字符串

imageToBase64('https://example.com/image.png').then((base64) => console.log('Base64 String:', base64))
```

### isBrowser

```typescript
import { isBrowser } from 'fnbox'

isBrowser() // 判断当前环境是否为浏览器环境
```

### linkDownload

```typescript
import { linkDownload } from 'fnbox'

// 创建一个临时的链接，用于下载指定 URL 的文件

// @example 通过指定文件名下载文件
linkDownload('https://example.com/file.pdf', 'example-file.pdf')

// @example 使用默认的时间戳作为文件名下载文件
linkDownload('https://example.com/file.pdf')
```
