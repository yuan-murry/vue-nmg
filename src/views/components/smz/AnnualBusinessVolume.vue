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
    };
  },
  mounted() {
    this.refreshData();
  },
  methods: {
    setChart() {
      this.loadflag = false;

      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
            lineStyle: {
              opacity: 0,
            },
          },
          formatter: function (prams) {
            return "年度业务办理量：" + prams[0].data;
          },
        },
        grid: {
          left: "1%",
          right: "1%",
          bottom: "0%",
          top: "8%",
          containLabel: true,
          z: 22,
        },
        xAxis: {
          type: "category",
          data: [
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
          gridIndex: 0,
          axisTick: {
            alignWithLabel: true,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: "#fff", //坐标值得具体的颜色
            },
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: "#fff", //坐标值得具体的颜色
            },
          },
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130, 200, 150, 80, 70, 110],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
            barWidth: "30%",
            itemStyle: {
              normal: {
                //这里设置柱形图圆角 [左上角，右上角，右下角，左下角]
                barBorderRadius: [10, 10, 0, 0],
              },
            },
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
  height: calc(100% - 45px);
}
</style>