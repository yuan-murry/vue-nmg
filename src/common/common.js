class common {
  constructor() {
    this.pageData = {
      currentPage: 1,
      pageSizes: [10, 20, 50, 200],
      pageNum: 10
    }
  }
  /**
     * 格式化日期
     * @param {原始日期} time
     * @param {RegExp} format
     */
  format(time, format) {
    if (!time) {
      return
    }
    const t = new Date(time)
    const tf = function(i) {
      return (i < 10 ? '0' : '') + i
    }
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a) {
      switch (a) {
        case 'yyyy':
          return tf(t.getFullYear())
        case 'MM':
          return tf(t.getMonth() + 1)
        case 'mm':
          return tf(t.getMinutes())
        case 'dd':
          return tf(t.getDate())
        case 'HH':
          return tf(t.getHours())
        case 'ss':
          return tf(t.getSeconds())
      }
    })
  }
}
export default common
