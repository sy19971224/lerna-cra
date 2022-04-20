/**
 * @description 用于全局控制逻辑
 */

export const HOST = `${window.location.protocol}//${window.location.host}`

export const NORMAL_SHORT_URL = '/api'
export const BASE_URL = HOST + NORMAL_SHORT_URL

export const MOCK_SHORT_URL = '/yapi'

export const IS_LOCAL = process.env.NODE_ENV === 'development'

export const MOCK_VAL = process.env.REACT_APP_MOCK || ''
export const IS_MOCK = MOCK_VAL && IS_LOCAL
if (MOCK_VAL === 'all') {
  console.warn('全局正在使用 yapi 环境')
}

export const CF_URL = 'https://cf.shopee.com.my/file'
export const DEFAULT_MUSIC_IMAGE = `${CF_URL}/210d15b1d996e26c27dea0bb2803eb4a030b0100000003f600000000020100f5`

export const LEAVE_PAGE_MESSAGE =
  'You have some msg not save yet, if you leave this page, these update will removed'

export const LANGUAGE = ['Indonesian', 'English']
export enum BOOLEAN {
  'Yes' = 0,
  'No' = 1,
}
