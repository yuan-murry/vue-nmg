<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      resizeFn: null,
    };
  },
  mounted() {
    this.initGlobalMenu();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeFn);
  },

  methods: {
    //加载全局菜单
    async initGlobalMenu() {
      this.$store.dispatch("getMenus");
      //`./css/theme_${type}.css`
      let link = document.createElement("link");
      link.type = "text/css";
      link.id = "theme";
      link.rel = "stylesheet";
      link.href = `/css/skin_blue.css`;
      document.getElementsByTagName("head")[0].appendChild(link);
      // let script = document.createElement("script");
      // script.type = "text/javascript";
      // script.src = "/js/bg_blue.js";
      // script.id = "theme_bg";
      // document.getElementsByTagName("body")[0].appendChild(script);
    },
  },
};
</script>

<style lang="less">
html,
html {
  font-size: 20px;
}

#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
