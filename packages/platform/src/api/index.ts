import { IS_LOCAL } from '@/constant'
import * as auth from './common/auth'
import * as file from './common/file'

/**
 * @description 本地开发环境下，校验每个文件的 API 方法是否重名
 */
if (IS_LOCAL) {
  const moduleList = [auth, file]
  const nameSet = new Set()
  moduleList.forEach(module => {
    Object.keys(module).forEach(name => {
      if (nameSet.has(name)) {
        console.error(`API模块: 接口 ${name} 和其他接口命名重复了！`)
      } else {
        nameSet.add(name)
      }
    })
  })
}

export default {
  ...auth,
  ...file
}
