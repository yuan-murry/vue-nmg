<template>
  <div class="visual_box">
    <select-part :MenuText="MenuText" :partName="partName" />
    <div class="lineback">
      <div class="fhy">
        <!-- <img class="fhytopl" src="images/u3530.svg">
            <img class="fhytop2" src="images/u3530.svg"> -->
        <div class="antm"><img class="rotas" src="/images_gray/edu.png" /></div>
        <p>教育</p>
        <h3><span class="f32">12345</span>个</h3>
      </div>
      <div class="fhy">
        <!-- <img class="fhytopl" src="images/u3530.svg">
            <img class="fhytop2" src="images/u3530.svg"> -->
        <div class="antm2">
          <img class="rotas" src="/images_gray/science.png" />
        </div>
        <p>科学研究</p>
        <h3><span class="f32">12345</span>个</h3>
      </div>
      <div class="fhy">
        <!-- <img class="fhytopl" src="images/u3530.svg">
            <img class="fhytop2" src="images/u3530.svg"> -->
        <div class="antm3">
          <img class="rotas" src="/images_gray/health.png" />
        </div>
        <p>医疗卫生</p>
        <h3><span class="f32">12345</span>个</h3>
      </div>
      <div class="fhy">
        <!-- <img class="fhytopl" src="images/u3530.svg">
            <img class="fhytop2" src="images/u3530.svg"> -->
        <div class="antm4">
          <img class="rotas" src="/images_gray/culture.png" />
        </div>
        <p>文化</p>
        <h3><span class="f32">12345</span>个</h3>
      </div>
    </div>
  </div>
</template>
<script>
import selectPart from "@/views/components/selectGrayPart.vue";
export default {
  components: {
    selectPart,
  },
  props: {
    partName: String,
  },
  data() {
    return { MenuText: "分行业事业编制及占比" };
  },
  methods: {},
};
</script>
<style scoped src="@/assets/css/skin_gray.css"></style>