<template>
  <div class="lineback">
    <select-part :MenuText="MenuText" :partName="partName" />
    <problem-type-analysis></problem-type-analysis>
  </div>
</template>
<script>
import problemTypeAnalysis from "@/views/components/smz/problemTypeAnalysis.vue";
import selectPart from "@/views/components/selectPart.vue";
export default {
  props: {
    partName: String,
  },
  components: {
    problemTypeAnalysis,
    selectPart,
  },
  data() {
    return { MenuText: "问题类型分析" };
  },
  methods: {},
};
</script>
<style scoped src="@/assets/css/skin_blue.css"></style>