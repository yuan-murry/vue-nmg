<template>
  <div id="index_main" class="index_main">
    <!--导航-->
    <div class="section section1">
      <div class="index_banner">
        <div class="item" v-for="(item, index) in imgList" :key="index">
          <div class="items scaleBg">
            <img
              v-if="item.filePath"
              :src="baseReqUrl + '/download?fileId=' + item.filePath"
            />
            <img v-else src="/images/default.png" />
          </div>
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
<style scoped>
@import url("/css/login/index.css");
@import url("/css/login/slick.css");
@import url("/css/login/jquery.fullPage.css");
</style>
