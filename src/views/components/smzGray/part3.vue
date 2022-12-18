<template>
  <div class="visual_box">
    <select-part :MenuText="MenuText" :partName="partName" />
    <div class="lineback">
      <annual-business-volume></annual-business-volume>
    </div>
  </div>
</template>
<script>
import AnnualBusinessVolume from "@/views/components/smz/AnnualBusinessVolume.vue";
import selectPart from "@/views/components/selectGrayPart.vue";
export default {
  props: {
    partName: String,
  },
  components: {
    AnnualBusinessVolume,
    selectPart,
  },
  data() {
    return { MenuText: "年度业务办理量" };
  },
  methods: {},
};
</script>
<style scoped src="@/assets/css/skin_gray.css"></style>