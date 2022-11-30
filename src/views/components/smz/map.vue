<template>
  <div class="map" id="map">
    <v-chart
      autoresize
      class="map"
      :loading="loadflag"
      :loading-options="flightLoadingOptions"
      :option="option"
      @click="handleClick"
    />
  </div>
</template>
<script>
import Sever from "@/api/selfApi";
import * as echarts from "echarts";
import { use, registerMap } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import nmgmapJson from "@/assets/json/nmgJson.js";
import { MapChart, ScatterChart, EffectScatterChart } from "echarts/charts";
import {
  GeoComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent,
  ToolboxComponent,
  DataZoomComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  MapChart,
  ScatterChart,
  EffectScatterChart,
  GeoComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent,
  ToolboxComponent,
  DataZoomComponent,
]);
registerMap("nmg", nmgmapJson[150000]);
export default {
  components: {
    VChart,
  },
  data() {
    return {
      point1: require("@/assets/images/map/point1.png"),
      point2: require("@/assets/images/map/point2.png"),
      point3: require("@/assets/images/map/point3.png"),
      titlepng: require("@/assets/images/map/title.png"),
      option: null,
      loadflag: false,
      selectArr: [],
      flightLoadingOptions: {
        text: "统计中，请稍候...",
        maskColor: "#00000000",
        color: "#c23531",
        textColor: "rgba(255, 255, 255, 0.5)",
        zlevel: 0,
      },
    };
  },
  mounted() {
    this.loadflag = true;
    this.setChart();
  },
  methods: {
    handleClick(event) {
      //点击地图
      if (event.seriesType === "map") {
        if (this.selectArr.length == 0) {
          this.selectArr[0] = event.data.depcode;
          this.option.title[0].text = event.data.name;
          this.$emit("changeDepCode", event.data.depcode);
        } else {
          if (this.selectArr[0] == event.data.depcode) {
            this.selectArr = [];
            this.option.title[0].text = "内蒙古自治区";
            this.$emit("changeDepCode", "150000");
          } else {
            this.selectArr[0] = event.data.depcode;
            this.option.title[0].text = event.data.name;
            this.$emit("changeDepCode", event.data.depcode);
          }
        }
        this.getContentByCode();
      }
    },
    async getContentByCode() {
      try {
        //请求后台接口
        const res = await Sever.smz.getTest({
          //请求参数
          dep_code: "45000",
        });
        if (res) {
          console.log("请求成功22了。。。。。", res);
          this.option.title[1].subtext =
            `{line_one|常驻人口：` +
            Math.ceil(Math.random() * 10000) +
            `万}\n\n\n{line_two|地区面积：` +
            Math.ceil(Math.random() * 10000) +
            `平方公里}\n\n\n{line_three|地区GDP：` +
            Math.ceil(Math.random() * 10000) +
            `亿元}\n\n\n{line_one|财政收入：` +
            Math.ceil(Math.random() * 10000) +
            `亿元}`;
        }
      } catch (error) {
        console.log(error);
      }
    },
    setChart() {
      var mapDate = [
        {
          name: "呼伦贝尔市",
          value: [120.8057, 50.2185],
          datas: 1354,
          depcode: "150100",
          img: "image://" + this.point1,
        },
        {
          name: "阿拉善盟",
          value: [102.019, 40.1001],
          datas: 1402,
          depcode: "152900",
          img: "image://" + this.point2,
        },
        {
          name: "锡林郭勒盟",
          value: [115.6421, 44.176],
          datas: 2468,
          depcode: "152500",
          img: "image://" + this.point2,
        },
        {
          name: "鄂尔多斯市",
          value: [108.9734, 39.2487],
          datas: 768,
          depcode: "150600",
          img: "image://" + this.point1,
        },
        {
          name: "赤峰市",
          value: [118.6743, 43.2642],
          datas: 589,
          depcode: "150400",
          img: "image://" + this.point3,
        },
        {
          name: "巴彦淖尔市",
          value: [107.5562, 41.3196],
          datas: 1500,
          depcode: "152800",
          img: "image://" + this.point3,
        },
      ];

      var domImg = document.createElement("img");
      domImg.id = "map_normalc";
      domImg.style.height =
        domImg.height =
        domImg.width =
        domImg.style.width =
          "8px";
      domImg.src = `/map/map_blue.png`;
      document.body.append(domImg);
      var domImgHover = document.createElement("img");
      domImgHover.id = "map_deepc";
      domImgHover.style.height =
        domImgHover.height =
        domImgHover.width =
        domImgHover.style.width =
          "8px";
      domImgHover.src = `/map/map_blue_deep.png`;
      document.body.append(domImgHover);

      let option = {
        title: [
          {
            top: 20,
            text: "内蒙古自治区",
            // subtext: "我叫小聪仔",
            x: "center",
            textStyle: {
              color: "#fff",
              fontWeight: "bolder",
              fontSize: 25,
            },
          },
          {
            top: 100,
            subtext: `{line_one|常驻人口：365万}\n\n\n{line_two|地区面积：1234平方公里}\n\n\n{line_three|地区GDP：3456亿元}\n\n\n{line_one|财政收入：1234亿元}`,
            x: "left",
            subtextStyle: {
              rich: {
                line_one: {
                  padding: [0, 30],
                  color: "#66ffff",
                  textShadowColor: "#030615",
                  textShadowBlur: "0",
                  textShadowOffsetX: 1,
                  textShadowOffsetY: 1,
                  fontSize: 16,
                  fontWeight: "bolder",
                },
                line_two: {
                  padding: [0, 30],
                  color: "#13ce4c",
                  textShadowColor: "#030615",
                  textShadowBlur: "0",
                  textShadowOffsetX: 1,
                  textShadowOffsetY: 1,
                  fontSize: 16,
                  fontWeight: "bolder",
                },
                line_three: {
                  padding: [0, 30],
                  color: "#FF0",
                  textShadowColor: "#030615",
                  textShadowBlur: "0",
                  textShadowOffsetX: 1,
                  textShadowOffsetY: 1,
                  fontSize: 16,
                  fontWeight: "bolder",
                },
              },
            },
          },
        ],
        geo: {
          map: "nmg",
          center: [112.5977, 46.3408],
          aspectScale: 0.75,
          layoutCenter: ["53.5%", "56%"],
          layoutSize: "91%",
          silent: true,
          zoom: 1.22,
          roam: false,
          z: 0,
          itemStyle: {
            normal: {
              areaColor: "rgba(0, 15, 40, 0.5)",
              shadowColor: "rgba(0, 0, 0, 1)",
              shadowBlur: 0,
              shadowOffsetX: 0,
              shadowOffsetY: 5,
              borderColor: "rgba(0, 0, 0, 0.7)",
              borderWidth: 0.5,
            },
            emphasis: {
              areaColor: "#2AB8FF",
              borderWidth: 1,
              color: "green",
              label: {
                show: false,
              },
            },
          },
        },
        series: [
          {
            type: "map",
            label: {
              normal: {
                show: false,
                textStyle: {
                  color: "#fff",
                },
              },
              emphasis: {
                textStyle: {
                  color: "#fff",
                },
              },
            },
            itemStyle: {
              normal: {
                borderColor: "#2ab8ff",
                borderWidth: 1,
                areaColor: {
                  image: domImg,
                  repeat: "repeat",
                },
                shadowColor: "rgba(0, 0, 0, 0.5)",
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowOffsetY: 1,
              },
              emphasis: {
                areaColor: {
                  image: domImgHover,
                  repeat: "repeat",
                },
                borderColor: "#2ab8ff",
                borderWidth: 1,
                shadowColor: "rgba(0, 255, 255, 0.7)",
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 1,
                label: {
                  show: false,
                },
              },
            },
            center: [112.5977, 46.3408],
            layoutCenter: ["53.5%", "56%"],
            layoutSize: "91%",
            aspectScale: 0.75,
            zoom: 1.2,
            roam: false,
            map: "nmg",
            data: mapDate,
          },
          {
            tooltip: {
              show: false,
            },
            type: "effectScatter",
            coordinateSystem: "geo",
            rippleEffect: {
              scale: 10,
              brushType: "stroke",
            },
            showEffectOn: "render",
            itemStyle: {
              normal: {
                shadowColor: "#0ff",
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                color: function (params) {
                  var colorList = [
                    new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                      {
                        offset: 0,
                        color: "#64fbc5",
                      },
                      {
                        offset: 1,
                        color: "#018ace",
                      },
                    ]),
                    new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                      {
                        offset: 0,
                        color: "#64fbc5",
                      },
                      {
                        offset: 1,
                        color: "#018ace",
                      },
                    ]),
                    new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                      {
                        offset: 0,
                        color: "#168e6d",
                      },
                      {
                        offset: 1,
                        color: "#c78d7b",
                      },
                    ]),
                    new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                      {
                        offset: 0,
                        color: "#61c0f1",
                      },
                      {
                        offset: 1,
                        color: "#6f2eb6",
                      },
                    ]),
                    new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                      {
                        offset: 0,
                        color: "#168e6d",
                      },
                      {
                        offset: 1,
                        color: "#c78d7b",
                      },
                    ]),
                    new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                      {
                        offset: 0,
                        color: "#61c0f1",
                      },
                      {
                        offset: 1,
                        color: "#6f2eb6",
                      },
                    ]),
                  ];
                  return colorList[params.dataIndex];
                },
              },
            },
            label: {
              normal: {
                color: "#fff",
              },
            },
            symbol: "circle",
            symbolSize: [10, 5],
            data: mapDate,
            zlevel: 1,
          },
          {
            type: "scatter",
            coordinateSystem: "geo",
            itemStyle: {
              color: "#f00",
            },
            symbol: function (value, params) {
              return params.data.img;
            },
            symbolSize: [32, 41],
            symbolOffset: [0, -20],
            z: 9999,
            data: mapDate,
          },
          {
            type: "scatter",
            coordinateSystem: "geo",
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  var name = params.name;
                  var value = params.data.datas;
                  var text = `{fline|${value}}\n{tline|${name}}`;
                  return text;
                },
                color: "#fff",
                rich: {
                  fline: {
                    padding: [0, 25],
                    color: "#fff",
                    textShadowColor: "#030615",
                    textShadowBlur: "0",
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1,
                    fontSize: 14,
                    fontWeight: 400,
                  },
                  tline: {
                    padding: [0, 27],
                    color: "#ABF8FF",
                    fontSize: 12,
                  },
                },
              },
              emphasis: {
                show: true,
              },
            },
            itemStyle: {
              color: "#00FFF6",
            },
            symbol: "image://" + this.titlepng,
            symbolSize: [100, 50],
            symbolOffset: [0, -60],
            z: 999,
            data: mapDate,
          },
        ],
      };
      this.loadflag = false;
      this.option = option;
      // myChart.setOption(option);
    },
  },
  // watch: {
  //   "$store.state.theme"(newVal) {
  //     //对数据执行操作
  //     document.getElementById("map_normalc").src = `/map/map_${newVal}.png`;
  //     document.getElementById("map_deepc").src = `/map/map_${newVal}_deep.png`;
  //     if (newVal == "red") {
  //       this.option.series[0].itemStyle.normal.borderColor = "red";
  //       this.option.series[0].itemStyle.emphasis.borderColor = "red";
  //     } else if (newVal == "blue") {
  //       this.option.series[0].itemStyle.normal.borderColor = "#2ab8ff";
  //       this.option.series[0].itemStyle.emphasis.borderColor = "#2ab8ff";
  //     }
  //   },
  // },
};
</script>
<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>