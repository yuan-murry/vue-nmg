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
      const option = {
        // title: {
        //   text: "十安",
        //   textStyle: {
        //     align: "center",
        //     color: "rgb(102, 219, 252)",
        //     fontSize: 30,
        //     fontStyle: "normal",
        //   },
        //   top: "5%",
        //   left: "center",
        // },
        series: [
          {
            name: "公安",
            type: "pie",
            clockWise: false,
            radius: [40, 50],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
                shadowBlur: 0,
                shadowColor: "#203665",
              },
            },
            hoverAnimation: false,
            center: ["10%", "65%"],
            data: [
              {
                value: 2800,
                label: {
                  normal: {
                    rich: {
                      a: {
                        color: "#ffffff",
                        align: "center",
                        fontSize: 20,
                        fontWeight: "bold",
                      },
                      b: {
                        color: "#66dbfc",
                        align: "center",
                        fontSize: 20,
                      },
                    },
                    formatter: function (params) {
                      return "{a|" + params.value + "}\n\n" + "{b|公安}";
                    },
                    position: "center",
                    show: true,
                    textStyle: {
                      fontSize: "10",
                      fontWeight: "normal",
                      color: "#fff",
                    },
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#02B6FD",
                    shadowColor: "#613fd1",
                    shadowBlur: 0,
                  },
                },
              },
              {
                value: 1000,
                name: "invisible",
                itemStyle: {
                  normal: {
                    color: "#142331",
                  },
                },
              },
            ],
          },
          {
            name: "检察院",
            type: "pie",
            clockWise: false,
            radius: [40, 50],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
                shadowBlur: 0,
                shadowColor: "#203665",
              },
            },
            hoverAnimation: false,
            center: ["30%", "65%"],
            data: [
              {
                value: 1300,
                label: {
                  normal: {
                    rich: {
                      a: {
                        color: "#ffffff",
                        align: "center",
                        fontSize: 20,
                        fontWeight: "bold",
                      },
                      b: {
                        color: "#66dbfc",
                        align: "center",
                        fontSize: 20,
                      },
                    },
                    formatter: function (params) {
                      return "{a|" + params.value + "}\n\n" + "{b|检察院}";
                    },
                    position: "center",
                    show: true,
                    textStyle: {
                      fontSize: "10",
                      fontWeight: "normal",
                      color: "#fff",
                    },
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#02B6FD",
                    shadowColor: "#613fd1",
                    shadowBlur: 0,
                  },
                },
              },
              {
                value: 1000,
                name: "invisible",
                itemStyle: {
                  normal: {
                    color: "#142331",
                  },
                },
              },
            ],
          },
          {
            name: "法院",
            type: "pie",
            clockWise: false,
            radius: [40, 50],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
                shadowBlur: 0,
                shadowColor: "#203665",
              },
            },
            hoverAnimation: false,
            center: ["50%", "65%"],
            data: [
              {
                value: 500,
                label: {
                  normal: {
                    rich: {
                      a: {
                        color: "#ffffff",
                        align: "center",
                        fontSize: 20,
                        fontWeight: "bold",
                      },
                      b: {
                        color: "#66dbfc",
                        align: "center",
                        fontSize: 20,
                      },
                    },
                    formatter: function (params) {
                      return "{a|" + params.value + "}\n\n" + "{b|法院}";
                    },
                    position: "center",
                    show: true,
                    textStyle: {
                      fontSize: "10",
                      fontWeight: "normal",
                      color: "#fff",
                    },
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#02B6FD",
                    shadowColor: "#613fd1",
                    shadowBlur: 0,
                  },
                },
              },
              {
                value: 1000,
                name: "invisible",
                itemStyle: {
                  normal: {
                    color: "#142331",
                  },
                },
              },
            ],
          },
          {
            name: "司法",
            type: "pie",
            clockWise: false,
            radius: [40, 50],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
                shadowBlur: 0,
                shadowColor: "#203665",
              },
            },
            hoverAnimation: false,
            center: ["70%", "65%"],
            data: [
              {
                value: 1130,
                label: {
                  normal: {
                    rich: {
                      a: {
                        color: "#ffffff",
                        align: "center",
                        fontSize: 20,
                        fontWeight: "bold",
                      },
                      b: {
                        color: "#66dbfc",
                        align: "center",
                        fontSize: 20,
                      },
                    },
                    formatter: function (params) {
                      return "{a|" + params.value + "}\n\n" + "{b|司法}";
                    },
                    position: "center",
                    show: true,
                    textStyle: {
                      fontSize: "10",
                      fontWeight: "normal",
                      color: "#fff",
                    },
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#02B6FD",
                    shadowColor: "#613fd1",
                    shadowBlur: 0,
                  },
                },
              },
              {
                value: 1000,
                name: "invisible",
                itemStyle: {
                  normal: {
                    color: "#142331",
                  },
                },
              },
            ],
          },
          {
            name: "安全",
            type: "pie",
            clockWise: false,
            radius: [40, 50],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
                shadowBlur: 0,
                shadowColor: "#203665",
              },
            },
            hoverAnimation: false,
            center: ["90%", "65%"],
            data: [
              {
                value: 1623,
                label: {
                  normal: {
                    rich: {
                      a: {
                        color: "#ffffff",
                        align: "center",
                        fontSize: 20,
                        fontWeight: "bold",
                      },
                      b: {
                        color: "#66dbfc",
                        align: "center",
                        fontSize: 20,
                      },
                    },
                    formatter: function (params) {
                      return "{a|" + params.value + "}\n\n" + "{b|安全}";
                    },
                    position: "center",
                    show: true,
                    textStyle: {
                      fontSize: "10",
                      fontWeight: "normal",
                      color: "#fff",
                    },
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#02B6FD",
                    shadowColor: "#613fd1",
                    shadowBlur: 0,
                  },
                },
              },
              {
                value: 1000,
                name: "invisible",
                itemStyle: {
                  normal: {
                    color: "#142331",
                  },
                },
              },
            ],
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