<template>
  <div class="tableCom">
    <div class="tableHead">
      <div
        class="tableHeadItem"
        v-for="(item, index) in head"
        :key="index"
        :style="{ flex: item.flex }"
      >
        {{ item.title }}
      </div>
    </div>
    <vue-seamless-scroll
      :data="list"
      :class-option="defaultOption"
      class="tableBody"
    >
      <div class="tableBody2" v-for="(item, index) in list" :key="index">
        <div class="tableBody2Item">
          {{ item.title }}
        </div>
        <div class="tableBody2Item">
          {{ item.date }}
        </div>
      </div>
    </vue-seamless-scroll>
  </div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";

export default {
  components: { vueSeamlessScroll },
  props: {
    list: {
      type: Array,
      default() {
        return [
          {
            title: "呼和浩特",
            date: "**************厅",
          },
          {
            title: "包头",
            date: "***************局",
          },
          {
            title: "呼伦贝尔",
            date: "**************信息中心",
          },
          {
            title: "阿拉善盟",
            date: "********单位",
          },
          {
            title: "赤峰",
            date: "********所",
          },
          {
            title: "巴彦淖尔",
            date: "********部门",
          },
        ];
      },
    },
    head: {
      type: Array,
      default() {
        return [
          {
            title: "所属地区",
            flex: 1.2,
          },
          {
            title: "机构名称",
            flex: 1,
          },
        ];
      },
    },
  },
  computed: {
    defaultOption() {
      return {
        step: 0.3, // 数值越大速度滚动越快
        limitMoveNum: 1, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  data() {
    return {};
  },
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.tableCom {
  width: calc(100% - 40px);
  margin-left: 20px;
  position: relative;
  height: 80%;
  overflow: hidden;

  .tableHead {
    width: 100%;
    height: 26px;
    background: rgba(#013367, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;

    .tableHeadItem {
      font-size: 14px;
      font-family: PingFang;
      font-weight: 500;
      color: #dcebfc;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      padding-left: 5px;
      flex: 1;
    }
  }

  .tableBody {
    position: relative;
    height: calc(100% - 26px);
    overflow: hidden;

    .tableBody2 {
      min-height: 26px;
      padding-top: 5px;
      padding-bottom: 5px;
      background: rgba(#031f3d, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;

      .tableBody2Item {
        font-size: 14px;
        font-family: PingFang;
        font-weight: 500;
        color: #dcebfc;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        padding-left: 5px;
        flex: 1;
      }
    }

    .tableBody2:nth-child(even) {
      background: rgba(1, 51, 103, 0.8);
    }
  }

  .status {
    color: rgba(13, 206, 242, 1);
  }
}
</style>

