<template>
  <div class="lineback">
    <select-part :MenuText="MenuText" :partName="partName" />
    <business-management-information></business-management-information>
  </div>
</template>
<script>
import businessManagementInformation from "@/views/components/smz/businessManagementInformation.vue";
import selectPart from "@/views/components/selectPart.vue";
export default {
  props: {
    partName: String,
  },
  components: {
    businessManagementInformation,
    selectPart,
  },
  data() {
    return { MenuText: "业务办理详情" };
  },
  methods: {},
};
</script>
