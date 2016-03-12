export default {
  mobile: !!/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|MicroMessenger/i.test(navigator.userAgent), //eslint-disable-line
  ios: !!/iPhone|iPad|iPod/i.test(navigator.userAgent),
  ios7: !!/(iPhone|iPad|iPod) OS 7/i.test(navigator.userAgent),
  android: !!/Android/i.test(navigator.userAgent),
  wechat: !!/MicroMessenger/i.test(navigator.userAgent),
  ie: !!/Trident|Edge/i.test(navigator.userAgent)
}
