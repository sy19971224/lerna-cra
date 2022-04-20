import {
  createStore,
  createTypedHooks
} from 'easy-peasy'

import userModel, { UserModel } from './user'

type Store = {
  userModel: UserModel,
}

const store: Store = {
  userModel
}

const typedHooks = createTypedHooks<Store>()

export const useStoreActions = typedHooks.useStoreActions
export const useStoreDispatch = typedHooks.useStoreDispatch
export const useStoreState = typedHooks.useStoreState

export default createStore(store)
