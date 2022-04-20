export const emptyValidator = (_: any, value: string) => {
  if (value.length > 0 && value.trim().length === 0) {
    return Promise.reject(new Error('please input at least one character'))
  } else {
    return Promise.resolve()
  }
}
