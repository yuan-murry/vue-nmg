<template>
  <div class="visual_box">
    <div class="xwsxOne"></div>
    <div class="xwsxTwo"></div>
    <select-part :MenuText="MenuText" :partName="partName" />
    <div class="lineback">
      <forecast-of-retirement />
    </div>
  </div>
</template>
<script>
import selectPart from "@/views/components/selectGrayPart.vue";
import ForecastOfRetirement from "@/views/components/smzGray/ForecastOfRetirement.vue";
export default {
  props: {
    partName: String,
  },
  components: {
    selectPart,
    ForecastOfRetirement,
  },
  data() {
    return { MenuText: "近5年退休人员预测" };
  },
  methods: {},
};
</script>
<style scoped src="@/assets/css/skin_gray.css"></style>