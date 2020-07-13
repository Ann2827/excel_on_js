export class TableSelection {
    static className = 'selected'

    constructor() {
      this.group = []
      this.curren = null
    }

    // $el instanceof DOM === true (т к начинается с $)
    select($el) {
      this.clear()
      $el.focus().addClass('selected')
      this.group.push($el)
      this.curren = $el
    }

    clear() {
      this.group.forEach($el => $el.removeClass(TableSelection.className))
      this.group = []
    }

    selectGroup($group = []) {
      this.clear()
      this.group = $group
      this.group.forEach($el => $el.addClass(TableSelection.className))
    }
}
