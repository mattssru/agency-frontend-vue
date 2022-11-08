<script>
import { Button, Card, CircleProgress, Loader, Radio } from "@components";
import CardEliteExpend from "@components/CardEliteProgress/index.vue";
import { CardExpend, ModalShare } from "@components/Dashboard";
import IconPerson from "@components/icons/IconPerson.vue";
import IconTabsFirst from "@components/icons/IconTabsFirst.vue";
import IconTabsSecon from "@components/icons/IconTabsSecon.vue";
import { formatNumber, getColorRank, getColorTextPercent } from "@utils/helper";

export default {
  name: "Dashboard",
  components: {
    Button,
    Card,
    IconTabsFirst,
    IconTabsSecon,
    CircleProgress,
    CardExpend,
    ModalShare,
    CardEliteExpend,
    IconPerson,
    Radio,
    Loader,
  },
  data() {
    return {
      loading: false,
      failed: false,
      selectFile: "",
      checkedNames: [],
      showModal: false,
      checked: "6",
      agentData: {
        dateLeave: "64",
        pc: 11520,
        pcLeave: "12480",
        percent: 48,
        firstname: "ลักษมีแข",
        lastname: "เจริญประภาการธนพล",
        organizationName: "ภาคอาวุโส โภคทรัพย์",
        rank: "Agent (AG)",
        rankCode: "premier",
        code: "135791",
        codeOrganization: "34246802468",
        codeGroup: "42086",
        gender: "female",
        licenseNo: "08642086",
        no: "246802468",
      },
      eliteData: {
        current_q: "Q3",
        current_q_title: "ก.ค. 65 - ก.ย. 65",
        period: 130000,
        period_percent: 100,
        pc: 40000,
        people: 4,
        percent_pc: 45,
        percent_people: 30,
        premium_pc_min: 75000,
        premium_people_min: 9,
        elite_pc_min: 300000,
        elite_people_min: 12,
        q1_pc: 300000,
        q1_people: 14,
        q2_pc: 80000,
        q2_people: 4,
        q3_pc: 150000,
        q3_people: 9,
        q4_pc: null,
        q4_people: null,
        current_year: 2565,
      },
    };
  },
  methods: {
    formatNumber,
    getColorTextPercent,
    getColorRank,
    handleClick(e) {
      this.selectFile = e.target.value;
    },
    async onChange(e) {
      this.loading = true;

      await this.sleep();
      this.failed = true;
      this.loading = false;
    },
    async handleRetry(e) {
      this.loading = true;
      await this.sleep();
      this.failed = false;
      this.loading = false;
    },
  },
};
</script>

