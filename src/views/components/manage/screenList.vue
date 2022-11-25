<template>
  <div class="app-container">
    <Row :gutter="24">
      <Col :span="6">
        <div
          class="designItem"
          :style="{ backgroundImage: 'url(/images/theme_blue.jpg)' }"
        >
          <div
            style="
              text-indent: 1em;
              position: absolute;
              width: 100%;
              height: 30px;
              bottom: 0px;
              background-color: rgba(24, 31, 45, 0.84);
              font-size: 14px;
            "
          >
            蓝色主题<Icon color="green" size="30" type="md-checkmark" />
          </div>
          <div class="editMask">
            <div style="text-align: center; line-height: 140px">
              <Button
                type="success"
                shape="circle"
                icon="ios-create-outline"
                @click="toDesign('item')"
                >设 计</Button
              >
            </div>
            <div style="text-align: center; line-height: 40px">
              <Button
                type="info"
                shape="circle"
                icon="ios-checkmark-circle-outline"
                @click="chooseTheme('item')"
                >应 用</Button
              >
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toDesign(item) {
      console.log(item);
      let data = new Date();
      let now = data.getTime();
      window.open("/#/home?id=" + now);
    },
    chooseTheme(item) {
      console.log(item);
      this.$Message.info("应用主题成功");
    },
  },
};
</script>
<style scoped>
.editMask {
  width: 100%;
  height: 100%;
  position: absolute;
  display: none;
  background-color: rgba(0, 0, 0, 0.6);
}
.designItem {
  height: 240px;
  position: relative;
  background-color: #2b3340;
  color: #eee;
  line-height: 30px;
  background-size: 100% 100%;
}
.designItem:hover .editMask {
  display: block;
}
</style>
