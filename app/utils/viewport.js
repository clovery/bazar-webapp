/**
 * @desc rem 响应式方案的实现
 */
!function(global) {
  let win = global
  let doc = win.document
  let baseWidth = 640
  let documentHTML = doc.documentElement

  function setRootFont () {
    let docWidth = documentHTML.getBoundingClientRect().width
    let scale = docWidth / baseWidth
    if (docWidth > 640)
      scale = 0.5
    documentHTML.style.fontSize = `${scale * 100}px`
  }

  setRootFont()
  win.addEventListener('resize', setRootFont, false)
}(window)
