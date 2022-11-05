<script>
import { CircleProgress, Modal } from "@components";
import BarChart from "@components/StackedBar.vue";
import { CardExpend, ModalShare } from "@components/Dashboard";
import { getColorRank } from "@utils/helper";
export default {
  name: "Dashboard-avp",
  components: {
    BarChart,
    ModalShare,
    CircleProgress,
    CardExpend,
    Modal,
  },
  data() {
    return {
      agentData: {
        dateLeave: "64",
        pc: 11520,
        pcLeave: "12480",
        percent: 48,
        firstname: "ลักษมีแข",
        lastname: "เจริญประภาการธนพล",
        organizationName: "ภาคอาวุโส โภคทรัพย์",
        rank: "Executive Vice President (EVP)",
        code: "135791",
        codeOrganization: "34246802468",
        codeGroup: "42086",
        licenseNo: "08642086",
        no: "246802468",
      },
      activeData: {
        labels: [
          "ต.ค. 64",
          "พ.ย. 64",
          "ธ.ค. 64",
          "ก.พ. 65",
          "มี.ค. 65",
          "เม.ย. 65",
          "พ.ค. 65",
          "มิ.ย. 65",
          "ก.ค. 65",
          "ส.ค. 65",
          "ก.ย. 65",
        ],
        datasets: [
          {
            data: [8, 6, 9, 7, 6, 1, 1, 0, 2, 3, 5, 2],
            backgroundColor: "#B5DAE6",
          },
        ],
      },
      pcData: {
        labels: [
          "ไตรมาสที่ 4 ปี 64",
          "ไตรมาสที่ 1 ปี 65",
          "ไตรมาสที่ 2 ปี 65",
          "ไตรมาสที่ 3 ปี 65",
        ],
        datasets: [
          {
            data: [633882, 366507, 883357, 1125731],
            backgroundColor: "#B5DAE6",
          },
        ],
      },
    };
  },
  methods: {
    getColorRank,
  },
};
</script>

