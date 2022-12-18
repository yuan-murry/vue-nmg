<template>
  <div class="visual">
    <div class="visual_left">
      <component
        :is="this.$store.state.menus_blue.part1"
        :partName="partName1"
      ></component>
      <!-- <part-1 @changePart="changePart" /> -->
      <!-- <part-2 /> -->
      <component
        :is="this.$store.state.menus_blue.part2"
        :partName="partName2"
      ></component>
      <!-- <part-3 /> -->
      <component
        :is="this.$store.state.menus_blue.part3"
        :partName="partName3"
      ></component>
    </div>
    <div class="visual_con">
      <part-4 @changeDepCode="refreshEcharts" />
      <part-5 />
    </div>
    <div class="visual_right">
      <!-- <part-6 /> -->
      <component
        :is="this.$store.state.menus_blue.part6"
        :partName="partName6"
      ></component>
      <!-- <part-7 /> -->
      <component
        :is="this.$store.state.menus_blue.part7"
        :partName="partName7"
      ></component>
      <!-- <part-8 /> -->
      <component
        :is="this.$store.state.menus_blue.part8"
        :partName="partName8"
      ></component>
    </div>
  </div>
</template>
<script>
import part1 from "@/views/components/smzGray/part1.vue";
import part2 from "@/views/components/smzGray/part2.vue";
import part3 from "@/views/components/smzGray/part3.vue";
import part4 from "@/views/components/smzGray/part4.vue";
import part5 from "@/views/components/smzGray/part5.vue";
import part6 from "@/views/components/smzGray/part6.vue";
import part7 from "@/views/components/smzGray/part7.vue";
import part8 from "@/views/components/smzGray/part8.vue";
export default {
  components: {
    part1,
    part2,
    part3,
    part4,
    part5,
    part6,
    part7,
    part8,
  },
  data() {
    return {
      partName1: "part1",
      partName2: "part2",
      partName3: "part3",
      partName6: "part6",
      partName7: "part7",
      partName8: "part8",
    };
  },
  methods: {
    refreshEcharts(val) {
      console.log("地图改变了" + val);
    },
    changePart(val) {
      this.currentView = val;
    },
  },
};
</script>
<style scoped src="@/assets/css/skin_gray.css"></style>