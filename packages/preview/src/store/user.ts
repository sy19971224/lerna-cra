import { Action, action, Thunk, thunk } from 'easy-peasy'

import { Auth } from '@/models'
import API from '@/api'

export type UserModel = {
  isInit: boolean
  permission: string[]
  authInfo: Auth | null
  setAuthInfo: Action<UserModel, Auth>
  setPermission: Action<UserModel, string[]>
  setInit: Action<UserModel, boolean>
  getUserInfo: Thunk<UserModel>
}

const userModel: UserModel = {
  isInit: false,
  permission: [],
  authInfo: null,
  setAuthInfo: action((state, payload) => {
    state.authInfo = payload
  }),
  setPermission: action((state, payload) => {
    state.permission = payload
  }),
  setInit: action((state, payload) => {
    state.isInit = payload
  }),
  getUserInfo: thunk(async actions => {
    try {
      await API.login().then(res => actions.setAuthInfo(res))
      await API.getUserPermission().then(res => actions.setPermission(res))
      actions.setInit(true)
    } catch (error) {
      console.log(error)
    }
  })
}

export default userModel
