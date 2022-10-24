<script>
import { Button, Table } from "@components";
import BarChart from "@components/BarChart.vue";
import { ModalShare } from "@components/Dashboard";

export default {
  name: "SummaryReport",
  components: {
    Table,
    BarChart,
    Button,
    ModalShare,
  },
  data() {
    return {
      agent: {
        name: "สมชาย ใจดี",
        code: "135791",
        id: 2,
      },
      barData: {
        type: "bar",
        data: {
          labels: [
            "Mercury",
            "Venus",
            "Earth",
            "Mars",
            "Jupiter",
            "Saturn",
            "Uranus",
            "Neptune",
          ],
          datasets: [
            {
              label: "Number of Moons",
              type: "line",
              data: [0, 0, 1, 2, 79, 82, 27, 14],
              backgroundColor: "rgba(54,73,93,.5)",
              borderColor: "#36495d",
              borderWidth: 3,
            },
            {
              label: "Planetary Mass (relative to the Sun x 10^-6)",
              type: "bar",
              data: [
                0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514,
              ],
              backgroundColor: "rgba(71, 183,132,.5)",
              borderColor: "#47b784",
              borderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25,
                },
              },
            ],
          },
        },
      },
      tableData: [
        {
          id: 1,
          name: "ม.ค. 2565",
          pc: 20000,
          pc_team: 400000,
          count: 34,
          pc_branch: 800000,
        },
        {
          id: 2,
          name: "ก.พ. 2565",
          pc: 30000,
          pc_team: 300000,
          count: 33,
          pc_branch: 700000,
        },
        {
          id: 3,
          name: "มี.ค. 2565",
          pc: 30000,
          pc_team: 400000,
          count: 66,
          pc_branch: 600000,
        },
        {
          id: 4,
          name: "เม.ย. 2565",
          pc: 30000,
          pc_team: 500000,
          count: 21,
          pc_branch: 700000,
        },
        {
          id: 5,
          name: "พ.ค. 2565",
          pc: 20000,
          pc_team: 45000,
          count: 47,
          pc_branch: 800000,
        },
        {
          id: 6,
          name: "มิ.ย. 2565",
          pc: 30000,
          pc_team: 66000,
          count: 64,
          pc_branch: 900000,
        },
        {
          id: 7,
          name: "ก.ค. 2565",
          pc: 30000,
          pc_team: 300000,
          count: 32,
          pc_branch: 800000,
        },
        {
          id: 8,
          name: "ส.ค. 2565",
          pc: 20000,
          pc_team: 400000,
          count: 77,
          pc_branch: 700000,
        },
        {
          id: 9,
          name: "ก.ย. 2565",
          pc: 50000,
          pc_team: 89000.22,
          count: 24,
          pc_branch: 500000,
        },
        {
          id: 10,
          name: "รวม",
          pc: 332000,
          pc_team: 2434000,
          count: 49,
          pc_branch: 9000000,
        },
      ],
    };
  },
};
</script>

<template>
  <ModalShare id="exampleModal"></ModalShare>
  <div class="container-fluid summary-report">
    <div
      class="mb-3 d-flex flex-column flex-lg-row align-items-center align-lg-item-center justify-content-between"
    >
      <router-link
        to="/"
        class="font_medium text_small back_btn d-flex align-items-center text-decoration-underline"
      >
        <img
          src="@assets/image/arrow-right.svg"
          alt=""
          class="me-2 arrow-right"
        />
        ย้อนกลับ
      </router-link>
      <div class="mb-2 mb-lg-0 text_medium font_medium color_white">
        ผลงานรายเดือนย้อนหลังของคุณ {{ agent.name }} (รหัสตัวแทน
        {{ agent.code }})
      </div>
      <div
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        class="share_modal d-flex align-items-center font_semi text_small text-white"
      >
        <img src="@assets/image/icon_share.svg" alt="" class="me-2" />
        Share ผลงานของคุณ
      </div>
    </div>
    <div class="box_item px-0 mb-3 mb-lg-0 nopaddingleft">
      <div
        class="tabs_dashboard d-flex align-items-center justify-content-between"
      >
        <ul class="nav nav-pills" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link color_blue d-flex align-items-center justify-content-center active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              ตาราง
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link color_blue d-flex align-items-center justify-content-center"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              แผนภูมิ
            </button>
          </li>
        </ul>
        <div class="d-flex align-items-center wrap-select">
          <label class="color_blue font_medium text_middle">ระยะเวลา </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>ภายใน ปี พ.ศ. 2565</option>
            <option value="1">ภายใน ปี พ.ศ. 2566</option>
          </select>
        </div>
      </div>
      <div class="body-panel">
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active p-3"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <Table :data="tableData" />
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <BarChart :data="barData" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer d-flex justify-content-between">
      <p class="color_white">ข้อมูล ณ วันที่ 13 กันยายน 2565</p>
      <p class="color_white">
        *ข้อมูลนี้
        เป็นเพียงข้อมูลผลงานประมาณการเพื่อใช้สำหรับการวางแผนการทำงานเบื้องต้น
        ยังไม่สามารถใช้สรุปผลการเลื่อนตำแหน่ง การจ่ายผลประโยชน์
        หรือการแข่งขันภายในบริษัทได้
      </p>
    </div>
  </div>
</template>

<style scoped>
.summary-report {
  background: #003781;
  padding: 20px;
  min-height: 100vh;
  height: 100%;
  position: relative;
}
.arrow-right {
  rotate: 90deg;
}
.back_btn {
  color: white;
}
.share_modal {
  cursor: pointer;
  text-decoration: underline;
}

.tabs_dashboard {
  border-bottom: 1px solid #e0e0e0;
  height: 45px;
}
.tabs_dashboard .nav-pills .nav-link {
  padding: 0;
  background-color: transparent;
  color: #003781;
  font-size: 16px;
  line-height: 24px;
  width: 142px;
  height: 45px;
}
.body-panel {
  min-height: 75vh;
  /* width: 50%; */
}
.tabs_dashboard .nav-pills .nav-link.active {
  font-family: "semi-bold";
  line-height: 22px;
  color: #007ab3;
  border-bottom: 4px solid #13a0d3;
  font-size: 16px;
  border-radius: 0;
}
.tabs_dashboard .nav-pills .nav-link.active svg {
  fill: #007ab3 !important;
  stroke: #007ab3 !important;
}
.text_middle {
  font-size: 16px;
  line-height: 24px;
  color: #00378f;
  width: 62px;
  margin-right: 20px;
}
.wrap-select {
  margin-right: 20px;
}
.wrap-select select {
  width: 180px;
  font-size: 14px;
}
.footer {
  margin-top: 7px;
}
</style>
