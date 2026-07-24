// iOS 的 uni-app x 调用仍经过 JS/Swift 桥。被 @UTSJS.keepAlive 标注的方法
// 会把所有回调保存在 HBuilderX 的全局回调表中。这里复用固定 relay，避免
// 每次 loginAuth / 重新注册监听器时持续追加新的 JS 闭包。
let loginAuthResultCallback = null
let legacyAuthPageEventCallback = null
let subscribedAuthPageEventCallback = null
let customViewsClickCallback = null

const loginAuthResultRelay = (result) => {
  const callback = loginAuthResultCallback
  loginAuthResultCallback = null
  if (callback) callback(result)
}

const legacyAuthPageEventRelay = (event) => {
  if (legacyAuthPageEventCallback) legacyAuthPageEventCallback(event)
}

const subscribedAuthPageEventRelay = (event) => {
  if (subscribedAuthPageEventCallback) subscribedAuthPageEventCallback(event)
}

const customViewsClickRelay = (id) => {
  if (customViewsClickCallback) customViewsClickCallback(id)
}

export function initLoginAuth(loginAuth) {
  return (options, callback, eventCallback) => {
    loginAuthResultCallback = callback
    legacyAuthPageEventCallback = eventCallback || null
    if (eventCallback) {
      return loginAuth(options, loginAuthResultRelay, legacyAuthPageEventRelay)
    }
    return loginAuth(options, loginAuthResultRelay)
  }
}

export function initOnAuthPageEvent(onAuthPageEvent) {
  return (callback) => {
    subscribedAuthPageEventCallback = callback
    return onAuthPageEvent(subscribedAuthPageEventRelay)
  }
}

export function initOffAuthPageEvent(offAuthPageEvent) {
  return () => {
    legacyAuthPageEventCallback = null
    subscribedAuthPageEventCallback = null
    return offAuthPageEvent()
  }
}

export function initAddCustomViewsClickCallback(addCustomViewsClickCallback) {
  return (callback) => {
    customViewsClickCallback = callback || null
    if (callback) {
      return addCustomViewsClickCallback(customViewsClickRelay)
    }
    return addCustomViewsClickCallback()
  }
}

export function initRemoveCustomViewsClickCallback(removeCustomViewsClickCallback) {
  return () => {
    customViewsClickCallback = null
    return removeCustomViewsClickCallback()
  }
}
