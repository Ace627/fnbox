import fs from 'fs'
import path from 'path'

/** 获取绝对路径 */
export function pathResolve(dir: string): string {
  return path.resolve(process.cwd(), dir)
}

// 入口文件路径
const indexPath = pathResolve('src/index.ts')

// 读取 src 下的所有目录（排除 index.ts）
const fnDirs = fs.readdirSync(pathResolve('src')).filter((dir) => dir !== 'index.ts')

// 生成 export 语句
const exportStatements: string[] = []
for (const dir of fnDirs) {
  const files = fs.readdirSync(pathResolve(`src/${dir}`))
  for (const file of files) {
    if (!file.endsWith('.ts')) continue
    const fnName = file.replace('.ts', '')
    exportStatements.push(`export { ${fnName} } from './${dir}/${fnName}'`)
  }
}

// 写入 index.ts
fs.writeFileSync(indexPath, exportStatements.join('\n'))
