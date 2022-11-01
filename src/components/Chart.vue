<script>
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { formatNumber } from "@utils/helper";
Chart.register(ChartDataLabels);

// https://v2_1_0--chartjs-plugin-datalabels.netlify.app/guide/formatting.html#data-transformation
export default {
  name: "BarChart",
  props: {
    data: {
      type: Object,
      require: true,
    },
    id: {
      type: String,
      default: "myChart",
    },
    customStyle: {
      type: Object,
    },
    fontSize: {
      type: Number,
      default: 15,
    },
    showLabels: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 908,
    },
    height: {
      type: Number,
      default: 500,
    },
  },
  computed: {
    showLegends() {
      const data = this.data.datasets || [];
      return data.length > 1;
    },
  },
  mounted() {
    const data = this.data.datasets || [];
    let max = 0;
    data.forEach((element) => {
      const temp = Math.max(...element.data);
      if (temp > max) {
        max = temp;
      }
    });
    const config = {
      type: "bar",
      data: this.data,
      options: {
        maintainAspectRatio: false,
        maxBarThickness: 45,
        layout: {
          padding: {
            top: 10,
            bottom: 10,
          },
        },
        labels: {
          font: {
            size: 19,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              display: false,
            },
            grid: {
              drawTicks: false,
              drawBorder: false,
            },
            suggestedMax: max * 1.1,
          },
          x: {
            stacked: true,
            grid: {
              display: false,
            },
            ticks: {
              font: {
                family: "regular",
                size: this.fontSize,
              },
            },
          },
        },
        plugins: {
          datalabels: {
            clip: true,
            color: "#13A0D3",
            textStrokeColor: "white",
            textStrokeWidth: 5,
            anchor: "end",
            formatter: function (value, context) {
              return formatNumber(value);
            },
            font: {
              family: "medium",
              size: 10,
            },
            align: "end",
            offset: -3,
          },
          legend: {
            display: false,
          },
        },
      },
    };
    const myChart = new Chart(document.getElementById(this.id), config);

    const box = document.querySelector(".box");
    const barLength = myChart.data.labels.length;
    // console.log(barLength);
  },
};
</script>

<template>
  <div class="chartCard">
    <div class="chartBox" :style="{ width: `${width}px` }">
      <div class="colLarge" :style="{ 'max-width': `${width}px` }">
        <div
          class="box"
          :style="{ width: `${width}px`, height: `${height}px` }"
        >
          <canvas :id="id"></canvas>
        </div>
      </div>
    </div>
  </div>
  <div id="legend" v-if="showLegends">
    <div
      v-for="item in data.datasets"
      :key="item.label"
      v-show="item.label"
      class="wrap-legend"
    >
      <div
        class="box-legend"
        :style="{ 'background-color': item.backgroundColor }"
      ></div>
      <div>
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrap-chart {
  padding: 0 28px;
}
#legend {
  display: flex;
  justify-content: center;
  margin: 10px;
}
.wrap-legend {
  display: flex;
  flex-direction: row;
  margin-right: 40px;
  align-items: center;
}
.box-legend {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
.chartCard {
  // width: 100vw;
  // height: calc(100vh - 40px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.chartBox {
  display: flex;
  justify-content: center;
}
</style>
