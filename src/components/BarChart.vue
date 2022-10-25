<template>
  <div :style="{ width: '900px', height: '440px' }">
    <canvas id="bar-chart"></canvas>
    <div id="legend">
      <div v-for="item in data.datasets" :key="item.label" class="wrap-legend">
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

<script>
import Chart from "chart.js/auto";
export default {
  name: "BarChart",
  props: {
    data: {
      type: Object,
      require: true,
    },
  },
  //   return {
  //     planetChartData: {
  //       type: "bar",
  //       data: {
  //         labels: [
  //           "Mercury",
  //           "Venus",
  //           "Earth",
  //           "Mars",
  //           "Jupiter",
  //           "Saturn",
  //           "Uranus",
  //           "Neptune",
  //         ],
  //         datasets: [
  //           {
  //             label: "Number of Moons",
  //             type: "line",
  //             data: [0, 0, 1, 2, 79, 82, 27, 14],
  //             backgroundColor: "rgba(54,73,93,.5)",
  //             borderColor: "#36495d",
  //             borderWidth: 3,
  //           },
  //           {
  //             label: "Planetary Mass (relative to the Sun x 10^-6)",
  //             type: "bar",
  //             data: [
  //               0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514,
  //             ],
  //             backgroundColor: "rgba(71, 183,132,.5)",
  //             borderColor: "#47b784",
  //             borderWidth: 3,
  //           },
  //         ],
  //       },
  //       options: {
  //         responsive: true,
  //         lineTension: 1,
  //         scales: {
  //           yAxes: [
  //             {
  //               ticks: {
  //                 beginAtZero: true,
  //                 padding: 25,
  //               },
  //             },
  //           ],
  //         },
  //       },
  //     },
  //   };
  // },
  mounted() {
    const ctx = document.getElementById("bar-chart");

    const options = {
      type: "bar",
      data: this.data,
      borderWidth: 0,
      options: {
        layout: {
          padding: 0,
        },
        plugins: {
          title: {
            display: false,
          },
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return "label";
              },
            },
          },
        },
        maxBarThickness: 48,
        responsive: true,
        borderWidth: 0,

        scales: {
          x: {
            stacked: true,
            font: { family: "prompt" },
            grid: {
              display: false,
            },
          },
          y: {
            // display: false,
            ticks: {},
            beginAtZero: true,
          },
        },
      },
    };
    new Chart(ctx, options);
  },
};
</script>

<style scoped lang="scss">
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
