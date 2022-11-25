//vendors.js
//没错这个文件就是这么简单，四行代码就搞定了。
//原理就是从jquery引入$符号对象，然后将这个对象赋值给window对象，再导出即可
import $ from 'jquery'
window.$ = $
window.jQuery = $
export default $