<template>
  <ModalShare id="exampleModal"></ModalShare>
  <div class="dashboard">
    <div class="container-fluid">
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
      <div class="row mb-3">
        <div class="col-lg-7">
          <div class="box_item px-0 mb-3 mb-lg-0">
            <div
              class="head_box d-flex justify-content-between align-items-center"
              style="padding: 0 15px 10px 15px"
            >
              <div
                class="text_medium color_primary font_semi d-flex align-items-center"
              >
                <img src="@assets/image/doc.svg" alt="" class="me-2" />
                วางแผนรักษาสัญญา
              </div>
              <p class="text_small color_pink mb-0">
                เหลือเวลาอีก {{ agentData.dateLeave }} วัน
              </p>
            </div>
            <div class="d-flex pt-3" style="padding: 0 15px">
              <CircleProgress :percent="45" class="me-3" />
              <div>
                <div class="mb-2">
                  <span class="text_medium font_semi color_title">Pc สะสม</span>
                  &nbsp;
                  <span class="text_large font_semi color_primary">{{
                    formatNumber(agentData.pc)
                  }}</span
                  >&nbsp;
                  <span class="color_gray">(ก.ค. 65 - ธ.ค. 65)</span>
                </div>
                <div
                  class="color_pink font_semi"
                  :style="{ color: getColorRank(45) }"
                >
                  <span class="text_medium">ยังขาดอีก</span>&nbsp;
                  <span class="text_semi"
                    >{{ formatNumber(agentData.pcLeave) }} PC</span
                  >&nbsp;
                  <span>เพื่อรักษาสัญญาต่อ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <CardExpend :data="agentData" />
        </div>
      </div>
      <div class="plan_dashboard mb-3">
        <div class="row">
          <div class="col-lg-3 col-sm-12 nopaddingright">
            <div
              class="head_plan text_medium color_primary font_semi d-flex align-items-center"
            >
              <img src="@assets/image/plan.svg" alt="" class="me-2" />
              วางแผนเลื่อนตำแหน่ง
            </div>
            <div class="left_plan">
              <div class="um d-flex align-items-center mb-3">
                <img src="@assets/image/um.svg" alt="" class="me-2" />
                UM
              </div>
              <div class="condition mb-4">
                <p class="text_small mb-2">เงื่อนไข</p>
                <Radio :onChange="onChange" />
              </div>
              <div>
                <label for="" class="mb-2 text_small">รอบ</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>รอบ 1 ก.ค. 2565</option>
                  <option value="1">One</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-sm-12 nopaddingleft">
            <div class="tabs_dashboard">
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
                    <IconTabsFirst class="me-2" />
                    Go For Team
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
                    <IconTabsSecon class="me-2" />
                    One Man Show
                  </button>
                </li>
              </ul>
            </div>
            <div class="right_plan position-rel">
              <Loader :loading="loading" :retry="handleRetry" :failed="failed">
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div class="grid_2">
                      <div class="box_item d-flex align-items-center">
                        <CircleProgress :percent="100" class="me-3" />
                        <div class="assets_plan">
                          <p
                            class="font_medium color_title d-inline-block me-1"
                          >
                            PC สะสมของตนเอง
                          </p>
                          <span class="color_gray">(ม.ค. 65 - มิ.ย. 65)</span>
                          <p
                            class="text_large font_semi"
                            :style="{ color: getColorRank(100) }"
                          >
                            130,000
                          </p>
                          <p>(เป้าหมายที่ต้องทำได้ 50,000 PC)</p>
                        </div>
                      </div>
                      <div class="box_item d-flex align-items-center">
                        <CircleProgress :percent="80" class="me-3" />
                        <div class="assets_plan">
                          <p
                            class="font_medium color_title d-inline-block me-1"
                          >
                            PC สะสมของทีม
                          </p>
                          <span class="color_gray">(ม.ค. 65 - มิ.ย. 65)</span>
                          <p
                            class="text_large font_semi"
                            :style="{ color: getColorRank(80) }"
                          >
                            320,000
                          </p>
                          <p>(เป้าหมายที่ต้องทำได้ 400,000 PC)</p>
                        </div>
                      </div>
                      <div class="box_item d-flex align-items-center">
                        <!-- <div
                        class="font_semi color_pink me-3"
                        style="font-size: 24px; line-height: 36px"
                      >
                        30.56%
                      </div> -->
                        <div v-if="30.56 > 79.99" class="custom-success me-4">
                          <img
                            src="@assets/image/icon_congrat.svg"
                            alt=""
                            class=""
                            height="60"
                          />
                          <span
                            class="font_semi text_small"
                            :style="{ color: getColorTextPercent(30.56) }"
                          >
                            {{ 30.56
                            }}<span :style="{ 'font-size': '10px' }">%</span>
                          </span>
                        </div>
                        <div
                          v-else
                          class="font_semi color_pink me-3"
                          style="font-size: 24px; line-height: 36px"
                          :style="{ color: getColorTextPercent(30.56) }"
                        >
                          {{ 30.56 }}%
                        </div>
                        <div class="assets_plan">
                          <p class="font_medium color_title">
                            ประมาณการอัตราความยั่งยืน
                          </p>
                          <p class="font_medium color_title text_small">
                            ล่วงหน้าสะสม 19 เดือน
                          </p>
                          <p class="font_medium text_small color_title">
                            ณ เดือน มิ.ย. 2565
                          </p>
                          <p>(เป้าหมายที่ต้องทำได้ 80%)</p>
                        </div>
                      </div>
                      <div class="box_item d-flex align-items-center">
                        <CircleProgress :percent="75" class="me-3" />
                        <div class="assets_plan">
                          <p class="font_medium me-1 color_title">
                            จำนวนตัวแทนที่แนะนำโดยตรง
                          </p>
                          <p
                            class="text_large font_semi d-inline-flex align-items-center"
                            :style="{ color: getColorRank(75) }"
                          >
                            3
                            <IconPerson
                              class="ms-1 me-2"
                              :color="getColorRank(75)"
                            />
                          </p>
                          <span class="color_gray">(PC สะสมมากว่า 30,000)</span>
                          <p>(เป้าหมายที่ต้องทำได้ 4 คน)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div class="grid_2">
                      <div
                        class="box_item d-flex flex-column align-items-sm-center justify-content-center"
                      >
                        <CircleProgress :percent="40" class="mb-3" />
                        <div class="assets_plan text-center">
                          <p class="font_medium color_title">PC สะสมของตนเอง</p>
                          <p class="font_medium text_small mb-1 color_title">
                            ก.ค. 2565 - ธ.ค. 2565
                          </p>
                          <p
                            class="font_semi text_large mb-1"
                            :style="{ color: getColorRank(40) }"
                          >
                            180,000
                          </p>
                          <p>(เป้าหมายที่ต้องทำได้ 600,000 PC)</p>
                        </div>
                      </div>
                      <div
                        class="box_item d-flex flex-column align-items-center justify-content-center"
                      >
                        <div class="custom-success" v-if="30.77 > 79.99">
                          <img
                            src="@assets/image/icon_congrat.svg"
                            alt=""
                            class=""
                            height="60"
                          />
                          <span
                            class="font_semi text_small"
                            :style="{ color: getColorTextPercent(30.77) }"
                          >
                            {{ 30.77
                            }}<span :style="{ 'font-size': '10px' }">%</span>
                          </span>
                        </div>
                        <div
                          v-else
                          class="font_semi text_large mb-3"
                          :style="{ color: getColorTextPercent(30.77) }"
                        >
                          {{ 30.77 }}%
                        </div>
                        <div class="assets_plan text-center">
                          <p class="font_medium color_title">
                            ประมาณการอัตราความยั่งยืน
                          </p>
                          <p class="font_medium color_title text_small mb-2">
                            ล่วงหน้าสะสม 19 เดือน ณ เดือน มิ.ย. 2565
                          </p>
                          <p>(เป้าหมายที่ต้องทำได้ 80%)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Loader>
            </div>
          </div>
        </div>
      </div>
      <CardEliteExpend :data="eliteData" />
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
  </div>
