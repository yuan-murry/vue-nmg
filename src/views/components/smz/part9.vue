<template>
  <div class="lineback">
    <select-part :MenuText="MenuText" :partName="partName" />
    <establishment-of-the-subsystem></establishment-of-the-subsystem>
  </div>
</template>
<script>
import establishmentOfTheSubsystem from "@/views/components/smz/establishmentOfTheSubsystem.vue";
import selectPart from "@/views/components/selectPart.vue";
export default {
  props: {
    partName: String,
  },
  components: {
    establishmentOfTheSubsystem,
    selectPart,
  },
  data() {
    return { MenuText: "年度业务办理量" };
  },
  methods: {},
};
</script>
