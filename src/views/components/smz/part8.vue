<template>
  <div class="lineback">
    <select-part :MenuText="MenuText" :partName="partName" />
    <forecast-of-retirement></forecast-of-retirement>
  </div>
</template>
<script>
import ForecastOfRetirement from "@/views/components/smz/ForecastOfRetirement.vue";
import selectPart from "@/views/components/selectPart.vue";
export default {
  props: {
    partName: String,
  },
  components: {
    ForecastOfRetirement,
    selectPart,
  },
  data() {
    return { MenuText: "近5年退休人员预测" };
  },
  methods: {},
};
</script>
<style scoped src="@/assets/css/skin_blue.css"></style>