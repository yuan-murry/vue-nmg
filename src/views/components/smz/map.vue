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
          this.option.title[1].subtext = `{line_one|常驻人口：`+Math.ceil(Math.random()*10000)+`万}\n\n\n{line_two|地区面积：`+Math.ceil(Math.random()*10000)+`平方公里}\n\n\n{line_three|地区GDP：`+Math.ceil(Math.random()*10000)+`亿元}\n\n\n{line_one|财政收入：`+Math.ceil(Math.random()*10000)+`亿元}`;
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
      domImg.style.height =
        domImg.height =
        domImg.width =
        domImg.style.width =
          "8px";
      domImg.src =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAIAAAAmKNuZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE4MTE0OTgyQTdDQzExRUI4Q0RBRkMwQkFGMTY2NDhEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE4MTE0OTgzQTdDQzExRUI4Q0RBRkMwQkFGMTY2NDhEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTgxMTQ5ODBBN0NDMTFFQjhDREFGQzBCQUYxNjY0OEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTgxMTQ5ODFBN0NDMTFFQjhDREFGQzBCQUYxNjY0OEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4v4trwAAAAVklEQVR42mL0D225cu0hAzWAjpY8C9CsL19/wIV4uDnI5gKNYmKgKhjcxrFAggBZiBIuyDhqRQWQOxoVo1ExGhWjUTEaFYMiKoB1LVq1TXZUAI0CCDAAcAlaxCt7dtQAAAAASUVORK5CYII=";
      document.body.append(domImg);
      var domImgHover = document.createElement("img");
      domImgHover.style.height =
        domImgHover.height =
        domImgHover.width =
        domImgHover.style.width =
          "8px";
      domImgHover.src =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAIAAAAmKNuZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFDQ0Q2RjYyQTdDRDExRUI4ODUxRDIxRjkzMEExNzg2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFDQ0Q2RjYzQTdDRDExRUI4ODUxRDIxRjkzMEExNzg2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUNDRDZGNjBBN0NEMTFFQjg4NTFEMjFGOTMwQTE3ODYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUNDRDZGNjFBN0NEMTFFQjg4NTFEMjFGOTMwQTE3ODYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6FboimAAAASklEQVR42mIUnL9XtHsDAzXA69IARjWtXJYX7+FCfyQEKeEyMVAVDG7jWCB+RhaihAsybjQqRqNiNCpGo2I0KoZZVDBSt9oGCDAAhYNrvRu3DWEAAAAASUVORK5CYII=";
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
          layoutCenter: ["53.5%", "54%"],
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
            layoutCenter: ["53.5%", "54%"],
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
};
</script>
<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>