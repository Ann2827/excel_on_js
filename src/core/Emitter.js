export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // dispatch, fire, trigger
  // Уведомляем слушатели, если они есть
  // оператор rest (es6)
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) return false
    this.listeners[event].forEach(listener => {
      listener(...args) // оператор sprite
    })
    return true
  }

  // on, listen
  // Подписываемся на уведомления или добавляем нового слушателя
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => { // отписаться
      this.listeners[event] = this.listeners[event]
          .filter(listener => listener !== fn)
    }
  }
}

// const emitter = new Emitter()
// emitter.subscribe('test', data => data)
// emitter.emit('test', 42)

// TODO: to observer
