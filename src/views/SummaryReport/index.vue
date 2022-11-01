<script>
import { Button, Table, Loader } from "@components";
import BarChart from "@components/BarChart.vue";
import { ModalShare } from "@components/Dashboard";

export default {
  name: "SummaryReport",
  components: {
    Table,
    BarChart,
    Button,
    ModalShare,
    Loader,
  },
  methods: {
    async onChange(e) {
      this.loading = true;
      await this.sleep();
      this.select = e.target.value;
      this.loading = false;
    },
    async onChangePeriod(e) {
      this.loading = true;
      await this.sleep();
      this.selectPeriod = e.target.value;
      // NOTE:: call data for change chart and table
      this.loading = false;
    },
  },
  computed: {
    tableData() {
      let data = [
        {
          key: 12,
          name: "ส.ค. 2564",
          pc: 20000,
          pc_team: 400000,
          count: 34,
          pc_branch: 800000,
        },
        {
          key: 12,
          name: "ก.ย. 2564",
          pc: 20000,
          pc_team: 400000,
          count: 34,
          pc_branch: 800000,
        },
        {
          key: 12,
          name: "ต.ค. 2564",
          pc: 20000,
          pc_team: 400000,
          count: 34,
          pc_branch: 800000,
        },
        {
          key: "2564",
          name: "พ.ย. 2564",
          pc: 20000,
          pc_team: 400000,
          count: 34,
          pc_branch: 800000,
        },
        {
          key: "2564",
          name: "ธ.ค. 2564",
          pc: 20000,
          pc_team: 400000,
          count: 34,
          pc_branch: 800000,
        },
        {
          key: "2564",
          name: "ม.ค. 2565",
          pc: 20000,
          pc_team: 400000,
          count: 34,
          pc_branch: 800000,
        },
        {
          key: "2565",
          name: "ก.พ. 2565",
          pc: 30000,
          pc_team: 300000,
          count: 33,
          pc_branch: 700000,
        },
        {
          key: "2565",
          name: "มี.ค. 2565",
          pc: 30000,
          pc_team: 400000,
          count: 66,
          pc_branch: 600000,
        },
        {
          key: "2565",
          name: "เม.ย. 2565",
          pc: 30000,
          pc_team: 500000,
          count: 21,
          pc_branch: 700000,
        },
        {
          key: "2565",
          name: "พ.ค. 2565",
          pc: 20000,
          pc_team: 45000,
          count: 47,
          pc_branch: 800000,
        },
        {
          key: "2565",
          name: "มิ.ย. 2565",
          pc: 30000,
          pc_team: 66000,
          count: 64,
          pc_branch: 900000,
        },
        {
          key: "2565",
          name: "ก.ค. 2565",
          pc: 30000,
          pc_team: 300000,
          count: 32,
          pc_branch: 800000,
        },
        {
          key: "2565",
          name: "ส.ค. 2565",
          pc: 20000,
          pc_team: 400000,
          count: 77,
          pc_branch: 700000,
        },
        {
          key: "2565",
          name: "ก.ย. 2565",
          pc: 50000,
          pc_team: 89000.22,
          count: 24,
          pc_branch: 500000,
        },
        {
          name: "รวม",
          key: "total",
          pc: 332000,
          pc_team: 2434000,
          count: 49,
          pc_branch: 9000000,
        },
      ];
      if (this.selectPeriod === "1") {
        return data.filter(
          (d) => d.key === "2564" || d.key === "2565" || d.key === "total"
        );
      } else if (this.selectPeriod === "2") {
        return data.filter((d) => d.key === "2565" || d.key === "total");
      } else if (this.selectPeriod === "3") {
        return data;
      }
    },
  },
  data() {
    return {
      loading: false,
      select: "pc",
      selectPeriod: "2",
      agent: {
        name: "สมชาย ใจดี",
        code: "135791",
        id: 2,
      },
      barPcData: {
        labels: [
          "ม.ค. 2565",
          "ก.พ. 2565",
          "มี.ค. 2565",
          "เม.ย. 2565",
          "พ.ค. 2565",
          "มิ.ย. 2565",
          "ก.ค. 2565",
          "ส.ค. 2565",
          "ก.ย. 2565",
          "ม.ค. 2565",
          "ก.พ. 2565",
          "มี.ค. 2565",
          "เม.ย. 2565",
          "พ.ค. 2565",
          "มิ.ย. 2565",
          "ก.ค. 2565",
          "ส.ค. 2565",
          "ก.ย. 2565",
        ],
        datasets: [
          {
            label: "PC สะสมของตนเอง",
            data: [
              20000, 30000, 30000, 30000, 20000, 30000, 30000, 20000, 50000,
              20000, 30000, 30000, 30000, 20000, 30000, 30000, 20000, 50000,
            ],
            backgroundColor: "#006192",
          },
          {
            label: "PC สะสมของหน่วย",
            data: [
              400000, 300000, 400000, 500000, 45000, 66000, 300000, 400000,
              89000.22, 400000, 300000, 400000, 500000, 45000, 66000, 300000,
              400000, 89000.22,
            ],
            backgroundColor: "#13A0D3",
          },
          {
            label: "PC สะสมของสายงาน",
            data: [
              800000, 700000, 600000, 700000, 800000, 900000, 800000, 700000,
              500000, 800000, 700000, 600000, 700000, 800000, 900000, 800000,
              700000, 500000,
            ],
            backgroundColor: "#B5DAE6",
          },
        ],
      },
      barCountData: {
        labels: [
          "ม.ค. 2565",
          "ก.พ. 2565",
          "มี.ค. 2565",
          "เม.ย. 2565",
          "พ.ค. 2565",
          "มิ.ย. 2565",
          "ก.ค. 2565",
          "ส.ค. 2565",
          "ก.ย. 2565",
        ],
        datasets: [
          {
            data: [34, 33, 66, 21, 47, 64, 32, 77, 24],
            backgroundColor: "#B5DAE6",
          },
        ],
      },
    };
  },
};
</script>

<template>
  <ModalShare id="exampleModal"></ModalShare>

  <div class="container-fluid summary-report">
    <div
      class="mb-3 d-flex flex-row align-items-center justify-content-between"
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
      <div class="text_medium font_medium color_white">
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
      <Loader :loading="loading" />
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
          <select
            v-model="selectPeriod"
            @change="onChangePeriod($event)"
            class="form-select"
            aria-label="Default select example"
          >
            <option value="1">12 เดือนย้อนหลัง</option>
            <option value="2">ภายใน ปี พ.ศ. 2565</option>
            <option value="3">ทั้งหมด</option>
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
            <div v-if="!loading" class="wrap-table">
              <Table :data="tableData" />
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div class="wrap-select-chart">
              ข้อมูล
              <select
                class="form-select custom-select"
                aria-label="Default select example"
                v-model="select"
                @change="onChange($event)"
              >
                <option value="pc">PC สะสม</option>
                <option value="count">จำนวนรายของหน่วย</option>
              </select>
            </div>
            <BarChart v-if="select === 'pc'" :data="barPcData"> </BarChart>
            <BarChart v-else :data="barCountData"> </BarChart>
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
  min-height: calc(100vh - 54px);
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
.wrap {
  display: flex;
  flex-direction: column;
}
.wrap-select-chart {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.custom-select {
  width: 185px;
  margin-left: 20px;
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
  min-height: 70vh;
  /* min-height: 75vh;*/
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
.wrap-table {
  max-height: 630px;
  overflow: scroll;
}
</style>
