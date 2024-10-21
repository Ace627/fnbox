import path from 'path'
import fs from 'fs/promises'

/** 路径拼接函数，简化代码 用 normalizePath 解决 window 下的路径问题 */
export function pathResolve(dir: string): string {
  return path.normalize(path.resolve(process.cwd(), dir))
}

const indexPath = pathResolve('src/index.ts')

let exportStr: string = ``

async function bootstrap() {
  const fullFileNameList = (await fs.readdir(pathResolve(`src`))).filter((v) => v.endsWith('.ts') && v !== 'index.ts')
  const fileNameList = fullFileNameList.map((fileName) => fileName.replace('.ts', ''))
  const exportList = fileNameList.map((fileName) => `export { ${fileName} } from './${fileName}'`)
  exportStr += exportList.join('\n')
  await fs.writeFile(indexPath, exportStr)
}

bootstrap()
