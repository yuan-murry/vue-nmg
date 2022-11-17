<template>
  <div class="myChart">
    <v-chart
      autoresize
      :loading="loadflag"
      :loading-options="flightLoadingOptions"
      :manual-update="false"
      :theme="this.$store.state.theme"
      :option="option"
    />
  </div>
</template>
<script>
import Sever from "@/api/selfApi";
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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["人数"],
        },
        grid: {
          left: "1%",
          right: "3%",
          bottom: "0%",
          top: "8%",
          containLabel: true,
          z: 22,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["2022", "2023", "2024", "2025", "2026"],
            splitLine: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: "#fff", //坐标值得具体的颜色
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: "#fff", //坐标值得具体的颜色
              },
            },
          },
        ],
        series: [
          {
            name: "人数",
            type: "line",
            stack: "Total",
            smooth: true,
            areaStyle: {},
            emphasis: {
              focus: "series",
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
  height: calc(100% - 45px);
}
</style>