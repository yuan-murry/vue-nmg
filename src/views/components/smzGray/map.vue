<template>
  <div id="map_gray" class="map_gray"></div>
</template>
<script>
import * as echarts from "echarts";
import $ from "jquery";
import nmgmap from "@/assets/images/map/nmg.svg";
export default {
  data() {
    return {
      textName: "内蒙古自治区",
      option: null,
      dataShow: {
        呼和浩特市: "150100",
        包头市: "150200",
        乌海市: "150300",
        赤峰市: "150400",
        通辽市: "150500",
        鄂尔多斯市: "150600",
        呼伦贝尔市: "150700",
        兴安盟: "152200",
        锡林郭勒盟: "152500",
        乌兰察布市: "152600",
        巴彦淖尔市: "152800",
        阿拉善盟: "152900",
      },
    };
  },
  mounted() {
    this.getmap();
  },
  methods: {
    getmap() {
      var chartDom = document.getElementById("map_gray");
      var myChart = echarts.init(chartDom);
      let _this = this;
      var option;
      //写到此处
      window.onresize = function () {
        myChart.resize();
      };
      $.get(nmgmap, function (svg) {
        // 首先向 echarts 注册 SVG 字符串或解析过的 SVG DOM
        echarts.registerMap("nmgmap", { svg: svg });
        option = {
          tooltip: {
            show: true,
            trigger: "item",
            backgroundColor: "rgba(166, 200, 76, 0.82)",
            borderColor: "#FFFFCC",
          },
          //   title: [
          //     {
          //       text: _this.textName,
          //       right: "30%",
          //       textStyle: {
          //         color: "#fff",
          //         fontWeight: "bolder",
          //         fontSize: 25,
          //       },
          //     },
          //   ],
          //   series: [
          //     {
          //       name: "nmgmap",
          //       type: "map",
          //       map: "nmgmap",
          //       roam: true,
          //       zoom: 1,
          //       emphasis: {
          //         label: {
          //           show: false,
          //         },
          //       },

          //       selectedMode: true,
          //       data: [{ name: "huhe", value: 15 }],
          //     },
          //   ],
          geo: {
            map: "nmgmap",
            itemStyle: {
              borderWidth: 0,
            },
            selectedMode: "single",

            // emphasis: {
            //   focus: "self",
            //   itemStyle: {
            //     color: null,
            //   },
            //   label: {
            //     position: "bottom",
            //     distance: 0,
            //     textBorderColor: "#fff",
            //     textBorderWidth: 2,
            //   },
            // },
            layoutSize: "100%", //布局尺寸
            layoutCenter: ["50%", "45%"], //布局位置
            zoom: 1.2,
            roam: true,
            label: {
              show: true,
              color: "#fff",
            },
            emphasis: {
              focus: "none",
              label: {
                show: true,
                color: "#fff",
              },
            },
            select: {
              label: { show: true },
            },
          },
        };
        myChart.setOption(option);

        myChart.on("geoselectchanged", (params) => {
          var selectedNames = params.allSelected[0].name;
          if (selectedNames.length > 0) {
            _this.$emit("changeDepCode", _this.dataShow[selectedNames[0]]);
            // _this.option.title[0].text = selectedNames[0];
            // myChart.setOption(_this.option);
          } else {
            //全省
            _this.$emit("changeDepCode", "150000");
            // _this.option.title[0].text = "内蒙古自治区";
            // myChart.setOption(_this.option);
          }
        });
        // myChart.on("click", function (event) {
        //   console.log(event);
        // });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.map_gray {
  width: 100%;
  height: 100%;
}
</style>