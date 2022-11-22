<template>
  <div class="ksh">
    <div style="position: absolute; top: 0; z-index: 11; width: 100%; height: 100%">
      <div class="head_top">
        <div class="index_nav">
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
            内蒙古机构编制<span style="font-style: italic; font-size: 48px">数字</span>
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
          <div class="clear"></div>
        </div>
      </div>
      <!-- 主题切换 -->
      <!-- <div class="changecolor">
        <div @click="changeTheme('blue')" class="cblue"></div>
        <div @click="changeTheme('green')" class="cgreen"></div>
        <div @click="changeTheme('red')" class="cred"></div>
      </div> -->
      <router-view></router-view>
    </div>
    <canvas id="canvas" style="position: absolute; top: 0; left: 0; width: 99%"></canvas>
  </div>
</template>
<script>
import { Message } from "iview";
import Sever from "@/api/selfApi";
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  created() {
    this.checkTime();
  },
  methods: {
    checkTime() {
      const id = this.$route.query.id;
      if (id) {
        let data = new Date();
        let now = data.getTime();
        let time = (now - id) / 1000 / 60;
        if (time >= 2) {
          Message.loading({
            content: "请从管理端进入",
            duration: 0,
          });
        } else {
          this.isVisible = true;
        }
      } else {
        Message.error("请从管理端进入");
      }
    },
    async saveTheme(val) {
      await Sever.smz
        .saveTheme({ theme: val })
        .then((res) => {
          if (res == "success") {
            Message.info("保存成功");
          }
        })
        .catch((err) => {
          console.log(err);
          Message.info("保存失败");
        });
    },
    // changeTheme(val) {
    //   if (val == "green") {
    //     Message.info("该功能暂未开放功能");
    //     return;
    //   } else {
    //     document.getElementById("theme").href = `/css/skin_${val}.css`;
    //     if (document.getElementById("theme_bg") != null) {
    //       document.getElementById("theme_bg").remove();
    //     }
    //     let script = document.createElement("script");
    //     script.type = "text/javascript";
    //     script.src = `/js/bg_${val}.js`;
    //     script.id = "theme_bg";
    //     document.getElementsByTagName("body")[0].appendChild(script);
    //     this.$store.dispatch("changeTheme", val);
    //     this.saveTheme(val);
    //   }
    // },
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
.active {
  color: #66ffff;
}
</style>
