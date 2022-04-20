export const noop = () => {}

export const sleep = (duration: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(null)
    }, duration)
  })
}

export const createFiltersByEnum = (
  map: any
): { text: string; value: number }[] => {
  return Object.keys(map)
    .filter(key => !isNaN(Number(key)))
    .map(key => {
      return {
        text: map[key] as string,
        value: Number(key)
      }
    })
}

/**
 * dangerous:不再推荐使用。请统一使用 enum + createFiltersByEnum
 */
export const dangerousCreateFiltersByMap = (
  originMap: Record<number, string>
): { text: string; value: number }[] => {
  return Object.keys(originMap).map(key => {
    return {
      text: originMap[Number(key)],
      value: Number(key)
    }
  })
}
