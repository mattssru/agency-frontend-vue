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
      default: "bar-chart",
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
  },
  computed: {
    showLegends() {
      const data = this.data.datasets || [];
      return data.length > 1;
    },
  },
  mounted() {
    const data = {
      labels: [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
      ],
      datasets: [
        {
          label: "Weekly Sales",
          data: [
            9, 12, 6, 9, 12, 3, 9, 9, 12, 6, 9, 12, 3, 9, 9, 12, 6, 9, 12, 3, 9,
            9, 12, 6, 9, 12, 3, 9,
          ],
          backgroundColor: [
            "rgba(255, 26, 104, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(0, 0, 0, 0.2)",
          ],
          borderColor: [
            "rgba(255, 26, 104, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(0, 0, 0, 1)",
          ],
          borderWidth: 1,
        },
        {
          label: "Weekly Sales",
          data: [
            12, 16, 10, 20, 11, 1, 6, 12, 16, 10, 20, 11, 1, 6, 12, 16, 10, 20,
            11, 1, 6, 12, 16, 10, 20, 11, 1, 6,
          ],
          backgroundColor: [
            "rgba(255, 26, 104, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(0, 0, 0, 0.2)",
          ],
          borderColor: [
            "rgba(255, 26, 104, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(0, 0, 0, 1)",
          ],
          borderWidth: 1,
        },
        {
          label: "Weekly Sales",
          data: [
            15, 30, 10, 20, 11, 1, 6, 12, 16, 10, 20, 11, 1, 6, 12, 16, 10, 20,
            11, 1, 6, 12, 16, 10, 20, 11, 1, 6,
          ],
          backgroundColor: [
            "rgba(255, 26, 104, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(0, 0, 0, 0.2)",
          ],
          borderColor: [
            "rgba(255, 26, 104, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(0, 0, 0, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
    const config = {
      type: "bar",
      data,
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 10,
            bottom: 10,
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
          },
          x: {
            stacked: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };

    const myChart = new Chart(document.getElementById("myChart"), config);

    const box = document.querySelector(".box");
    const barLength = myChart.data.labels.length;
    console.log(barLength);

    if (barLength > 7) {
      const chartWidth = 900 + (barLength - 7) * 30;
      box.style.width = `${chartWidth}px`;
    }
  },
};
</script>

<template>
  <div class="chartCard">
    <div class="chartBox">
      <div class="colLarge">
        <div class="box">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chartCard {
  // width: 100vw;
  // height: calc(100vh - 40px);
  background: rgba(255, 26, 104, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.chartBox {
  width: 900px;
  padding: 20px;
  border-radius: 20px;
  border: solid 3px rgba(255, 26, 104, 1);
  background: white;
  display: flex;
}
.colLarge {
  max-width: 900px;
  overflow-x: scroll;
}
.box {
  width: calc(900px - 40px);
  height: 500px;
}
</style>
