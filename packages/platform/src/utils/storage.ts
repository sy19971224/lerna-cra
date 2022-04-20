class WebStorage {
  static storage = window.localStorage
  public prefix: string
  constructor () {
    this.prefix = 'shopee-video-admin-'
  }

  set (key: string, value: string) {
    WebStorage.storage.setItem(`${this.prefix}${key}`, value)
  }

  remove (key: string) {
    WebStorage.storage.removeItem(`${this.prefix}${key}`)
  }

  get (key: string, reset = false) {
    const storageKey = `${this.prefix}${key}`
    const storageValue = WebStorage.storage.getItem(storageKey)
    if (reset) WebStorage.storage.removeItem(storageKey)
    return storageValue
  }
}

export const webStorage = new WebStorage()