<template>
  <ModalShare id="exampleModal"> </ModalShare>
  <div class="dashboard">
    <div
      class="mb-2 d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between"
    >
      <h1 class="mb-2 mb-lg-0">AGENCY PERFORMANCE TRACKER</h1>
      <div
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        class="share_modal d-flex align-items-center font_semi text_small text-white"
      >
        <img src="@assets/image/icon_share.svg" alt="" class="me-2" />
        Share ผลงานของคุณ
      </div>
    </div>
    <div class="row">
      <div class="col-lg-7">
        <div class="expend_mobile">
          <CardExpend :data="agentData" />
        </div>
        <div class="box_item p-0 mb-3 mb-lg-0">
          <div class="head_box" style="padding: 8px 15px">
            <div
              class="text_medium color_primary font_semi d-flex align-items-center"
            >
              <img src="@assets/image/doc.svg" alt="" class="me-2" />
              วางแผนเลื่อนตำแหน่ง
            </div>
          </div>
          <div style="padding: 15px">
            <div class="grid_2">
              <div>
                <div class="um d-flex align-items-center mb-3">
                  <img src="@assets/image/um.svg" alt="" class="me-2" />
                  SEVP
                </div>
                <div
                  class="box_item d-flex flex-column align-items-center justify-content-center text-center p-3"
                  style="height: calc(100% - 70px)"
                >
                  <CircleProgress
                    :percent="80"
                    class="mb-3"
                    bgColor="#FAB600"
                  />
                  <div class="assets_plan">
                    <p class="font_medium color_title">PC สะสมของกลุ่มรวม</p>
                    <p class="font_medium color_title text_small mb-2">
                      ภายใน 2 ปีที่ผ่านมา
                    </p>
                    <p
                      class="color_yellow font_semi text_large"
                      :style="{ color: getColorRank(80) }"
                    >
                      130,000,000
                    </p>
                    <p>(เป้าหมายที่ต้องทำได้ 140,000,000 บาท)</p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="box_item p-2 d-flex align-items-center justify-content-between"
                  style="margin-bottom: 10px"
                >
                  <div>
                    <p class="colot_title font_medium text_small mb-1">
                      อายุงาน
                    </p>
                    <p class="colot_title font_medium text_small">
                      ในตำแหน่งปัจจุบัน
                    </p>
                  </div>
                  <div>
                    <p class="color_orange font_semi text_large">2 ปี</p>
                    <p style="font-size: 10.5px; line-height: 15px">
                      (เป้าหมาย 3 ปี)
                    </p>
                  </div>
                </div>
                <div class="box_item p-2" style="margin-bottom: 10px">
                  <div class="assets_plan mb-2">
                    <p class="font_medium color_title">จำนวนหน่วย</p>
                    <p class="font_medium text_small color_title">
                      (กลุ่มสายงานตรง รวมหน่วยตนเอง)
                    </p>
                  </div>
                  <div class="d-flex align-items-end">
                    <CircleProgress :percent="45" class="me-3" />
                    <div>
                      <p
                        class="color_pink font_semi"
                        style="font-size: 24px; line-height: 36px"
                        :style="{ color: getColorRank(45) }"
                      >
                        รวม <span style="font-size: 32px">9</span>
                      </p>
                      <p style="font-size: 10.5px; line-height: 15px">
                        (เป้าหมายที่ต้องทำได้ 20 หน่วย)
                      </p>
                    </div>
                  </div>
                </div>
                <div class="box_item" style="padding: 7px 12px">
                  <div class="assets_plan">
                    <p class="color_title font_medium">
                      ประมาณการอัตราความยั่งยืน
                    </p>
                    <p class="color_title font_medium">
                      ล่วงหน้าสะสม 19 เดือน ของกลุ่มตนเอง
                    </p>
                    <p class="color_title font_medium">ณ เดือน ธ.ค. 2565</p>
                    <p
                      class="text_28 font_semi color_orange d-inline-block"
                      :style="{ color: getColorRank(55) }"
                    >
                      55%
                    </p>
                    <span class="ms-2">(เป้าหมายที่ต้องทำได้ 75%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box_item mt-3">
          <div class="assets_plan">
            <p class="font_medium color_title mb-2 text-center">
              จำนวนหน่วยที่ Active ในกลุ่มตนเอง (ต.ค. 2564 - ก.ย. 2565)
            </p>
          </div>
          <BarChart
            :fontSize="10"
            :data="activeData"
            id="active-data"
            :width="525"
            :height="162"
            :barWidth="20"
          />
        </div>
      </div>
      <div class="col-lg-5">
        <div class="expend_desktop">
          <CardExpend :data="agentData" />
        </div>
        <div
          class="box_item mt-3 py-3 custom_chart"
          style="height: calc(100% - 156px)"
        >
          <div class="assets_plan mb-5">
            <p class="font_medium color_title text-center">
              PC สะสมของกลุ่มตนเอง รายไตรมาส<br />
              (ต.ค. 2564 - ก.ย. 2565)
            </p>
          </div>
          <BarChart
            :data="pcData"
            id="pc-data"
            :customStyle="{ width: '100%', height: '450px' }"
            :fontSize="10"
            :width="334"
            :height="340"
            :barWidth="38"
          />
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

<style lang="scss" scoped>
.head_box {
  border-bottom: 1px solid #e0e0e0;
}
.share_modal {
  cursor: pointer;
  text-decoration: underline;
}

.title_modal {
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
}
.um {
  font-size: 36px;
  line-height: 54px;
  color: #007ab3;
}
.box_item .wrap-chart {
  padding: 0;
}
.assets_plan p:first-child {
  font-size: 16px;
  line-height: 24px;
}

.border_right {
  border-right: 1px solid #e0e0e0;
}

.custom_grid_1 {
  width: 55%;
  padding: 10px 15px;
}
.custom_grid_2 {
  width: 45%;
  height: 100%;
  border-left: 1px solid #e0e0e0;
}
.custom_grid_2 div p:first-child {
  font-size: 22px;
  line-height: 28px;
}
.custom_grid_2 div p:last-child {
  font-size: 10px;
  line-height: 14px;
}
.custom_grid_2 div {
  border-bottom: 1px solid #e0e0e0;
  padding: 0 8px;
  height: 50%;
}
.custom_grid_2 div:last-child {
  border-bottom: none;
}
.expend_mobile {
  display: none;
}
.custom_chart .wrap-chart canvas {
  width: 100% !important;
  height: 377px !important;
}
.text_28 {
  font-size: 28px;
  line-height: 28px;
}
@media (max-width: 991px) {
  .expend_mobile {
    display: block;
    margin-bottom: 16px;
  }
  .expend_desktop {
    display: none;
  }
}
</style>
