<!--
 描述: 新闻无缝滚动
 作者: Jack Chen
 日期: 2020-04-18
-->

<template>
  <div
    class="three-info mt40 bbsInfo"
    v-if="bbsData.length > 0"
    @click.stop="handleBBs($event)"
  >
    <vue-seamless-scroll :data="bbsData" :class-option="optionSetting">
      <ul class="ul-scoll">
        <li
          v-for="item in bbsData"
          :key="item.topicId"
          class="info-item flex align-items"
        >
          <div
            style="flex: 1;float:left"
            :data-id="item.title"
          >
            {{ item.title }}
          </div>
          <div
            class="fontSize26 color3 van-ellipsis"
            style="flex: 1;float:left"
            :data-id="item.title"
          >
            {{ item.date }}
          </div>
          <div
            class="fontSize26 color3 van-ellipsis"
            style="flex: 1;float:left"
            :data-id="item.title"
          >
            {{ item.hot }}
          </div>
        </li>
      </ul>
    </vue-seamless-scroll>
  </div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";

export default {
  name: "seamless",
  components: {
    vueSeamlessScroll,
  },
  data() {
    return {
      bbsData: [
        {
          title: "钱花哪了?一图带你读懂年轻人的消费观",
          date: "2020-05-05",
          hot: 2306,
        },
        {
          title: "“五一”假期前三天国内旅游收入超350亿元",
          date: "2020-05-02",
          hot: 5689,
        },
        {
          title: "滴滴、美团、哈啰交战，本地生活会是终局？",
          date: "2020-05-02",
          hot: 9,
        },
        {
          title: "“互联网+文化”逆势上行文娱消费云端真精彩",
          date: "2020-04-25",
          hot: 288,
        },
        {
          title: "乐观还是悲观？巴菲特是个现实主义者！",
          date: "2020-04-21",
          hot: 158,
        },
        {
          title: "B站的后浪，会把爱优腾拍在沙滩上吗?",
          date: "2020-04-20",
          hot: 889,
        },
        {
          title: "华为如何做投资的：先给两亿订单一年上市",
          date: "2020-04-01",
          hot: 5800,
        },
        {
          title: "马斯克：特斯拉股价太高了，我要卖豪宅",
          date: "2020-03-25",
          hot: 6,
        },
        {
          title: "人民日报海外版：云模式巧解“就业难”",
          date: "2020-03-16",
          hot: 88,
        },
        {
          title: '刚刚港股"崩了"：狂跌近1000点！',
          date: "2020-03-12",
          hot: 88,
        },
        {
          title: "个人健康信息码国家标准发布",
          date: "2020-02-28",
          hot: 5,
        },
        {
          title: "传软银国际裁员约10%两名管理合伙人离职",
          date: "2020-02-15",
          hot: 258,
        },
        {
          title: "27万个岗位：区块链、人工智能等专场招聘",
          date: "2020-02-10",
          hot: 198,
        },
        {
          title: "一季度电商发展势头迅猛农村电商破1300万家",
          date: "2020-02-08",
          hot: 19,
        },
      ],
    };
  },
  computed: {
    optionSetting() {
      return {
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        // autoPlay: false,
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  mounted() {},
  methods: {},
  beforeDestroy() {},
};
</script>

<style scoped>
.three-info {
  height: calc(100% - 45px);
  padding: 0 20px 20px;
  border-radius: 10px;
}

.info-item {
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 1px solid #f1f6f8;
}

.info-item .info-tag {
  width: 62px;
  padding: 6px 10px;
  background: #3e91ff;
  color: #fff;
  text-align: center;
  border-radius: 6px;
}
.bbsInfo {
  margin-top: 10px;
  height: 82%;
  overflow: hidden;
}
.info-item .bbs-tag {
  background: #faaf3d;
}
</style>