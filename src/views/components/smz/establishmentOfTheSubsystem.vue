<template>
  <div class="myChart">
    <v-chart
      autoresize
      :loading="loadflag"
      :loading-options="flightLoadingOptions"
      :manual-update="false"
      :option="option"
    />
  </div>
</template>

<script>
// import Sever from "@/api/selfApi";
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
      var scale = 0.6;
      var echartData = [
        {
          value: 2154,
          name: "党委",
        },
        {
          value: 3854,
          name: "人大",
        },
        {
          value: 3515,
          name: "政府",
        },
        {
          value: 3515,
          name: "政协",
        },
        {
          value: 3854,
          name: "法院",
        },
        {
          value: 2154,
          name: "检察院",
        },
        {
          value: 2214,
          name: "其它",
        },
      ];
      var rich = {
        yellow: {
          color: "#ffc72b",
          fontSize: 30 * scale,
          padding: [5, 4],
          align: "center",
        },
        total: {
          color: "#ffc72b",
          fontSize: 40 * scale,
          align: "center",
        },
        white: {
          color: "#fff",
          align: "center",
          fontSize: 20 * scale,
          padding: [10, 22],
        },
        blue: {
          color: "#49dff0",
          fontSize: 22 * scale,
          align: "center",
        },
        hr: {
          borderColor: "#0b5263",
          width: "100%",
          borderWidth: 1,
          height: 0,
        },
      };
      const option = {
        title: {
          text: "总 数",
          left: "center",
          top: "53%",
          padding: [12, 0],
          textStyle: {
            color: "#fff",
            fontSize: 25 * scale,
            align: "center",
          },
        },
        legend: {
          selectedMode: false,
          formatter: function () {
            var total = 0; //各科正确率总和
            echartData.forEach(function (value) {
              total += value.value;
            });
            return "{total|" + total + "}";
          },
          data: [echartData[0].name],
          // data: ['高等教育学'],
          // itemGap: 50,
          left: "center",
          top: "center",
          icon: "none",
          align: "center",
          textStyle: {
            color: "#fff",
            fontSize: 16 * scale,
            rich: rich,
          },
        },
        series: [
          {
            name: "总考生数量",
            type: "pie",
            radius: ["45%", "60%"],
            hoverAnimation: false,
            color: [
              "#c487ee",
              "#deb140",
              "#49dff0",
              "#034079",
              "#6f81da",
              "#00ffb4",
              "#E8493F",
            ],
            label: {
              normal: {
                formatter: function (params) {
                  var total = 0; //考生总数量
                  var percent = 0; //考生占比
                  echartData.forEach(function (value) {
                    total += value.value;
                  });
                  percent = ((params.value / total) * 100).toFixed(1);
                  return (
                    "{white|" +
                    params.name +
                    "}\n{hr|}\n{yellow|" +
                    params.value +
                    "}\n{blue|" +
                    percent +
                    "%}"
                  );
                },
                rich: rich,
              },
            },
            labelLine: {
              normal: {
                length: 100 * scale,
                length2: 0,
                lineStyle: {
                  color: "#0b5263",
                },
              },
            },
            data: echartData,
          },
        ],
      };

      this.option = option;
    },
    async refreshData() {
      this.loadflag = true;
      this.setChart();
      //   try {
      //     //请求后台接口
      //     const res = await Sever.smz.getTest({
      //       //请求参数
      //       dep_code: "45000",
      //     });
      //     if (res) {
      //       console.log("请求成功22了。。。。。", res);
      //       this.setChart();
      //     }
      //   } catch (error) {
      //     console.log(error);
      //   }
    },
  },
};
</script>

<style scoped>
.myChart {
  height: calc(100% - 45px);
}
</style>