/**
 * @description 读取config.json中的cookie信息，种到本地开发环境下（一般为localhost），从而具备接口所需的soup权限
 */

import Cookies from 'js-cookie'

import config from './config.json'

export const mockLogin = () => {
  if (window.location.hostname === 'localhost') {
    config.forEach(item => {
      Cookies.set(item.name, item.value)
    })
  }
}
