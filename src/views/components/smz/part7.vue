<template>
  <div class="lineback">
    <select-part :MenuText="MenuText" :partName="partName" />
    <div class="fhy">
      <img class="fhytopl" src="/images/u3530.svg" />
      <img class="fhytop2" src="/images/u3530.svg" />
      <div class="antm">
        <img class="rotas" src="/images/antm.png" />
        <p>45%</p>
      </div>
      <p>教育</p>
      <p><span class="f32">12345</span>个</p>
    </div>
    <div class="fhy">
      <img class="fhytopl" src="/images/u3530.svg" />
      <img class="fhytop2" src="/images/u3530.svg" />
      <div class="antm2">
        <img class="rotas" src="/images/antm.png" />
        <p>45%</p>
      </div>
      <p>科学研究</p>
      <p><span class="f32">12345</span>个</p>
    </div>
    <div class="fhy">
      <img class="fhytopl" src="/images/u3530.svg" />
      <img class="fhytop2" src="/images/u3530.svg" />
      <div class="antm3">
        <img class="rotas" src="/images/antm.png" />
        <p>45%</p>
      </div>
      <p>医疗卫生</p>
      <p style="margin-top: 0px"><span class="f32">12345</span>个</p>
    </div>
    <div class="fhy">
      <img class="fhytopl" src="/images/u3530.svg" />
      <img class="fhytop2" src="/images/u3530.svg" />
      <div class="antm4">
        <img class="rotas" src="/images/antm.png" />
        <p>45%</p>
      </div>
      <p>文化</p>
      <p style="margin-top: 0px"><span class="f32">12345</span>个</p>
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
    return { MenuText: "分行业事业编制及占比" };
  },
  methods: {},
};
</script>
