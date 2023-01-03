<template>
  <div class="visual_box">
    <div class="xwsxOne"></div>
    <div class="xwsxTwo"></div>
    <select-part :MenuText="MenuText" :partName="partName" />
    <div class="lineback">
      <digitalFlop />
    </div>
  </div>
</template>
<script>
import digitalFlop from "@/views/components/smz/digitalFlop.vue";
import selectPart from "@/views/components/selectGrayPart.vue";
export default {
  props: {
    partName: String,
  },
  components: {
    digitalFlop,
    selectPart,
  },
  data() {
    return { MenuText: "累计办理业务笔数" };
  },
  methods: {},
};
</script>
<style scoped src="@/assets/css/skin_gray.css"></style>



