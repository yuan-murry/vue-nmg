<template>
  <div class="lineback">
    <div class="visual_title">
      <span>年度业务办理量</span>
    </div>
    <annual-business-volume></annual-business-volume>
  </div>
</template>
<script>
import AnnualBusinessVolume from "@/views/components/smz/AnnualBusinessVolume.vue";
export default {
  components: {
    AnnualBusinessVolume,
  },
};
</script>