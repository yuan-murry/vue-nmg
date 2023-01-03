<template>
  <div class="visual_conTop">
    <div class="map_m">
      <div class="incon">
        <p>
          <span class="breathe-gr"> </span>常住人口：<span class="f33"
            >365 </span
          >万
        </p>
        <p>
          <span class="breathe-p"> </span>地区面积：<span class="f33"
            >1234</span
          >
          平方公里
        </p>
        <p>
          <span class="breathe-yc"> </span>地区GDP：<span class="f33"
            >3456</span
          >
          亿元
        </p>
        <p>
          <span class="breathe-ye"> </span>财政收入：<span class="f33"
            >1234</span
          >
          亿元
        </p>
      </div>
      <div class="dmapcon">
        <map-gray v-on="$listeners" />
      </div>
      <div
        style="position: absolute; height: 100%; width: 100%; top: 0; left: 0"
      >
        <div class="animate wave">
          <img
            id="q1"
            src="/images_gray/q1.png"
            style="position: absolute; top: 360px; left: 395px"
          />
          <img
            id="q2"
            src="/images_gray/q2.png"
            style="position: absolute; top: 345px; left: 325px"
          />
          <img
            id="q3"
            src="/images_gray/q3.png"
            style="position: absolute; top: 333px; left: 255px"
          />
          <img
            id="q4"
            src="/images_gray/q4.png"
            style="position: absolute; top: 320px; left: 185px"
          />
          <img
            id="q5"
            src="/images_gray/q5.png"
            style="position: absolute; top: 306px; left: 90px"
          />
          <img
            id="q6"
            src="/images_gray/q6.png"
            style="position: absolute; top: 275px; left: -39px"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mapGray from "@/views/components/smzGray/map.vue";
export default {
  components: {
    mapGray,
  },
};
</script>
<style scoped src="@/assets/css/skin_gray.css"></style>