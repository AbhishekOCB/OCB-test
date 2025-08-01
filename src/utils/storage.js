export const store = {
  get(key, fallback=null) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback } catch { return fallback }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
