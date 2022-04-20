import Qs from 'qs'
import { message } from 'antd'
import axios, { Method, AxiosRequestConfig } from 'axios'

import { deepCamelKey, deepDeCamelKey } from './dataTransform'
import {
  HOST,
  BASE_URL,
  IS_LOCAL,
  IS_MOCK,
  MOCK_VAL,
  NORMAL_SHORT_URL,
  MOCK_SHORT_URL
} from '@/constant'
import { mockApiList } from '@/utils'

interface BaseRes {
  code: number
  msg: string
  data: any
}

const instance = axios.create({
  baseURL: IS_MOCK ? HOST : BASE_URL,
  timeout: 10000,
  paramsSerializer: params => {
    return Qs.stringify(params, { arrayFormat: 'brackets' })
  }
})

instance.interceptors.request.use(
  config => {
    if (IS_MOCK) {
      let shortUrl = NORMAL_SHORT_URL
      if (MOCK_VAL === 'all') {
        // 全局使用 yapi 环境
        shortUrl = MOCK_SHORT_URL
      } else if (mockApiList.includes(config.url)) {
        // 单接口走 yapi 环境
        shortUrl = MOCK_SHORT_URL
        console.warn(config.url + ' 正在使用 yapi 环境')
      }
      config.url = shortUrl + config.url
    }
    if (config.params) {
      config.params = deepDeCamelKey(config.params)
    }
    if (config.data) {
      config.data = deepDeCamelKey(config.data)
    }
    return config
  },
  error => {
    return error
  }
)

instance.interceptors.response.use(
  response => {
    const res: BaseRes = response.data
    const { code, msg } = res
    if (code === 0) {
      const newRes = deepCamelKey(res)
      if (IS_LOCAL) return newRes
      if (newRes.data && newRes.data.loginUrl) {
        window.location = newRes.data.loginUrl
      }
      return newRes
    } else {
      return Promise.reject(new Error(msg))
    }
  },
  error => {
    throw new Error(error)
  }
)

const http = (method: Method) => {
  return function <T = any> (
    url: string,
    data = {},
    options?: AxiosRequestConfig
  ) {
    return instance({
      url,
      method,
      params: method === 'GET' ? data : null,
      data,
      ...options
    })
      .then(res => res.data as T)
      .catch(err => {
        message.error(err.message, 1.5)
        return Promise.reject(err)
      })
  }
}

export const httpGet = http('GET')
export const httpPost = http('POST')
export const httpDelete = http('DELETE')
export const httpPut = http('PUT')
