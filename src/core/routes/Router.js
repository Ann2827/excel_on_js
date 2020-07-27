// import {$} from '@core/dom'
// import {ActiveRoute} from '@core/routes/ActiveRoute'
// import {Loader} from '@/components/Loader'
// TODO: find for testing something with alias
import {$} from '../dom'
import {ActiveRoute} from './ActiveRoute'
import {Loader} from '../../components/Loader'

export class Router {
  constructor(selector, routes) {
    if (!selector) throw new Error('Selector is not provided in Router')

    this.$placeholder = $(selector)
    this.routes = routes

    this.loader = new Loader()

    this.page = null

    this.changePageHandler = this.changePageHandler.bind(this)

    this.init()
  }

  init() {
    window.addEventListener('hashchange', this.changePageHandler)
    this.changePageHandler()
  }

  async changePageHandler() {
    try {
      if (this.page) this.page.destroy()

      // if (this.$placeholder) this.$placeholder.clear()
      this.$placeholder.clear()
          .append(this.loader)

      const Page = ActiveRoute.path.includes('excel') ?
              this.routes.excel :
              this.routes.dashboard
      this.page = new Page(ActiveRoute.param)

      const root = await this.page.getRoot()
      // if (this.$placeholder) this.$placeholder.clear()
      this.$placeholder.clear()
          .append(root)

      this.page.afterRender()
    } catch (e) {
      console.warn('Error in changePageHandler', e.message)
    }
  }

  destroy() {
    window.removeEventListener('hashchange', this.changePageHandler)
  }
}
