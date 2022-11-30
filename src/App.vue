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
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeFn);
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
