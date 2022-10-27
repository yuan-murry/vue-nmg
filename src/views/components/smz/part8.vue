<template>
  <div class="lineback">
    <div class="visual_title">
      <span>近5年退休人员预测</span>
    </div>
    <forecast-of-retirement></forecast-of-retirement>
  </div>
</template>
<script>
import ForecastOfRetirement from "@/views/components/smz/ForecastOfRetirement.vue";
export default {
  components: {
    ForecastOfRetirement,
  },
};
</script>