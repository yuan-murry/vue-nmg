<template>
  <div class="lineback">
    <select-part :MenuText="MenuText" :partName="partName" />
    <annual-business-volume></annual-business-volume>
  </div>
</template>
<script>
import AnnualBusinessVolume from "@/views/components/smz/AnnualBusinessVolume.vue";
import selectPart from "@/views/components/selectPart.vue";
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
<style scoped src="@/assets/css/skin_blue.css"></style>