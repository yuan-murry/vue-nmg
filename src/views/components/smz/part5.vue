<template>
  <div class="map_m">
   
    <Map v-on="$listeners" />
  </div>
</template>
<script>
import Map from "@/views/components/smz/map.vue";
export default {
  components: {
    Map,
  },
};
</script>
<style scoped src="@/assets/css/skin_blue.css"></style>