<template>
  <div class="visual_conBot">
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
  components: { selectPart },
  data() {
    return { MenuText: "累计办理业务笔数" };
  },
};
</script>
<style scoped src="@/assets/css/skin_gray.css"></style>