<template>
  <div class="visual_box">
    <select-part :MenuText="MenuText" :partName="partName" />
    <div class="lineback">
      <div></div>
    </div>
  </div>
</template>
<script>
import selectPart from "@/views/components/selectGrayPart.vue";
export default {
  props: {
    partName: String,
  },
  components: {
    selectPart,
  },
  data() {
    return { MenuText: "近5年退休人员预测" };
  },
  methods: {},
};
</script>
<style scoped src="@/assets/css/skin_gray.css"></style>