<template>
  <!-- 数字翻牌效果 -->
  <div class="condig">
    <div class="digital">
      <div class="dline"></div>
      <div v-for="(item, index) in bList" :key="index" class="nitem">
        <!--底下那层-->
        <div class="under">{{ item }}</div>
        <!--上面会翻动的那层-->
        <div :class="'on animate animate' + [index]">
          <!--只需要下面那一半-->
          <div class="nbottom">{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bNumber: 98765432,
      bList: [],
    };
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      this.bList = this.bNumber.toString().split("");
    },
  },
};
</script>