// 本页面为全局变量和方法可在任意页面调用
import { mapActions, mapState } from 'vuex'
import Common from 'common/common'
const com = new Common()
export default {
  data() {
    return {
      defaultImg: require('../assets/img/noImg.png'),
    }
  },
  computed: {
		// 获取vuex，state
    ...mapState({
      loginData: ({ login }) => login.getLoginData, // 登录信息
			commonData: ({ common }) => common, // 各种字典信息
      // depCode: ({ common }) => common.depCode
    }),
  },
  methods: {
    // 获取vuex，Actions定义方法
    ...mapActions([
  
    ]),
		// 初始化方法，页面初始化时需要加载的都放在这里
		initCommon(){
		
		},
		// 序号
		indexMethod(index) {
		  return index + 1 + (this.pageData.currentPage - 1) * this.pageData.pageNum
		},
		// 获取数组最后一个
		getLast(val){
			const [last] = [...val].reverse()
			return last
		}
  }
}
