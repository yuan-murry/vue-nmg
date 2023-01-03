<template>
  <div class="myChart">
    <v-chart
      autoresize
      :loading="loadflag"
      :loading-options="flightLoadingOptions"
      :manual-update="false"
      theme="blue"
      :option="option"
    />
  </div>
</template>

<script>
import * as echarts from "echarts";
import Sever from "@/api/selfApi";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  BarChart,
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
        text: "正在加载，请稍候...",
        color: "#c23531",
        textColor: "rgba(255, 255, 255, 0.5)",
        maskColor: "#00000000",
        zlevel: 0,
      },
      loadflag: false,
      option: null,
      xData: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      yData: [120, 200, 150, 80, 70, 110, 130, 200, 150, 80, 70, 110],
    };
  },
  mounted() {
    this.refreshData();
  },
  methods: {
    setChart() {
      this.loadflag = false;

      const option = {
        grid: {
          top: "20%",
          bottom: "0%",
          right: "1%",
          left: "-5%",
          containLabel: true,
        },
        tooltip: {
          show: true,
        },
        animation: true,
        xAxis: [
          {
            type: "category",
            data: this.xData,
            axisTick: {
              alignWithLabel: true,
            },
            nameTextStyle: {
              color: "#82b0ec",
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#82b0ec",
              },
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
              margin: 30,
            },
          },
        ],
        yAxis: [
          {
            show: false,
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "",
            type: "pictorialBar",
            symbolSize: [15, 6],
            symbolOffset: [0, -4], // 上部椭圆
            symbolPosition: "end",
            z: 12,
            // "barWidth": "0",
            label: {
              normal: {
                show: true,
                position: "top",
                // "formatter": "{c}%"
                fontSize: 10,
                fontWeight: "bold",
                color: "#34DCFF",
              },
            },
            color: "#2DB1EF",
            data: this.yData,
          },
          {
            name: "",
            type: "pictorialBar",
            symbolSize: [15, 6],
            symbolOffset: [0, 9], // 下部椭圆
            // "barWidth": "20",
            z: 12,
            color: "#2DB1EF",
            data: this.yData,
          },
          {
            name: "",
            type: "pictorialBar",
            symbolSize: function (d) {
              return d > 0 ? [20, 8] : [0, 0];
            },
            symbolOffset: [0, 16], // 下部内环
            z: 10,
            itemStyle: {
              normal: {
                color: "transparent",
                borderColor: "#2EA9E5",
                borderType: "solid",
                borderWidth: 15,
              },
            },
            data: this.yData,
          },
          {
            name: "",
            type: "pictorialBar",
            symbolSize: [30, 10],
            symbolOffset: [0, 20], // 下部外环
            z: 10,
            itemStyle: {
              normal: {
                color: "transparent",
                borderColor: "#19465D",
                borderType: "solid",
                borderWidth: 20,
              },
            },
            data: this.yData,
          },
          {
            type: "bar",
            //silent: true,
            barWidth: "15",
            barGap: "10%", // Make series be overlap
            barCateGoryGap: "10%",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                  {
                    offset: 0,
                    color: "#38B2E6",
                  },
                  {
                    offset: 1,
                    color: "#0B3147",
                  },
                ]),
                opacity: 0.8,
              },
            },
            data: this.yData,
          },
        ],
      };

      this.option = option;
    },
    async refreshData() {
      this.loadflag = true;
      try {
        //请求后台接口
        const res = await Sever.smz.getTest({
          //请求参数
          dep_code: "45000",
        });
        if (res) {
          this.setChart();
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.myChart {
  height: 100%;
}
</style>