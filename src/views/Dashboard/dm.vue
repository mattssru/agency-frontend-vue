<script>
import { Button, Card, CircleProgress, Loader, Radio } from "@components";
import CardEliteExpend from "@components/CardEliteProgress/index.vue";
import { CardExpend, ModalShare } from "@components/Dashboard";
import IconPerson from "@components/icons/IconPerson.vue";
import IconTabsFirst from "@components/icons/IconTabsFirst.vue";
import IconTabsSecon from "@components/icons/IconTabsSecon.vue";

export default {
  name: "Dashboard-DM",
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
        pc: 288000,
        pcLeave: "312000",
        percent: 48,
        firstname: "ลักษมีแข",
        lastname: "เจริญประภาการธนพล",
        organizationName: "ภาคอาวุโส โภคทรัพย์",
        rank: "District Manager (DM)",
        code: "135791",
        codeOrganization: "34246802468",
        codeGroup: "42086",
        licenseNo: "08642086",
        no: "246802468",
        rankCode: "elite",
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
            <p class="text_small color_pink mb-0">
              เหลือเวลาอีก {{ agentData.dateLeave }} วัน
            </p>
            <!-- <p class="text_small color_gray mb-0">PC สะสม (ม.ค. - ธ.ค. 2565)</p> -->
          </div>
          <div class="row" style="padding: 0 11px 0 15px">
            <div class="col-md-7 nopaddingright d-flex align-items-center">
              <CircleProgress :percent="45" class="me-2" />
              <div>
                <div class="mb-1">
                  <span class="text_medium font_semi color_title">Pc สะสม</span>
                  &nbsp;
                  <span class="text_large font_semi color_primary">{{
                    formatNumber(agentData.pc)
                  }}</span
                  ><br />
                  <span class="color_gray">(ม.ค. 65 - ธ.ค. 65)</span>
                </div>
                <div
                  v-if="45 < 100"
                  class="color_pink font_semi"
                  :style="{ color: getColorRank(45) }"
                >
                  <span class="" :style="{ 'font-size': '13px' }"
                    >ยังขาดอีก
                  </span>
                  <span class="text_semi" :style="{ 'font-size': '15px' }"
                    >{{ formatNumber(agentData.pcLeave) }} PC</span
                  >&nbsp;
                  <span :style="{ 'font-size': '10px' }"
                    >เพื่อรักษาสัญญาต่อ</span
                  >
                </div>
                <div class="font_semi text_small color_primary" v-else>
                  คุณบรรลุเป้าหมายในการรักษาสัญญาแล้ว
                </div>
                <!-- <div class="font_semi text_small color_green">
                  ยกเว้นการตรวจสอบผลงาน<br />
                  เพื่อรักษาสัญญาในรอบ 30 มิ.ย. 65
                </div> -->
              </div>
            </div>
            <div class="col-md-5 nopaddingleft">
              <div class="right_topic h-100 p-3 p-sm-2 p-xl-3 assets_plan">
                <p class="text_small font_medium color_primary">
                  จำนวนตัวแทนที่ยังมีสัญญา
                </p>
                <p class="font_medium color_title">(ไม่รวมตนเอง)</p>
                <div class="d-flex">
                  <img
                    v-if="100 === 100"
                    src="@assets/image/icon_congrat.svg"
                    alt=""
                    class=""
                    height="32"
                    :style="{ 'margin-right': '11px' }"
                  />
                  <div
                    class="d-flex align-items-center text_large font_semi color_orange"
                    :style="{ color: getColorRank(100) }"
                  >
                    8
                    <IconPerson class="ms-1 me-2" :color="getColorRank(100)" />
                  </div>
                  <p class="d-inline-flex color_gray ms-2">
                    (เป้าหมายที่ต้อง ทำได้ 6 คน)
                  </p>
                </div>
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
            <div class="left_tabs_plan">
              <div
                class="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  class="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <img src="@assets/image/um.svg" alt="" class="me-2" />
                  AVP
                </button>
                <button
                  class="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  <img src="@assets/image/um.svg" alt="" class="me-2" />
                  SDM
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9 col-sm-12 nopaddingleft">
          <div class="right_plan">
            <div class="right_tabs_plan">
              <div class="tab-content" id="v-pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div class="grid_3 last" style="margin-bottom: 15px">
                    <div class="box_item d-flex align-items-center py-3">
                      <div class="assets_plan">
                        <p class="font_medium mb-2 color_title">
                          PC สะสมของหน่วย
                        </p>
                        <p
                          class="text_large font_semi color_green d-flex align-items-center mb-1"
                          :style="{ color: getColorRank(100) }"
                        >
                          <img
                            v-if="100 === 100"
                            src="@assets/image/icon_congrat.svg"
                            alt=""
                            class="me-2"
                            height="32"
                            :style="{ 'margin-bottom': '10px' }"
                          />

                          1,500,000
                        </p>
                        <p>(เป้าหมายที่ต้องทำได้ 1,500,000 บาท)</p>
                      </div>
                    </div>
                    <div class="box_item d-flex align-items-center py-3">
                      <div class="assets_plan">
                        <p class="font_medium mb-2 color_title">
                          PC สะสมของสายงาน
                        </p>
                        <p
                          class="text_large font_semi color_orange d-flex mb-1"
                          :style="{ color: getColorRank(70) }"
                        >
                          <img
                            v-if="70 === 100"
                            src="@assets/image/icon_congrat.svg"
                            alt=""
                            class="me-2"
                            height="32"
                          />
                          850,000
                        </p>
                        <p>(เป้าหมายที่ต้องทำได้ 1,250,000 บาท)</p>
                      </div>
                    </div>
                    <div class="box_item d-flex align-items-center py-3">
                      <div class="assets_plan">
                        <p class="font_medium color_title mb-2">
                          อายุงานในระดับ AL
                        </p>
                        <p
                          class="text_large font_semi color_yellow d-flex mb-1"
                          :style="{ color: getColorRank(80) }"
                          style="font-size: 26px"
                        >
                          <img
                            v-if="80 === 100"
                            src="@assets/image/icon_congrat.svg"
                            alt=""
                            class="me-2"
                            height="32"
                          />
                          21 เดือน
                        </p>
                        <p>(เป้าหมายที่ต้องทำได้ 24 เดือน)</p>
                      </div>
                    </div>
                  </div>
                  <div class="grid_2">
                    <div class="box_item d-flex align-items-center py-3">
                      <div class="assets_plan">
                        <p class="font_medium color_title">
                          ประมาณการอัตราความยั่งยืน
                        </p>
                        <p class="text_small color_title font_medium mb-2">
                          ล่วงหน้าสะสม 19 เดือน ของสายงาน ณ เดือน ธ.ค. 2565
                        </p>
                        <p
                          class="text_large font_semi d-flex"
                          style="color: #f86200"
                          :style="{ color: getColorRankDM(55) }"
                        >
                          55%
                        </p>
                        <p>(เป้าหมายที่ต้องทำได้ 75%)</p>
                      </div>
                    </div>
                    <div class="box_item p-0">
                      <div class="custom_grid_asset h-100 d-flex">
                        <div
                          class="assets_plan custom_grid_1 d-flex flex-column justify-content-center"
                        >
                          <p class="font_medium color_title">
                            จำนวนหน่วยทั้งสายงาน
                          </p>
                          <p class="text_small color_title font_medium mb-2">
                            (รวมหน่วยตนเอง)
                          </p>
                          <p
                            :style="{ color: getColorRank(100) }"
                            class="text_large font_semi"
                          >
                            <img
                              v-if="100 === 100"
                              src="@assets/image/icon_congrat.svg"
                              alt=""
                              class=""
                              height="32"
                              :style="{ 'margin-bottom': '11px' }"
                            />
                            รวม 10
                          </p>
                          <p>(เป้าหมายที่ต้องทำได้ 10 หน่วย)</p>
                        </div>
                        <div class="custom_grid_2">
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <p
                              class="font_semi"
                              :style="{ color: getColorRank(55) }"
                            >
                              2 หน่วยลูก
                            </p>
                            <p>(เป้าหมายที่ต้องทำได้ 3 หน่วยลูก)</p>
                          </div>
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <p
                              class="font_semi"
                              :style="{ color: getColorRank(0) }"
                            >
                              0 หน่วยหลาน
                            </p>
                            <p>(เป้าหมายที่ต้องทำได้ 1 หน่วยหลาน)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div class="grid_2">
                    <div
                      class="box_item d-flex flex-column align-items-center justify-content-center"
                    >
                      <CircleProgress :percent="80" class="mb-4" />

                      <div class="assets_plan text-center">
                        <p class="font_medium color_title text_md color_title">
                          PC สะสมของหน่วยตนเอง
                        </p>

                        <span class="color_gray">(ม.ค. 65 - ธ.ค. 65)</span>
                        <div
                          class="font_semi text_large mt-2 mb-2"
                          :style="{ color: getColorRank(80) }"
                        >
                          {{ formatNumber(1600000) }}
                        </div>
                        <p>(เป้าหมายที่ต้องทำได้ 2,000,000 PC)</p>
                      </div>
                    </div>
                    <div>
                      <div class="box_item d-flex align-items-center mb-3">
                        <div v-if="88.56 > 79.99" class="custom-success me-3">
                          <img
                            src="@assets/image/icon_congrat.svg"
                            alt=""
                            class=""
                            height="60"
                          />
                          <span
                            class="font_semi text_small"
                            :style="{ color: getColorTextPercent(88.56) }"
                          >
                            {{ 88.56
                            }}<span :style="{ 'font-size': '10px' }">%</span>
                          </span>
                        </div>
                        <div
                          v-else
                          class="font_semi color_pink me-1"
                          style="font-size: 24px; line-height: 36px"
                          :style="{ color: getColorTextPercent(88.56) }"
                        >
                          {{ 88.56
                          }}<span :style="{ 'font-size': '10px' }">%</span>
                        </div>
                        <div class="assets_plan">
                          <p class="color_title font_medium d-inline-block">
                            ประมาณการอัตราความยั่งยืน<br />
                            <span
                              class="text_small"
                              :style="{ 'font-size': '13px' }"
                            >
                              ล่วงหน้าสะสม 19 เดือน ของหน่วยตนเอง <br />ณ เดือน
                              ธ.ค. 2565
                            </span>
                          </p>
                          <!-- <p class="color_gray">(ม.ค. - ธ.ค. 2565)</p> -->
                          <!-- <p class="text_large font_semi color_yellow mt-2">
                            80
                          </p> -->
                          <p>(เป้าหมายที่ต้องทำได้ 80%)</p>
                        </div>
                      </div>
                      <div class="box_item d-flex align-items-center">
                        <CircleProgress :percent="66" class="me-3" />
                        <div class="assets_plan">
                          <p class="font_medium color_title me-1">
                            จำนวนตัวแทน (ไม่รวมตนเอง)
                          </p>
                          <p class="color_gray">
                            ที่ PC >= 30,000 (ม.ค. 65 - ธ.ค. 65)
                          </p>
                          <p
                            class="mt-2 text_large font_semi d-inline-flex align-items-center"
                            :style="{ color: getColorRank(66) }"
                          >
                            4
                            <IconPerson
                              class="ms-1 me-2"
                              :color="getColorRank(66)"
                            />
                          </p>
                          <!-- <span class="color_gray">(PC สะสมมากว่า 30,000)</span> -->
                          <p>(เป้าหมายที่ต้องทำได้ 6 คน)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="premier_dashboard">
      <div class="row">
        <div class="col-lg-3 col-sm-12 nopaddingright">
          <div class="left_plan p-3">
            <div class="um d-flex align-items-center mb-3">
              <img src="@assets/image/logo-elite.svg" alt="" class="mx-auto" />
            </div>
            <div>
              <label for="" class="mb-2 text_small">รอบ</label>
              <select class="form-select" aria-label="Default select example">
                <option value="1">ไตรมาสที่ 1 ปี 2565</option>
                <option selected>ไตรมาสที่ 2 ปี 2565</option>
                <option value="2">ไตรมาสที่ 3 ปี 2565</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-lg-9 col-sm-12 nopaddingleft">
          <div class="right_plan">
            <div class="grid_3 h-100">
              <div class="box_item d-flex align-items-center">
                <div class="assets_plan">
                  <p class="font_medium color_title">PC สะสมของหน่วย</p>
                  <p class="mb-2 color_gray">(ต.ค. 64 - ก.ย. 65)</p>
                  <p
                    :style="{ color: getColorRank(100) }"
                    class="text_large font_semi d-flex"
                  >
                    <img
                      v-if="100 === 100"
                      src="@assets/image/icon_congrat.svg"
                      alt=""
                      class="me-2"
                      height="32"
                      :style="{ 'margin-bottom': '10px' }"
                    />
                    {{ formatNumber(1600000) }}
                  </p>
                  <p>(เป้าหมายที่ต้องทำได้ 1,500,000 PC)</p>
                </div>
              </div>
              <div class="box_item d-flex align-items-center">
                <div class="assets_plan">
                  <p class="font_medium color_title">จำนวนตัวแทน</p>
                  <p class="mb-2 color_gray">
                    ที่ PC >= 30,000 (เม.ย. 65 - มิ.ย. 65)
                  </p>
                  <p
                    class="text_large font_semi d-flex align-items-center"
                    :style="{ color: getColorRank(100) }"
                  >
                    <img
                      v-if="100 === 100"
                      src="@assets/image/icon_congrat.svg"
                      alt=""
                      width="27"
                      class="me-2 mb-2"
                      height="32"
                      :style="{ 'margin-bottom': '10px' }"
                    />
                    9
                    <IconPerson class="ms-1 me-2" :color="getColorRank(100)" />
                  </p>
                  <p>(เป้าหมายที่ต้องทำได้ 8 คน)</p>
                </div>
              </div>
              <div class="box_item d-flex">
                <div
                  class="assets_plan d-flex flex-column justify-content-between"
                >
                  <p class="font_medium color_title">จำนวน UM ใหม่</p>
                  <p class="mb-2 color_gray">
                    <!-- ที่ PC >= 30,000 (เม.ย. - มิ.ย. 2565) -->
                  </p>
                  <p
                    class="text_large font_semi d-flex align-items-center"
                    :style="{ color: getColorRank(0) }"
                  >
                    <img
                      v-if="0 === 100"
                      src="@assets/image/icon_congrat.svg"
                      alt=""
                      width="27"
                      class="me-2 mb-2"
                      height="32"
                      :style="{ 'margin-bottom': '10px' }"
                    />
                    0
                    <IconPerson class="ms-1 me-2" :color="getColorRank(0)" />
                  </p>
                  <p>(เป้าหมายที่ต้องทำได้ 2 คน)</p>
                </div>
              </div>
            </div>
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

<style lang="scss" scoped>
.head_box {
  border-bottom: 1px solid #e0e0e0;
}
.share_modal {
  cursor: pointer;
  text-decoration: underline;
}
.footer {
  margin-top: 7px;
}
.title_modal {
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
}
.custom-success {
  width: 72px;
  text-align: center;
}
.right_topic {
  border-left: 1px solid #e0e0e0;
}
@media (max-width: 767px) {
  .right_topic {
    border-left: none;
    border-top: 1px solid #e0e0e0;
  }
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
.last {
  grid-template-columns: auto auto 179px;
}
.last .box_item {
  padding: 15px 10px 12px 11px;
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

.right_plan {
  padding: 15px;
  border-left: 1px solid #e0e0e0;
  height: 100%;
}
.assets_plan p:first-child {
  font-size: 16px;
  line-height: 24px;
}
.head_premier {
  height: 60px;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
}
.right_premier,
.bottom_right_premier {
  border-left: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}
.bottom_premier {
  padding: 15px;
  min-height: 120px;
  border-bottom: 1px solid #e0e0e0;
}
.bottom_right_premier {
  padding: 20px 23px 10px 23px;
  min-height: 120px;
}
.border_right {
  border-right: 1px solid #e0e0e0;
}
/* left_tabs_plan */
.left_tabs_plan .nav-pills .nav-link {
  background-color: #fff;
  font-size: 36px;
  color: #007ab3;
  opacity: 0.3;
  height: 82px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
  border-radius: 0;
  position: relative;
}
.left_tabs_plan .nav-pills .nav-link::after {
  content: "";
  height: 1px;
  width: 100%;
  background-color: #e0e0e0;
  bottom: 0;
  left: 0;
  position: absolute;
}
.left_tabs_plan .nav-pills .nav-link.active {
  border-right: 6px solid #13a0d3;
  opacity: 1;
}
/* left_tabs_plan */
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
</style>
