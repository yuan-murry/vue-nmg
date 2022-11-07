<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Sever from "@/api/selfApi";
export default {
  name: "App",
  data() {
    return {
      resizeFn: null,
    };
  },
  created() {
    this.initGlobalMenu();
  },
  mounted() {
    const documentWidth = document.body.offsetWidth;
    const ratio = documentWidth / 1920;
    if (documentWidth > 1920) {
      document.body.style.transform = `scale(${ratio}, ${ratio})`;
    }
    this.resizeFn = this.$debounce(function () {
      const documentWidth = document.body.offsetWidth;
      const ratio = documentWidth / 1920;
      if (documentWidth > 1920) {
        document.body.style.transform = `scale(${ratio}, ${ratio})`;
      }
    }, 200);
    window.addEventListener("resize", this.resizeFn);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeFn);
  },
  methods: {
    async initGlobalMenu() {
      console.log("初始化");
      try {
        //请求后台接口
        const res = await Sever.smz.getMenu({
          //请求参数
          dep_code: "45000",
        });
        if (res) {
          this.$store.dispatch("getMenus", {
            part1: "part1",
            part2: "part2",
            part3: "part3",
            part6: "part6",
            part7: "part7",
            part8: "part8",
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="less">
html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
html {
  font-size: 20px;
}
body {
  height: 100%;
  background: url("~@/assets/images/data08.png") no-repeat #061537;
  background-size: cover;
  position: relative;
  z-index: -2;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
