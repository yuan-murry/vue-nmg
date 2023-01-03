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

      var scaleData = [
        {
          name: "机构设置",
          value: 10,
        },
        {
          name: "编制情况",
          value: 10,
        },
        {
          name: "人员情况",
          value: 10,
        },
        {
          name: "领导职数",
          value: 20,
        },
        {
          name: "台账",
          value: 10,
        },
        {
          name: "其它",
          value: 10,
        },
      ];
      var rich = {
        white: {
          color: "#ddd",
          align: "center",
          padding: [3, 0],
        },
      };
      var placeHolderStyle = {
        normal: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          color: "rgba(0, 0, 0, 0)",
          borderColor: "rgba(0, 0, 0, 0)",
          borderWidth: 0,
        },
      };
      var data = [];
      var color = [
        "#00ffff",
        "#00cfff",
        "#006ced",
        "#ffe000",
        "#ffa800",
        "#ff5b00",
        "#ff3000",
      ];
      for (var i = 0; i < scaleData.length; i++) {
        data.push(
          {
            value: scaleData[i].value,
            name: scaleData[i].name,
            itemStyle: {
              normal: {
                borderWidth: 4,
                shadowBlur: 100,
                borderColor: color[i],
                shadowColor: color[i],
              },
            },
          },
          {
            value: 2,
            name: "",
            itemStyle: placeHolderStyle,
          }
        );
      }
      var seriesObj = [
        {
          name: "",
          type: "pie",
          clockWise: false,
          radius: [40, 90],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "outside",
                color: "#ddd",
                formatter: function (params) {
                  var percent = 0;
                  var total = 0;
                  for (var i = 0; i < scaleData.length; i++) {
                    total += scaleData[i].value;
                  }
                  percent = ((params.value / total) * 100).toFixed(0);
                  if (params.name !== "") {
                    return params.name + params.value+ '\n{white|' + '占比' + percent + '%}';
                  } else {
                    return "";
                  }
                },
                rich: rich,
              },
              labelLine: {
                length: 30,
                length2: 100,
                show: true,
                color: "#00ffff",
              },
            },
          },
          data: data,
        },
      ];
      let option = {
        tooltip: {
          show: false,
        },
        legend: {
          show: false,
        },
        toolbox: {
          show: false,
        },
        series: seriesObj,
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
  height: 100%;
}
</style>