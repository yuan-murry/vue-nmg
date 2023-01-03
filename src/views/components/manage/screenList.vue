<template>
  <div class="app-container">
    <Row :gutter="24">
      <Col :span="6">
        <div
          class="designItem"
          :style="{ backgroundImage: 'url(/images/theme_blue.jpg)' }"
        >
          <div
            style="
              text-indent: 1em;
              position: absolute;
              width: 100%;
              height: 30px;
              bottom: 0px;
              background-color: rgba(24, 31, 45, 0.84);
              font-size: 14px;
            "
          >
            蓝色主题<Icon
              v-if="this.$store.state.theme == 'theme_blue'"
              color="green"
              size="30"
              type="md-checkmark"
            />
          </div>
          <div class="editMask">
            <div style="text-align: center; line-height: 140px">
              <Button
                type="success"
                shape="circle"
                icon="ios-create-outline"
                @click="toDesign('theme_blue')"
                >设 计</Button
              >
            </div>
            <div style="text-align: center; line-height: 40px">
              <Button
                type="info"
                shape="circle"
                icon="ios-checkmark-circle-outline"
                @click="chooseTheme('theme_blue')"
                >使 用</Button
              >
            </div>
          </div>
        </div>
      </Col>
      <Col :span="6">
        <div
          class="designItem"
          :style="{ backgroundImage: 'url(/images_gray/theme_gray.jpg)' }"
        >
          <div
            style="
              text-indent: 1em;
              position: absolute;
              width: 100%;
              height: 30px;
              bottom: 0px;
              background-color: rgba(24, 31, 45, 0.84);
              font-size: 14px;
            "
          >
            科技主题<Icon
              v-if="this.$store.state.theme == 'theme_gray'"
              color="green"
              size="30"
              type="md-checkmark"
            />
          </div>
          <div class="editMask">
            <div style="text-align: center; line-height: 140px">
              <Button
                type="success"
                shape="circle"
                icon="ios-create-outline"
                @click="toDesign('theme_gray')"
                >设 计</Button
              >
            </div>
            <div style="text-align: center; line-height: 40px">
              <Button
                type="info"
                shape="circle"
                icon="ios-checkmark-circle-outline"
                @click="chooseTheme('theme_gray')"
                >使 用</Button
              >
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import Sever from "@/api/selfApi";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initGlobalTheme();
  },
  methods: {
    toDesign(item) {
      let data = new Date();
      let now = data.getTime();
      if (item == "theme_gray") {
        window.open("/#/homeGray?theme=" + item + "&id=" + now);
      } else {
        window.open("/#/home?theme=" + item + "&id=" + now);
      }
    },
    async chooseTheme(item) {
      await Sever.smz
        .saveTheme({ theme: item })
        .then((res) => {
          if (res.code == 1) {
            this.$Message.success("使用主题成功");
            this.$store.dispatch("changeTheme", item);
          } else {
            this.$Message.error("使用主题失败");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async initGlobalTheme() {
      this.$store.dispatch("getTheme");
    },
  },
};
</script>
<style scoped>
.editMask {
  width: 100%;
  height: 100%;
  position: absolute;
  display: none;
  background-color: rgba(0, 0, 0, 0.6);
}
.designItem {
  height: 240px;
  position: relative;
  background-color: #2b3340;
  color: #eee;
  line-height: 30px;
  background-size: 100% 100%;
}
.designItem:hover .editMask {
  display: block;
}
</style>
