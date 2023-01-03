<template>
  <div class="visual_box">
    <div class="xwsxOne"></div>
    <div class="xwsxTwo"></div>
    <select-part :MenuText="MenuText" :partName="partName" />
    <div class="lineback">
      <politics />
    </div>
  </div>
</template>
<script>
import selectPart from "@/views/components/selectGrayPart.vue";
import Politics from "@/views/components/smzGray/politics.vue";
export default {
  props: {
    partName: String,
  },
  components: {
    selectPart,
    Politics,
  },
  data() {
    return { MenuText: "政法编制" };
  },
  methods: {},
};
</script>
<style scoped src="@/assets/css/skin_gray.css"></style>