import moment from 'moment'

const hashtagReg =
  /[\s·.~！@#￥%……&*（）—+=【】{}、|；‘’：“”《》？，。、`~!#$^&*()_[\]{}\\|;'':"",/<>?「』」]+/g
/**
 * @description 格式化 hashtag
 */
export const formatHashtag = (hashtag: string): string => {
  return hashtag.replace(hashtagReg, '')
}

/**
 * @description 千分位处理数字
 */
export const formatNum = (target: string | number): string => {
  return (target + '').replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

type _DateType = string | number | Date | null | undefined

// 预处理时间参数的类型
const preCorrectionType = (date: _DateType) => {
  // date 为字符串时间戳时，转成数字类型
  return typeof date === 'string' && !Number.isNaN(+date) ? +date : date
}

/**
 * @description 格式化日期
 */
export const formatDate = (
  date?: _DateType,
  formatRule: string = 'YYYY-MM-DD HH:mm:ss'
): string => {
  date = preCorrectionType(date)
  return moment(date).format(formatRule)
}

/**
 * @description 获取距离当前时间的描述字符串(eg: 5 months ago)
 */
export const getFromNowStr = (date: _DateType): string => {
  date = preCorrectionType(date)
  return moment(date).fromNow()
}
