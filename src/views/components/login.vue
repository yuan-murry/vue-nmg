<template>
  <div id="index_main" class="index_main">
    <!--导航-->
    <div class="section section1">
      <div class="index_banner">
        <div class="item" v-for="(item, index) in imgList" :key="index">
          <img
            class="items scaleBg"
            v-if="item.filePath"
            :src="baseReqUrl + '/download?fileId=' + item.filePath"
          />
          <img class="items scaleBg" v-else src="/images/default.png" />
          <div class="inner">
            <div class="block_txt">
              <h2 style="font-size: 30pt">
                <span>{{ item.titleName }}</span>
              </h2>
              <h4>{{ item.titleText }}</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="left slick_txt">
        <div class="prev slick_arrow"></div>
      </div>
      <div class="right slick_txt">
        <div class="next slick_arrow"></div>
      </div>
      <div class="number" @click.stop.prevent="showMessage">
        <div>
          <span>进入系统</span>
        </div>
      </div>
    </div>
    <Spin size="large" fix v-if="spinShow"></Spin>
  </div>
</template>
<script>
/* eslint-disable */
import $ from "@/assets/js/login/vendor.js";
/* eslint-enable */
import "@/assets/js/login/jquery.fullPage.min.js";
import "@/assets/js/login/index_slick.js";
import Sever from "@/api/selfApi";
import { baseReqUrl } from "@/api/baseUrl";
export default {
  data() {
    return {
      imgList: [],
      baseReqUrl,
      spinShow: false,
    };
  },
  created() {
    this.loadImgData();
  },
  mounted() {
    // setTimeout(() => {
    //   require("@/assets/js/login/index.js");
    // }, 1000);
  },
  methods: {
    loadJS() {
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "js/index.js";
      document.body.appendChild(script);
    },
    showMessage() {
      this.$Message.info("开始进入系统");
      this.spinShow = true;
      if (this.$store.state.theme == "theme_blue") {
        this.$router.push({ path: "/home" });
      } else if (this.$store.state.theme == "theme_gray") {
        this.$router.push({ path: "/homeGray" });
      }
    },
    async loadImgData() {
      await Sever.smz
        .getImgByTheme()
        .then((res) => {
          if (res.code == 1) {
            if (res.data.length > 0) {
              this.imgList = res.data;
            } else {
              this.imgList = [{ filePath: "", titleName: "", titleText: "" }];
            }

            this.loadJS();
          } else {
            this.$Message.error("获取数据失败");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped src="@/assets/css/login/index.css"></style>
<style src="@/assets/css/login/slick.css"></style>
<style src="@/assets/css/login/jquery.fullPage.css"></style>
