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
      let title = "问题类型";
      let color = [
        "#0E7CE2",
        "#FF8352",
        "#E271DE",
        "#F8456B",
        "#00FFFF",
        "#4AEAB0",
      ];
      let echartData = [
        {
          name: "机构设置",
          value: "3720",
        },
        {
          name: "编制情况",
          value: "2920",
        },
        {
          name: "人员情况",
          value: "2200",
        },
        {
          name: "领导职数",
          value: "1420",
        },
        {
          name: "台账",
          value: "1420",
        },
        {
          name: "其它",
          value: "1420",
        },
      ];

      let formatNumber = function (num) {
        let reg = /(?=(\B)(\d{3})+$)/g;
        return num.toString().replace(reg, ",");
      };
      let total = echartData.reduce((a, b) => {
        return a + b.value * 1;
      }, 0);

      const option = {
        color: color,
        // tooltip: {
        //     trigger: 'item'
        // },
        title: [
          {
            text: "{name|" + title + "}\n{val|" + formatNumber(total) + "}",
            top: "center",
            left: "center",
            textStyle: {
              rich: {
                name: {
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#666666",
                  padding: [10, 0],
                },
                val: {
                  fontSize: 24,
                  fontWeight: "bold",
                  color: "#fff",
                },
              },
            },
          },
        //   {
        //     text: "单位：个",
        //     top: 20,
        //     left: 20,
        //     textStyle: {
        //       fontSize: 14,
        //       color: "#666666",
        //       fontWeight: 400,
        //     },
        //   },
        ],
        // legend: {
        //     orient: 'vertical',
        //     icon: 'rect',
        //     x: '80%',
        //     y: 'center',
        //     itemWidth: 12,
        //     itemHeight: 12,
        //     align: 'left',
        //     textStyle: {
        //         rich: {
        //             name: {
        //                 fontSize: 12
        //             },
        //             value: {
        //                 fontSize: 16,
        //                 padding: [0, 5, 0, 15]
        //             },
        //             unit: {
        //                 fontSize: 12
        //             }
        //         }
        //     },
        //     formatter: function(name) {
        //         let res = echartData.filter(v => v.name === name);
        //         res = res[0] || {};
        //         let unit = res.unit || '';
        //         return '{name|' + name + '}  {value|' + res.value + '}{unit|' + unit + '}'
        //     }
        //     // data: legendName
        // },
        series: [
          {
            type: "pie",
            radius: ["50%", "70%"],
            center: ["50%", "50%"],
            data: echartData,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                borderColor: "#fff",
                borderWidth: 2,
              },
            },
            labelLine: {
              normal: {
                length: 20,
                length2: 120,
                lineStyle: {
                  color: "#e6e6e6",
                },
              },
            },
            label: {
              normal: {
                formatter: (params) => {
                  return (
                    "{icon|●}{name|" +
                    params.name +
                    "}{value|" +
                    formatNumber(params.value) +
                    "}"
                  );
                },
                padding: [0, -100, 25, -100],
                rich: {
                  icon: {
                    fontSize: 16,
                  },
                  name: {
                    fontSize: 14,
                    padding: [0, 10, 0, 4],
                    color: "#fff",
                  },
                  value: {
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#fff",
                  },
                },
              },
            },
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