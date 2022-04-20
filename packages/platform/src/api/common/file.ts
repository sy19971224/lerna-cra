import { httpPost } from '@/utils'
import { UPLOAD_RECORD_TYPE } from '@/constant'

/**
 * @description 上传图片
 * @return {*}  {Promise<{ fileName: string, fileId: string }>}
 */
export const uploadImage = (
  data: FormData
): Promise<{ fileName: string; fileId: string }[]> =>
  httpPost('/file/image', data)

/**
 * @description 上传文件
 * @return {*}  {Promise<{ fileName: string, fileId: string }[]>}
 */
export const uploadFile = (
  data: FormData
): Promise<{ fileName: string; fileId: string }[]> =>
  httpPost('/file/upload', data)

/**
 * @description 上传qc结果
 * @param {{ type: UPLOAD_RECORD_TYPE, downloadUrl: string }} data
 */
export const uploadQcFile = (data: {
  type: UPLOAD_RECORD_TYPE
  downloadUrl: string
}) => httpPost('/upload/qc/csv', data)
