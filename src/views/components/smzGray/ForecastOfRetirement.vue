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
import Sever from "@/api/selfApi";
import * as echarts from "echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  LineChart,
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
      const option = {
        grid: {
          left: "0%",
          right: "3%",
          top: "25%",
          bottom: "0%",
          containLabel: true,
        },
        tooltip: {
          show: true,
          trigger: "item",
        },
        legend: {
          show: true,
          x: "center",
          y: "5",
          icon: "stack",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#1bb4f6",
          },
          data: ["退休人数"],
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              color: "#fff",
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#397cbc",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#195384",
              },
            },
            data: ["2022", "2023", "2024", "2025", "2026"],
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#fff",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#11366e",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#11366e",
              },
            },
          },
        ],
        series: [
          {
            name: "退休人数",
            type: "line",
            stack: "总量",
            symbol: "circle",
            symbolSize: 8,
            smooth: true,
            itemStyle: {
              normal: {
                color: "#0092f6",
                lineStyle: {
                  color: "#0092f6",
                  width: 1,
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(7,44,90,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(0,146,246,0.9)",
                    },
                  ]),
                },
              },
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: "red",
                },
              },
            },
            data: [101, 134, 90, 230, 210],
          },
        ],
      };
      this.option = option;
      this.refreshData();
    },
    async refreshData() {
      try {
        //请求后台接口
        const res = await Sever.smz.getTest({
          //请求参数
          dep_code: "45000",
        });
        if (res) {
          console.log("请求成功了。。。。。", res);
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