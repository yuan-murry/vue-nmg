<template>
  <div class="lineback">
    <select-part :MenuText="MenuText" :partName="partName" />
    <div class="visual_chart sfzcll">
      <div class="sfzcll_pos_box">
        <div class="sfzcll_smallBk">
          <div class="ygl">
            <div class="con">
              <h6>行政编制核定数</h6>
              <span>4347.2万</span>
            </div>
          </div>
        </div>
        <div class="sfzcll_smallBk">
          <div class="ygl">
            <div class="con">
              <h6>行政编制实有人数</h6>
              <span>4347.2万</span>
            </div>
          </div>
        </div>
        <div class="sfzcll_smallBk">
          <div class="ygl">
            <div class="con">
              <h6>事业编制核定数</h6>
              <span class="yellow">4347.2万</span>
            </div>
          </div>
        </div>

        <div class="sfzcll_smallBk">
          <div class="ygl">
            <div class="con">
              <h6>事业编制实有人数</h6>
              <span class="yellow">4347.2万</span>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>
<script>
import selectPart from "@/views/components/selectPart.vue";
export default {
  components: {
    selectPart,
  },
  props: {
    partName: String,
  },
  data() {
    return { MenuText: "编制人员信息" };
  },
  methods: {},
};
</script>
<style scoped src="@/assets/css/skin_blue.css"></style>