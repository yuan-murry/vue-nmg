<template>
  <div style="height: 100%">
    <div class="visual_left">
      <div class="visual_box">
        <component :is="currentView" @changePart="changePart"></component>
        <!-- <part-1 @changePart="changePart" /> -->
      </div>
      <div class="visual_box">
        <part-2 />
      </div>
      <div class="visual_box">
        <part-3 />
      </div>
    </div>
    <div class="visual_con">
      <div class="visual_conBot">
        <img class="visual_conBot_l" src="@/assets/images/ksh42.png" />
        <img class="visual_conBot_2" src="@/assets/images/ksh43.png" />
        <img class="visual_conBot_3" src="@/assets/images/ksh44.png" />
        <img class="visual_conBot_4" src="@/assets/images/ksh45.png" />
        <div class="visual_conTop">
          <part-4 />
          <div class="clear"></div>
          <part-5 @changeDepCode="refreshEcharts" />
        </div>
      </div>
    </div>
    <div class="visual_right">
      <div class="visual_box"><part-6 /></div>
      <div class="visual_box visualSfzsfl">
        <part-7 />
      </div>

      <div class="visual_box">
        <part-8 />
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
      currentView: "part1",
    };
  },
  mounted() {},
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
