<template>
  <div style="height: 100%">
    <div class="head_top">
      <div class="index_nav">
        <ul style="height: 30px; margin-bottom: 0px">
          <li class="l_left lone" @click="changeContent('smz')">
            <span @click="change(0)" :class="{ active: currentIndex === 0 }"
              >统计实名制</span
            >
          </li>
          <li class="l_left ltwo" @click="changeContent('others')">
            <span @click="change(1)" :class="{ active: currentIndex === 1 }"
              >智控分析</span
            >
          </li>
          <li class="l_left lthree" @click="changeContent('others')">
            <span @click="change(2)" :class="{ active: currentIndex === 2 }"
              >研判监管</span
            >
          </li>
          <li class="l_left lfour" @click="changeContent('others')">
            <span @click="change(3)" :class="{ active: currentIndex === 3 }"
              >效益评估</span
            >
          </li>
          <li class="l_left lfive" @click="changeContent('others')">
            <span @click="change(4)" :class="{ active: currentIndex === 4 }"
              >业务协同</span
            >
          </li>
          <li class="m_middle">
            内蒙古机构编制<span style="font-style: italic; font-size: 48px"
              >数字</span
            >
            一体化平台
          </li>
          <li class="r_right rone" @click="changeContent('others')">
            <span @click="change(5)" :class="{ active: currentIndex === 5 }"
              >资源汇聚</span
            >
          </li>
          <li class="r_right rtwo" @click="changeContent('others')">
            <span @click="change(6)" :class="{ active: currentIndex === 6 }"
              >网上名称</span
            >
          </li>
          <li class="r_right rthree" @click="changeContent('others')">
            <span @click="change(7)" :class="{ active: currentIndex === 7 }"
              >事业登记</span
            >
          </li>
          <li class="r_right rfour" @click="changeContent('others')">
            <span @click="change(8)" :class="{ active: currentIndex === 8 }"
              >公文办公</span
            >
          </li>
          <li class="r_right rfive" @click="changeContent('others')">
            <span @click="change(9)" :class="{ active: currentIndex === 9 }"
              >电子档案</span
            >
          </li>
        </ul>

        <div class="clear"></div>
      </div>
    </div>
    <div class="visual">
      <router-view></router-view>
    </div>

    <div class="clear"></div>
  </div>
</template>
<script>
import { Message } from "iview";
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    changeContent(val) {
      if (val != "smz") {
        // this.$router.push({ name: "smz" });
        Message.info("该菜单暂未开放功能");
      }
    },
    change(index) {
      this.currentIndex = index;
    },
  },
};
</script>
<style scoped>
@import "~@/assets/css/visual.css";
</style>
<style scoped>
.active {
  color: #f4a460;
}
</style>