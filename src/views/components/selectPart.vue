<template>
  <div class="visual_title">
    <Dropdown @on-click="changePart">
      <a href="javascript:void(0)" v-html="this.PartMenuText"> </a>
      <DropdownMenu slot="list">
        <DropdownItem name="part1" :selected="PartMenuText == '累计办理业务笔数'"
          >累计办理业务笔数</DropdownItem
        >
        <DropdownItem
          divided
          name="part2"
          :selected="PartMenuText == '编制人员信息'"
          >编制人员信息</DropdownItem
        >
        <DropdownItem
          divided
          name="part3"
          :selected="PartMenuText == '年度业务办理量'"
          >年度业务办理量</DropdownItem
        >
        <DropdownItem divided name="part6" :selected="PartMenuText == '政法编制'"
          >政法编制</DropdownItem
        >
        <DropdownItem
          divided
          name="part7"
          :selected="PartMenuText == '分行业事业编制及占比'"
          >分行业事业编制及占比</DropdownItem
        >
        <DropdownItem
          divided
          name="part8"
          :selected="PartMenuText == '近5年退休人员预测'"
          >近5年退休人员预测</DropdownItem
        >
        <DropdownItem
          divided
          name="part9"
          :selected="PartMenuText == '分系统编制情况'"
          >分系统编制情况</DropdownItem
        >
        <DropdownItem
          divided
          name="part10"
          :selected="PartMenuText == '问题类型分析'"
          >问题类型分析</DropdownItem
        >
        <DropdownItem
          divided
          name="part11"
          :selected="PartMenuText == '业务办理详情'"
          >业务办理详情</DropdownItem
        >
      </DropdownMenu>
    </Dropdown>
  </div>
</template>
<script>
import { Message } from "iview";
import Sever from "@/api/selfApi";
export default {
  props: {
    MenuText: String,
    partName: String,
  },
  data() {
    return { PartMenuText: this.MenuText };
  },
  methods: {
    changePart(val) {
      if (val == "part1") {
        this.PartMenuText = "累计办理业务笔数";
      } else if (val == "part2") {
        this.PartMenuText = "编制人员信息";
      } else if (val == "part3") {
        this.PartMenuText = "年度业务办理量";
      } else if (val == "part6") {
        this.PartMenuText = "政法编制";
      } else if (val == "part7") {
        this.PartMenuText = "分行业事业编制及占比";
      } else if (val == "part8") {
        this.PartMenuText = "近5年退休人员预测";
      } else if (val == "part9") {
        this.PartMenuText = "分系统编制情况";
      } else if (val == "part10") {
        this.PartMenuText = "问题类型分析";
      } else if (val == "part11") {
        this.PartMenuText = "业务办理详情";
      }
      //TODO 预留全局接口（配置菜单）后台保存选中菜单
      // this.$emit("changePart", val);
      let obj = {};
      obj[this.partName] = val;
      this.$store.dispatch("refreshMenu", obj);
      this.saveMenu();
    },
    async saveMenu() {
      await Sever.smz
        .saveMenu(this.$store.state.menus)
        .then((res) => {
          if (res == "success") {
            Message.info("保存成功");
          }
        })
        .catch((err) => {
          console.log(err);
          Message.info("保存失败");
        });
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