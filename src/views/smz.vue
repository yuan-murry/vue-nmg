<template>
  <div class="visual">
    <div class="visual_left">
      <div class="visual_box">
        <component
          :is="this.$store.state.menus_blue.part1"
          :partName="partName1"
        ></component>
        <!-- <part-1 @changePart="changePart" /> -->
      </div>
      <div class="visual_box">
        <!-- <part-2 /> -->
        <component
          :is="this.$store.state.menus_blue.part2"
          :partName="partName2"
        ></component>
      </div>
      <div class="visual_box">
        <!-- <part-3 /> -->
        <component
          :is="this.$store.state.menus_blue.part3"
          :partName="partName3"
        ></component>
      </div>
    </div>
    <div class="visual_con">
      <div class="visual_conBot">
        <img class="visual_conBot_l" src="/images/ksh42.png" />
        <img class="visual_conBot_2" src="/images/ksh43.png" />
        <img class="visual_conBot_3" src="/images/ksh44.png" />
        <img class="visual_conBot_4" src="/images/ksh45.png" />
        <div class="visual_conTop">
          <part-4 />
          <div class="clear"></div>
          <part-5 @changeDepCode="refreshEcharts" />
        </div>
      </div>
    </div>
    <div class="visual_right">
      <div class="visual_box">
        <!-- <part-6 /> -->
        <component
          :is="this.$store.state.menus_blue.part6"
          :partName="partName6"
        ></component>
      </div>
      <div class="visual_box visualSfzsfl">
        <!-- <part-7 /> -->
        <component
          :is="this.$store.state.menus_blue.part7"
          :partName="partName7"
        ></component>
      </div>

      <div class="visual_box">
        <!-- <part-8 /> -->
        <component
          :is="this.$store.state.menus_blue.part8"
          :partName="partName8"
        ></component>
      </div>
    </div>
  </div>
</template>
<script>
import part1 from "@/views/components/smz/part1.vue";
import part2 from "@/views/components/smz/part2.vue";
import part3 from "@/views/components/smz/part3.vue";
import part4 from "@/views/components/smz/part4.vue";
import part5 from "@/views/components/smz/part5.vue";
import part6 from "@/views/components/smz/part6.vue";
import part7 from "@/views/components/smz/part7.vue";
import part8 from "@/views/components/smz/part8.vue";
import part9 from "@/views/components/smz/part9.vue";
import part10 from "@/views/components/smz/part10.vue";
import part11 from "@/views/components/smz/part11.vue";
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
    part9,
    part10,
    part11,
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
<style scoped src="@/assets/css/skin_blue.css"></style>
