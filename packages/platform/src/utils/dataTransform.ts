import camelCase from 'camelcase'
import decamelize from 'decamelize'

export const isType = (data: any, type: string) => {
  return Object.prototype.toString.call(data) === `[object ${type}]`
}

/* 判断数据是否为对象类型 */
const isObject = (data: any): boolean => {
  return Object.prototype.toString.call(data) === '[object Object]'
}
/* 判断是否为函数类型 */
export const isFunction = (data: any) => {
  return isType(data, 'Function')
}

/* 遍历数据，进行下划线和驼峰的转换 */
const deepConvertData = (data: any, convertFn: Function) => {
  // 非数组 非对象
  if (!Array.isArray(data) && !isObject(data)) {
    return data
  }
  // 数组每一项进行深层处理
  if (Array.isArray(data)) {
    return data.reduce((res: Array<any>, item: any, index: number) => {
      res[index] = deepConvertData(item, convertFn)
      return res
    }, [])
  }

  // 对象每一项进行深层处理
  return Object.keys(data).reduce((res: Record<string, any>, key: string) => {
    res[convertFn(key)] = deepConvertData(data[key], convertFn)
    return res
  }, {})
}

/**
 * @description 将数据从下划线转为驼峰
 */
export const deepCamelKey = (data: any) => deepConvertData(data, camelCase)

/**
 * @description 将数据从驼峰转为下划线
 */
export const deepDeCamelKey = (data: any) => deepConvertData(data, decamelize)
