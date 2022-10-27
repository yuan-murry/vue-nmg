<template>
  <div class="myChart">
    <v-chart
      autoresize
      class="chart"
      :loading="loadflag"
      :loading-options="flightLoadingOptions"
      :manual-update="false"
      :option="option"
    />
  </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  components: {
    VChart,
  },
  data() {
    return {
      flightLoadingOptions: {
        text: "",
        color: "#c23531",
        textColor: "rgba(255, 255, 255, 0.5)",
        maskColor: "#003",
        zlevel: 0,
      },
      loadflag: false,
      option: null,
    };
  },
  mounted() {
    this.setChart();
  },
  methods: {
    setChart() {
      var legendData = ["编制数"]; //图例
      var indicator = [
        {
          text: "公安",
          max: 6000,
        },
        {
          text: "检察院",
          max: 5000,
        },
        {
          text: "法院",
          max: 5000,
        },
        {
          text: "司法",
          max: 5000,
          //  axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}
        },
        {
          text: "安全",
          max: 5000,
        },
      ];
      var dataArr = [
        {
          value: [4300, 4700, 3600, 3900, 3800],
          name: legendData[0],
          itemStyle: {
            normal: {
              lineStyle: {
                color: "#4A99FF",
                // shadowColor: '#4A99FF',
                // shadowBlur: 10,
              },
              shadowColor: "#4A99FF",
              shadowBlur: 10,
            },
          },
          areaStyle: {
            normal: {
              // 单项区域填充样式
              color: {
                type: "linear",
                x: 0, //右
                y: 0, //下
                x2: 1, //左
                y2: 1, //上
                colorStops: [
                  {
                    offset: 0,
                    color: "#4A99FF",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(0,0,0,0)",
                  },
                  {
                    offset: 1,
                    color: "#4A99FF",
                  },
                ],
                globalCoord: false,
              },
              opacity: 1, // 区域透明度
            },
          },
        },
      ];
      var colorArr = ["#4A99FF", "#4BFFFC"]; //颜色
      const option = {
        color: colorArr,
        tooltip: {
          confine: true,
        },
        legend: {
          orient: "vertical",
          icon: "circle", //图例形状
          data: legendData,
          bottom: 35,
          right: 40,
          itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
          itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
          itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
          textStyle: {
            fontSize: 12,
            color: "#00E4FF",
          },
        },
        radar: {
          // shape: 'circle',
          center: ["50%", "56%"],
          radius: 88,
          name: {
            textStyle: {
              color: "#fff",
              fontSize: 12,
            },
          },
          indicator: indicator,
          splitArea: {
            // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: {
              // 分隔区域的样式设置。
              color: ["rgba(255,255,255,0)", "rgba(255,255,255,0)"], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            },
          },
          axisLine: {
            //指向外圈文本的分隔线样式
            lineStyle: {
              color: "#153269",
            },
          },
          splitLine: {
            lineStyle: {
              color: "#113865", // 分隔线颜色
              width: 2, // 分隔线线宽
            },
          },
        },
        series: [
          {
            type: "radar",
            symbolSize: 5,
            // symbol: 'angle',
            data: dataArr,
          },
        ],
      };
      this.option = option;
    },
  },
};
</script>

<style scoped>
.myChart {
  height: calc(100% - 45px);
}
</style>