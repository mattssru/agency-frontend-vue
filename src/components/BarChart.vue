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
  },

  mounted() {
    const ctx = document.getElementById("bar-chart");
    const data = this.data.datasets || [];
    let max = 0;
    data.forEach((element) => {
      const temp = Math.max(...element.data);
      if (temp > max) {
        max = temp;
      }
    });
    const options = {
      type: "bar",
      data: this.data,
      defaults: {
        font: {
          size: 10,
        },
        labels: {
          font: {
            size: 19,
          },
        },
      },
      options: {
        labels: {
          font: {
            size: 19,
          },
        },
        elements: {
          bar: {
            borderWidth: 0,
          },
        },
        layout: {
          padding: {
            // top: 30,
          },
        },
        plugins: {
          datalabels: {
            clip: true,
            color: "#13A0D3",
            textStrokeColor: "white",
            textStrokeWidth: 3,
            anchor: "end",
            formatter: function (value, context) {
              return formatNumber(value);
            },
            font: {
              family: "medium",
              size: 10,
            },
            align: "end",
            offset: 0,
          },
          title: {
            display: false,
          },
          legend: {
            display: false,
          },
          tooltip: {},
        },
        maxBarThickness: 48,
        responsive: true,
        borderWidth: 0,
        // categoryPercentage: 0.5,
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false,
            },
            ticks: {
              font: {
                family: "regular", // Your font family
                size: 15,
              },
              // display: false,
            },
          },
          y: {
            // display: false,
            suggestedMax: max * 1.1,
            beginAtZero: true,
            // stepSize: 1000000,
            ticks: {
              display: false,
            },
            grid: {
              // display: false,
              drawTicks: false,
            },
          },
        },
      },
    };
    new Chart(ctx, options);
  },
};
</script>

<template>
  <div class="wrap-chart">
    <canvas id="bar-chart"></canvas>
    <div id="legend">
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
  </div>
</template>

<style scoped lang="scss">
.wrap-chart {
  padding: 0 28px;
}
#legend {
  display: flex;
  justify-content: center;
  margin: 20px;
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
</style>
