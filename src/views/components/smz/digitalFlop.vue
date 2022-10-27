<template>
  <div class="number">
    <ul id="dataNums">
      <li v-for="(item, index) in list" :key="index">
        <div class="dataBoc">
          <div
            class="tt"
            :style="{
              transition: 'all 2.5s ease-in-out 0s',
              top: '-' + item.top + 'px',
            }"
          >
            <span v-for="(item2, index2) in numList" :key="index2"
              >{{ item2 }}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: { number: Number },
  data() {
    return {
      list: [],
      numList: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        ".",
      ],
    };
  },
  watch: {
    number: {
      handler() {
        this.scroll();
      },
    },
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      this.list = this.number.toString().split("");
      let arr = [];
      this.list.forEach((value) => {
        arr.push({ num: value, top: 0 });
      });
      this.list = arr;
      let Hei = parseFloat(
        getComputedStyle(document.getElementById("dataNums")).height
      )-2;
      this.list.forEach((value, index) => {
        setTimeout(() => {
          value.top = parseFloat(value.num * Hei + Hei * 10);
        }, index * 300);
      });
    },
  },
};
</script>
<style lang="less">
.number {
  // margin-top: 12%;
  text-align: center;
  position: relative;
  width: 99%;
  height: calc(100% - 45px);
  ul {
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 70px;
    background: -webkit-linear-gradient(
      #4280c0,
      #102450
    ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#4280c0, #102450); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#4280c0, #102450); /* Firefox 3.6 - 15 */
    li {
      float: left;
      width: 52px;
      height: 70px;
      text-align: center;
      margin: 0 2px;
      background: -webkit-linear-gradient(
        #102450,
        #4280c0,
        #0e214c
      ); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(
        #102450,
        #4280c0,
        #0e214c
      ); /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(
        #102450,
        #4280c0,
        #0e214c
      ); /* Firefox 3.6 - 15 */
      background: linear-gradient(#102450, #4280c0, #0e214c); /* 标准的语法 */
      border-radius: 3px;
      border: 1px solid #6fbfff;
      // background: url("../assets/images/yuyueshf/number.png") no-repeat center; //背景图
      background-size: 100% 100%;
      .dataBoc {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        .tt {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          span {
            width: 100%;
            height: 100%;
            line-height: 70px;
            float: left;
            text-align: center;
            font-size: 26px;
            color: #66ffff;
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>
