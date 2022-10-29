<script>
import { CircleProgress, Modal } from "@components";
import BarChart from "@components/BarChart.vue";
import { CardExpend } from "@components/Dashboard";
import { getColorRank } from "@utils/helper";
export default {
  name: "Dashboard-avp",
  components: {
    BarChart,
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
        rank: "Agent (AG)",
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
  <modal id="exampleModal">
    <template #header>Share ผลงานของคุณ</template>
    <template #body>
      <div class="title_modal">กรุณาเลือกผลงานที่คุณต้องการแชร์</div>
      <div class="row mb-5">
        <div class="col-md-4">
          <div class="share_check mb-3 mb-md-0">
            <div class="img_share_check">
              <img
                src="@assets/image/share1.svg"
                alt=""
                class="mb-3"
                height="55.98"
              />
            </div>
            <p class="title_modal mb-0">วางแผน<br />รักษาสัญญา</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="share_check mb-3 mb-md-0">
            <div class="img_share_check">
              <img
                src="@assets/image/share2.svg"
                alt=""
                class="mb-3"
                height="56.11"
              />
            </div>
            <p class="title_modal mb-0">วางแผน<br />เลื่อนตำแหน่ง</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="share_check mb-3 mb-md-0">
            <div class="img_share_check">
              <img
                src="@assets/image/share3.svg"
                alt=""
                class="mb-3"
                height="53.46"
              />
            </div>
            <p class="title_modal mb-0">Elite AG /<br />Premier AG</p>
          </div>
        </div>
      </div>
      <div class="title_modal">กรุณาเลือกประเภทของไฟล์</div>
      <div class="d-flex">
        <button type="button" class="btn btn_file me-3">
          <img src="@assets/image/icon_excel.svg" alt="" class="me-2" /> Excel
        </button>
        <button type="button" class="btn btn_file">
          <img src="@assets/image/icon_pdf.svg" alt="" class="me-2" />PDF
        </button>
      </div>
    </template>
  </modal>
  <div class="dashboard">
    <div
      class="mb-3 d-flex flex-column flex-lg-row align-items-start align-lg-item-center justify-content-between"
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
    <div class="row mb-3">
      <div class="col-lg-7">
        <div class="expend_mobile">
          <CardExpend :data="agentData" />
        </div>
        <div class="box_item p-0 mb-3 mb-lg-0">
          <div
            class="head_box d-flex justify-content-between align-items-center"
            style="padding: 10px 15px 10px 15px"
          >
            <div
              class="text_medium color_primary font_semi d-flex align-items-center"
            >
              <img src="@assets/image/doc.svg" alt="" class="me-2" />
              วางแผนรักษาสัญญา
            </div>
            <p class="color_gray mb-0">PC สะสม (ม.ค. - ธ.ค. 2565)</p>
          </div>
          <div class="p-3">
            <div class="grid_2">
              <div>
                <div class="um d-flex align-items-center mb-3">
                  <img src="@assets/image/um.svg" alt="" class="me-2" />
                  EVP
                </div>
                <div
                  class="box_item d-flex flex-column align-items-center justify-content-center text-center mb-3"
                  style="min-height: 244px"
                >
                  <CircleProgress
                    :percent="80"
                    class="mb-3"
                    bgColor="#FAB600"
                  />
                  <div class="assets_plan">
                    <p class="font_medium color_title">PC สะสมของกลุ่มรวม</p>
                    <p
                      class="color_yellow font_semi text_large"
                      :style="{ color: getColorRank(80) }"
                    >
                      40,000,000
                    </p>
                    <p>(เป้าหมายที่ต้องทำได้ 50,000,000 บาท)</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="box_item p-3 mb-3">
                  <div class="assets_plan mb-3">
                    <p class="font_medium">จำนวนหน่วย</p>
                    <p class="font_medium text_small">
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
                <div class="box_item py-2 px-3 mb-3">
                  <div class="assets_plan">
                    <p class="color_title font_medium mb-1">
                      ประมาณการอัตราความยั่งยืน
                    </p>
                    <p class="color_title font_medium text_small">
                      ล่วงหน้าสะสม 19 เดือน <br />ของกลุ่มตนเอง ณ เดือน ธ.ค.
                      2565
                    </p>
                    <p
                      class="text_large font_semi color_orange"
                      :style="{ color: getColorRank(55) }"
                    >
                      55%
                    </p>
                    <p>(เป้าหมายที่ต้องทำได้ 75%)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box_item mt-3">
          <div class="assets_plan p-3">
            <p class="font_medium color_title mb-3 text-center">
              จำนวนหน่วยที่ Active ในกลุ่มตนเอง (ต.ค. 2564 - ก.ย. 2565)
            </p>
          </div>
          <BarChart :fontSize="10" :data="activeData" id="active-data" />
        </div>
      </div>
      <div class="col-lg-5">
        <div class="expend_desktop">
          <CardExpend :data="agentData" />
        </div>
        <div class="box_item mt-3 custom_chart">
          <div class="assets_plan p-3">
            <p class="font_medium color_title mb-3 text-center">
              PC สะสมของกลุ่มตนเอง <br />รายไตรมาส (ต.ค. 2564 - ก.ย. 2565)
            </p>
          </div>
          <BarChart
            :data="pcData"
            id="pc-data"
            :customStyle="{ width: '100%', height: '450px' }"
            :fontSize="10"
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
.dashboard {
  background: #003781;
  padding: 20px;
  min-height: 93.6vh;
  height: 100%;
}
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
.share_check {
  position: relative;
  border: 1px solid #cbcbcb;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 142px;
  text-align: center;
  padding: 0 25px;
  cursor: pointer;
  transition: all 0.2s ease-in;
}
.share_check::after {
  display: none;
  content: "";
  background-image: url(@assets/image/icon_check_blue.svg);
  background-repeat: no-repeat;
  background-size: 24px;
  position: absolute;
  top: -10px;
  right: -10px;
  width: 24px;
  height: 24px;
  transition: all 0.4s ease-in;
}
.share_check:hover::after {
  display: block;
  transition: all 0.2s ease-in;
}
.share_check:hover,
.btn_file:hover {
  background-color: #e7f5fb;
  border: 2px solid #007ab3;
}
.btn_file {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cbcbcb;
  border-radius: 8px;
  height: 44px;
  max-width: 142px;
  width: 100%;
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
