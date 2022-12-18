<template>
  <div class="lineback">
    <select-part :MenuText="MenuText" :partName="partName" />
    <digitalFlop />
  </div>
</template>
<script>
import digitalFlop from "@/views/components/smz/digitalFlop.vue";
import selectPart from "@/views/components/selectPart.vue";
export default {
  props: {
    partName: String,
  },
  components: {
    digitalFlop,
    selectPart,
  },
  data() {
    return { MenuText: "累计办理业务笔数" };
  },
  methods: {},
};
</script>
<style scoped src="@/assets/css/skin_blue.css"></style>



