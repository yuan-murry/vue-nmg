<template>
  <div class="visual_box">
    <div class="xwsxOne"></div>
    <div class="xwsxTwo"></div>
    <select-part :MenuText="MenuText" :partName="partName" />
    <div class="lineback">
      <problem-type-analysis />
    </div>
  </div>
</template>
<script>
import selectPart from "@/views/components/selectGrayPart.vue";
import problemTypeAnalysis from "@/views/components/smzGray/problemTypeAnalysis.vue";
export default {
  props: {
    partName: String,
  },
  components: { selectPart, problemTypeAnalysis },
  data() {
    return { MenuText: "问题类型分析" };
  },
};
</script>
<style scoped src="@/assets/css/skin_gray.css"></style>