</template>

<style lang="scss" scoped>
.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.title_modal {
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
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
  width: 142px;
  text-align: center;
  //padding: 0 25px;
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
.share_check.checked::after {
  display: block;
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
.share_check:hover,
.share_check.checked {
  background-color: #e7f5fb;
  border: 2px solid #007ab3;
}

.head_box {
  border-bottom: 1px solid #e0e0e0;
}
.share_modal {
  cursor: pointer;
  text-decoration: underline;
}
.custom-success {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer {
  margin-top: 7px;
}
.title_modal {
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
}

.profile_user {
  width: 64px;
  height: 64px;
  padding: 4px;
  background-color: #b59d5e;
  border-radius: 100%;
}
.profile_user img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
}
.name_user {
  font-size: 16px;
  line-height: 24px;
}
.detail_user {
  color: #414141;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.plan_dashboard,
.premier_dashboard {
  border-radius: 8px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.12);
  background-color: #fff;
}
.head_plan {
  padding: 0 15px;
  border-bottom: 1px solid #e0e0e0;
  height: 45px;
}
.left_plan {
  padding: 25px 24px 24px 16px;
}
.um {
  font-size: 36px;
  line-height: 54px;
  color: #007ab3;
}
.condition .form-check-input {
  width: 16px;
  height: 16px;
  border-radius: 100%;
}
div#show-modal {
  color: white;
}
.condition .form-check-input:checked,
.condition .form-check-input[type="checkbox"].checked {
  background-color: #13a0d3;
  border-color: #13a0d3;
}
.tabs_dashboard {
  border-bottom: 1px solid #e0e0e0;
  height: 45px;
}
.tabs_dashboard .nav-pills .nav-link {
  padding: 0;
  background-color: transparent;
  color: #003781;
  font-size: 14px;
  line-height: 21px;
  width: 100%;
  height: 45px;
}
.tabs_dashboard .nav-item {
  width: 50%;
}
.tabs_dashboard .nav-pills .nav-link.active {
  font-family: "semi-bold";
  font-size: 15px;
  line-height: 22px;
  color: #007ab3;
  border-bottom: 4px solid #13a0d3;
  border-radius: 0;
}
.tabs_dashboard .nav-pills .nav-link.active svg {
  fill: #007ab3 !important;
  stroke: #007ab3 !important;
}
.right_plan {
  padding: 15px;
  border-left: 1px solid #e0e0e0;
}
.right_plan .tab-pane:first-child .box_item {
  height: 105px;
}
.assets_plan p:first-child {
  font-size: 16px;
  line-height: 24px;
}
</style>
