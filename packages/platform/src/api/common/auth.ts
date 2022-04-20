import { httpGet } from '../../utils/request'
import { Auth } from '@/models'

export const login = (): Promise<Auth> => httpGet('/auth/login')
interface PermissionData {
  total: number
  perms: string[]
}
export const getUserPermission = () => {
  return httpGet<any>('/auth/perms').then((res: PermissionData) => res.perms)
}
