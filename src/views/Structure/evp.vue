<script>
import { CircleProgress, Tree } from "@components";
import { CardExpend, CardAll } from "@components/Dashboard";
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
    CardAll,
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
    <div class="row">
      <div class="col-lg-12">
        <div class="expend_mobile mb-3">
          <CardAll :data="agentData" />
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
      </div>
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
  height: 45px;
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
  grid-template-columns: auto auto 179px;
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
