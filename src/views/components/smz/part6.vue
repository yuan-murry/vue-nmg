<template>
  <div class="lineback">
    <select-part :MenuText="MenuText" :partName="partName" />
    <politics></politics>
  </div>
</template>
<script>
import Politics from "@/views/components/smz/Politics.vue";
import selectPart from "@/views/components/selectPart.vue";
export default {
  props: {
    partName: String,
  },
  components: {
    Politics,
    selectPart,
  },
  data() {
    return { MenuText: "政法编制" };
  },
  methods: {},
};
</script>
<style scoped src="@/assets/css/skin_blue.css"></style>