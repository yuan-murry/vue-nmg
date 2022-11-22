<template>
  <div id="app">
    <transition name="turn-on">
      <router-view />
    </transition>
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
    // this.delay();
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
    },
    delay() {
      var t;
      clearTimeout(t);
      t = setTimeout(function () {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "/js/bg_blue.js";
        document.getElementsByTagName("body")[0].appendChild(script);
      }, 4000);
    },
  },
};
</script>

<style lang="less">
body {
  width: 100%;
  height: 100%;
}
html {
  font-size: 20px;
  width: 100%;
  height: 100%;
}

#app {
  height: 100%;
  width: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.turn-on-enter {
  transform: translate3d(100%, 0, 0);
}
.turn-on-enter-active,
.turn-on-leave-active {
  transition: transform 1.5s ease;
}

</style>
