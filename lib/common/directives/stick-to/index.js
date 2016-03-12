import './index.styl'

export default {
  bind() {
    this.el.setAttribute(this.name, this.expression)

    switch (this.expression) {
      case 'bottom':
        /*
        if (isIOS && !isWechat)
          this.el.style.position = 'fixed'
        */
    }

  },

  update() {},

  unbind() {}
}
