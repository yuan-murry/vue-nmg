<template>
  <div class="lineback">
    <div class="visual_title">
      <Dropdown @on-click="changePart">
        <a href="javascript:void(0)" v-html="this.MenuText">
          累计办理业务笔数
        </a>
        <DropdownMenu slot="list">
          <DropdownItem name="part1" :selected="MenuText == '累计办理业务笔数'"
            >累计办理业务笔数</DropdownItem
          >
          <DropdownItem
            divided
            name="part2"
            :selected="MenuText == '编制人员信息'"
            >编制人员信息</DropdownItem
          >
          <DropdownItem
            divided
            name="part3"
            :selected="MenuText == '年度业务办理量'"
            >年度业务办理量</DropdownItem
          >
          <DropdownItem divided name="part6" :selected="MenuText == '政法编制'"
            >政法编制</DropdownItem
          >
          <DropdownItem
            divided
            name="part7"
            :selected="MenuText == '分行业事业编制及占比'"
            >分行业事业编制及占比</DropdownItem
          >
          <DropdownItem
            divided
            name="part8"
            :selected="MenuText == '近5年退休人员预测'"
            >近5年退休人员预测</DropdownItem
          >
        </DropdownMenu>
      </Dropdown>
    </div>
    <politics></politics>
  </div>
</template>
<script>
import Politics from "@/views/components/smz/Politics.vue";
export default {
  props: {
    partName: String,
  },
  components: {
    Politics,
  },
  data() {
    return { MenuText: "政法编制" };
  },
  methods: {
    changePart(val) {
      if (val == "part1") {
        this.MenuText = "累计办理业务笔数";
      } else if (val == "part2") {
        this.MenuText = "编制人员信息";
      } else if (val == "part3") {
        this.MenuText = "年度业务办理量";
      } else if (val == "part6") {
        this.MenuText = "政法编制";
      } else if (val == "part7") {
        this.MenuText = "分行业事业编制及占比";
      } else if (val == "part8") {
        this.MenuText = "近5年退休人员预测";
      }
      //TODO 预留全局接口（配置菜单）后台保存选中菜单
      // this.$emit("changePart", val);
      let obj = {};
      obj[this.partName] = val;
      this.$store.dispatch("refreshMenu", obj);
    },
  },
};
</script>
<style scoped>
a {
  color: #fff;
  font-size: 18px;
}
</style>