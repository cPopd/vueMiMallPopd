// storage 封装
const STORAGE_KEY = 'mall'
export default {
  // 存储值
  setItem(key, value, moudle_name) {
    if (moudle_name) {
      let val = this.getItem(moudle_name)
      val[key] = value
      this.setItem(moudle_name, val)
    } else {
      let val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  // 获取值 获取有一个模块下面的属性 user下面的username
  getItem(key, moudle_name) {
    if (moudle_name) {
      let val = this.getItem(moudle_name)
      if (val) return val[key]
    }
   return this.getStorage()[key]
  },
  // 获取整个数据
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  // 清空
  clear(key, moudle_name) {
    let val = this.getStorage()
    if (moudle_name) {
      if (val[moudle_name]) return
      delete val[moudle_name][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}