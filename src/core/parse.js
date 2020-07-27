export function parse(value = '') {
  if (value.startsWith('=')) {
    try {
      const test = eval(value.slice(1))
      // TODO: сделать по enter, сломалася обратная связь
      return test
    } catch (e) {
      console.warn('Error parsing', e.message)
      return value
    }
  }
  return value
}
