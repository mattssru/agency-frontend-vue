<script>
import { CircleProgress, Tree } from "@components";
import CardExpend from "./components/CardExpend.vue";
import IconPerson from "@components/icons/IconPerson.vue";
import SideBar from "@components/LayoutStructure/Sidebar.vue";
import { formatNumber, getColorRank, getColorTextPercent } from "@utils/helper";

export default {
  name: "StructureAgent-Child",
  components: {
    Tree,
    CircleProgress,
    SideBar,
    CardExpend,
    IconPerson,
  },
  methods: {
    formatNumber,
    getColorRank,
    getColorTextPercent,
    getAvpRankColor(value = 0) {
      let color = "#e0e0e0";
      if (value > 0 && value <= 38.24) {
        color = "#f62459";
      } else if (value >= 38.25 && value <= 56.99) {
        color = "#f86200";
      } else if (value >= 57 && value <= 74.99) {
        color = "#fab600";
      } else if (value >= 75) {
        color = "#5fcd8a";
      }
      return color;
    },
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        const { id } = toParams;
        console.log("id", id);
        // react to route changes...
      }
    );
  },
  data() {
    return {
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
        rank: "Senior District Manager (SDM)",
        code: "135791",
        codeOrganization: "34246802468",
        codeGroup: "42086",
        licenseNo: "08642086",
        no: "246802468",
        gender: "female",
        image: null,
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
};
</script>

<template>
  <div>
    <div class="grid_auto mb-3">
      <div class="">
        <div class="box_item px-0 mb-3 mb-lg-0 pb-0">
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
          <div class="grid_auto_in">
            <div class="d-flex align-items-center p-2">
              <div>
                <div class="">
                  <span
                    class="text_medium font_semi color_title"
                    style="font-size: 18px"
                    >Pc สะสม</span
                  >
                  &nbsp;
                  <span
                    class="text_large font_semi color_primary"
                    style="font-size: 28px"
                    :class="45 < 100 ? 'color_primary' : 'color_green'"
                    >{{ formatNumber(agentData.pc) }}</span
                  ><br />
                  <span class="color_gray">(ม.ค. 65 - ธ.ค. 65)</span>
                </div>
                <div
                  v-if="45 < 100"
                  class="color_pink font_semi"
                  :style="{ color: getColorRank(45) }"
                >
                  <span class="font_14">ยังขาดอีก </span>
                  <span class="font_16"
                    >{{ formatNumber(agentData.pcLeave) }} PC</span
                  >&nbsp;
                  <span class="font_10">เพื่อรักษาสัญญาต่อ</span>
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
            <div class="">
              <div
                class="right_topic p-2 h-100"
                style="border-left: 1px solid #e0e0e0"
              >
                <p class="font_14 font_medium color_primary">
                  จำนวนตัวแทน<br />ที่ยังมีสัญญา
                </p>
                <p class="font_10 font_medium color_title">(ไม่รวมตนเอง)</p>
                <div class="">
                  <div
                    class="d-inline-flex align-items-center text_large font_semi color_orange"
                    :style="{ color: getColorRank(100) }"
                  >
                    8
                    <IconPerson class="ms-1" :color="getColorRank(100)" />
                  </div>
                  <p class="font_9 d-inline-flex color_gray ms-1" style="">
                    (เป้าหมาย 6 คน)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pb-8">
        <CardExpend
          :data="agentData"
          :style="{ paddingBottom: '8px !important' }"
        />
      </div>
    </div>
    <div class="plan_dashboard mb-3">
      <div
        class="head_plan text_small color_primary font_semi d-flex align-items-center"
      >
        <img src="@assets/image/plan.svg" alt="" class="me-2" />
        วางแผนเลื่อนตำแหน่ง
      </div>
      <div class="col-lg-12 col-sm-12">
        <div class="row">
          <div class="col-lg-3">
            <div class="left_plan">
              <div class="left_tabs_plan">
                <div class="um d-flex align-items-center mb-3">
                  <img src="@assets/image/um.svg" alt="" class="me-2" />
                  AVP
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
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
                      <div class="box_item p-2">
                        <p class="font_14 font_medium color_title mb-2">
                          PC สะสมของหน่วยตนเอง
                        </p>
                        <p
                          :style="{ color: getColorRank(88) }"
                          class="font_26 font_semi color_yellow d-flex mb-1"
                        >
                          {{ formatNumber(1400000) }}
                        </p>
                        <p class="font_9">
                          (เป้าหมายที่ต้องทำได้ 1,500,000 PC)
                        </p>
                      </div>
                      <div class="box_item p-2">
                        <p class="font_14 font_medium mb-2 color_title">
                          PC สะสมของสายงาน
                        </p>
                        <p
                          class="font_26 font_semi d-flex mb-1"
                          :style="{ color: getColorRank(75) }"
                        >
                          {{ formatNumber(7500000) }}
                        </p>
                        <p class="font_8">
                          (เป้าหมายที่ต้องทำได้ 12,500,000 PC)
                        </p>
                      </div>
                      <div class="box_item p-2">
                        <p class="font_12 font_medium mb-2 color_title">
                          อายุงานในระดับ AL
                        </p>
                        <p
                          :style="{ color: getColorRank(100) }"
                          class="font_22 font_semi color_green d-flex align-items-end mb-1"
                          style="font-size: 26px"
                        >
                          24 <span class="text_small ms-2">เดือน</span>
                        </p>
                        <p class="font_8">(เป้าหมายที่ต้องทำได้ 24 เดือน)</p>
                      </div>
                    </div>
                    <div class="grid_2">
                      <div class="box_item p-2">
                        <p class="font_14 font_medium color_title mb-1">
                          ประมาณการอัตราความยั่งยืน
                        </p>
                        <p class="font_10 color_title font_medium mb-1">
                          ล่วงหน้าสะสม 19 เดือน ของสายงาน<br />ณ เดือน ธ.ค. 2565
                        </p>
                        <p
                          class="font_24 font_semi d-inline-flex"
                          :style="{ color: getAvpRankColor(53.75) }"
                        >
                          <img
                            src="@assets/image/icon_congrat.svg"
                            alt=""
                            width="27"
                            height="31"
                            class="me-2"
                            v-if="53.75 > 80"
                          />
                          53.75%
                        </p>
                        <span class="font_9 ms-2"
                          >(เป้าหมายที่ต้องทำได้ 75%)</span
                        >
                      </div>
                      <div class="box_item p-0">
                        <div class="custom_grid_asset h-100 d-flex">
                          <div
                            class="custom_grid_1 d-flex flex-column justify-content-center"
                          >
                            <p class="font_12 font_medium color_title">
                              จำนวนหน่วย<br />ทั้งสายงาน
                            </p>
                            <p class="font_10 color_title font_medium">
                              (รวมหน่วยตนเอง)
                            </p>
                            <p
                              class="font_28 font_semi color_pink"
                              :style="{ color: getColorRank(20) }"
                            >
                              รวม 2
                            </p>
                            <p class="font_9">(เป้าหมาย 10 หน่วย)</p>
                          </div>
                          <div class="custom_grid_2">
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <p
                                class="font_22 font_semi color_pink"
                                :style="{ color: getColorRank(60) }"
                              >
                                2 <span class="text_small">หน่วยลูก</span>
                              </p>
                              <p class="font_9">(เป้าหมาย 3 หน่วยลูก)</p>
                            </div>
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <p
                                :style="{ color: getColorRank(0) }"
                                class="font_22 font_semi color_pink"
                              >
                                0 <span class="text_small">หน่วยหลาน</span>
                              </p>
                              <p class="font_9">(เป้าหมาย 1 หน่วยหลาน)</p>
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
      </div>
    </div>

    <div class="premier_dashboard">
      <div class="d-flex">
        <div class="flex-left">
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
        <div class="flex-right">
          <div class="right_plan">
            <div class="grid_3 h-100">
              <div class="box_item px-2">
                <p class="font_medium color_title">PC สะสมของหน่วย</p>
                <p class="color_gray">(ก.ค. 64 - มิ.ย. 65)</p>
                <BR></BR>
                <BR></BR>

                <p
                  :style="{ color: getColorRank(100) }"
                  class="text_large font_semi color_yellow d-flex"
                >
                  {{ formatNumber(1600000) }}
                </p>
                <p class="font_10">(เป้าหมายที่ต้องทำได้ 1,500,000 PC)</p>
              </div>
              <div class="box_item px-2">
                <p class="font_16 font_medium color_title">จำนวนตัวแทน</p>
                <p class="font_12 font_medium color_title">(รวมตนเอง)</p>
                <p class="font_10 color_gray">(เม.ย. - มิ.ย. 2565)</p>
                <BR></BR>
                <div
                  :style="{ color: getColorRank(100) }"
                  class="text_large font_semi d-flex align-items-center"
                >
                  <!-- NOTE: 100 is percent -->
                  9
                  <IconPerson class="ms-1 me-1" :color="getColorRank(100)" />
                  <p class="font_9 ms-1 color_gray">(PC >= 30,000)</p>
                </div>
                <p class="font_10">(เป้าหมายที่ต้องทำได้ 8 คน)</p>
              </div>
              <div class="box_item">
                <p class="font_16 font_medium color_title">จำนวน UM ใหม่</p>
                <BR></BR>
                <BR></BR>
                <p
                  class="text_large font_semi d-flex align-items-center mt-3"
                  :style="{ color: getColorRank(1) }"
                >
                  <img
                    src="@assets/image/icon_congrat.svg"
                    alt=""
                    width="27"
                    height="31"
                    class="me-2 mb-2"
                    v-if="0 >= 80"
                  />
                  1
                  <IconPerson class="ms-1 me-2" :color="getColorRank(1)" />
                </p>
                <p class="font_10">(เป้าหมายที่ต้องทำได้ 2 คน)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.head_box {
  border-bottom: 1px solid #e0e0e0;
}
.grid_auto {
  display: grid;
  grid-template-columns: 395px auto;
  gap: 15px;
}
.grid_auto_in {
  display: grid;
  grid-template-columns: auto 130px;
}
.font_8 {
  font-size: 8px;
  line-height: 14px;
}
.font_9 {
  font-size: 9px;
  line-height: 14px;
}
.font_10 {
  font-size: 10px;
  line-height: 16px;
}
.font_12 {
  font-size: 12px;
  line-height: 18px;
}
.font_14 {
  font-size: 14px;
  line-height: 18px;
}
.font_16 {
  font-size: 16px;
  line-height: 24px;
}
.font_22 {
  font-size: 22px;
  line-height: 25px;
}
.font_24 {
  font-size: 24px;
  line-height: 34px;
}
.font_26 {
  font-size: 26px;
  line-height: 39px;
}
.font_28 {
  font-size: 28px;
  line-height: 32px;
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
.um {
  font-size: 36px;
  line-height: 54px;
  color: #007ab3;
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
  height: 40px;
}
.left_plan {
  padding: 20px 24px 24px 16px;
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
  font-size: 48px;
  font-family: "semi-bold";
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
.last {
  grid-template-columns: auto auto 115px;
}
.flex-right {
  width: 100%;
}
.last .box_item {
  padding: 15px 10px 12px 11px;
}
.left_tabs_plan .nav-pills .nav-link.active {
  border-right: 6px solid #13a0d3;
  opacity: 1;
}
/* left_tabs_plan */
.custom_grid_1 {
  width: 53%;
  padding: 10px 10px;
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
  padding: 0 0 0 8px;
  height: 50%;
}
.custom_grid_2 div:last-child {
  border-bottom: none;
}

.left_plan {
  padding: 25px 24px 24px 16px;
}
.um {
  font-size: 36px;
  line-height: 54px;
  color: #007ab3;
}
</style>
