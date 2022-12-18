<template>
  <div class="visual_box">
    <select-part :MenuText="MenuText" :partName="partName" />
    <div class="lineback">
      <div class="political">
        <div></div>
      </div>
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
    return { MenuText: "政法编制" };
  },
  methods: {},
};
</script>
<style scoped src="@/assets/css/skin_gray.css"></style>