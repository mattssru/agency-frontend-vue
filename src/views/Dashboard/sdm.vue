<script>
import { Button, Card, CircleProgress, Modal } from "@components";
import { CardExpend } from "@components/Dashboard";
import IconTabsFirst from "@components/icons/IconTabsFirst.vue";
import IconTabsSecon from "@components/icons/IconTabsSecon.vue";
export default {
  name: "Dashboard-sdm",
  components: {
    Button,
    Card,
    IconTabsFirst,
    IconTabsSecon,
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
    };
  },
  methods: {},
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
          <div>
            <div class="row">
              <div class="col-md-7 nopaddingright">
                <div class="p-3 p-lg-2 px-xl-3">
                  <div class="mb-2">
                    <span class="text_medium font_semi color_title"
                      >ยอดขายสะสมรวม</span
                    >&nbsp;
                    <span class="text_large font_semi color_primary"
                      >288,000</span
                    >&nbsp;
                    <span class="color_primary text_small font_semi">บาท</span>
                  </div>
                  <div class="color_pink font_semi">
                    <span class="text_medium">ยังขาดอีก</span>&nbsp;
                    <span class="text_semi">312,000 บาท</span>&nbsp;
                    <span>เพื่อรักษาสัญญาต่อ</span>
                  </div>
                </div>
              </div>
              <div class="col-md-5 nopaddingleft">
                <div class="right_topic h-100 p-3 p-lg-2 px-xl-3 assets_plan">
                  <p class="text_small font_medium color_primary">
                    จำนวนตัวแทนที่ยังมีสัญญา
                  </p>
                  <p class="font_medium">(ไม่รวมตนเอง)</p>
                  <div
                    class="d-inline-flex align-items-center text_large font_semi color_green"
                  >
                    <img
                      src="@assets/image/true_green.svg"
                      alt=""
                      class="me-1"
                    />
                    169
                    <img
                      src="@assets/image/icon_user_green.svg"
                      alt=""
                      width="19"
                      height="23"
                      class="ms-1"
                    />
                  </div>
                  <p class="d-inline-flex ms-2" style="font-size: 10px">
                    (เป้าหมายที่ต้อง ทำได้8 คน)
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
          <div
            class="left_plan d-flex align-items-center justify-content-start px-4"
            style="height: calc(100% - 45px)"
          >
            <div
              class="d-flex align-items-center text_xl font_semi color_primary"
            >
              <img
                src="@assets/image/um.svg"
                alt=""
                class="me-2"
                height="38"
                width="38"
              />
              AVP
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
                  <div class="grid_3" style="margin-bottom: 15px">
                    <div class="box_item d-flex align-items-center py-3">
                      <div class="assets_plan">
                        <p class="font_medium color_title mb-2">
                          อายุงานในระดับ AL
                        </p>
                        <p
                          class="text_large font_semi color_yellow d-flex mb-1"
                        >
                          21 เดือน
                        </p>
                        <p>(เป้าหมายที่ต้องทำได้ 24 เดือน)</p>
                      </div>
                    </div>
                    <div class="box_item d-flex align-items-center py-3">
                      <div class="assets_plan">
                        <p class="font_medium mb-2 color_title">
                          PC สะสมของหน่วย
                        </p>
                        <p
                          class="text_large font_semi color_green d-flex align-items-center mb-1"
                          style
                        >
                          <img
                            src="@assets/image/true_green.svg"
                            alt=""
                            class="me-2"
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
                        >
                          850,000
                        </p>
                        <p>(เป้าหมายที่ต้องทำได้ 1,250,000 บาท)</p>
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
                          <p class="font_medium color_title">จำนวนหน่วย</p>
                          <p class="text_small color_title font_medium mb-2">
                            (รวมหน่วยตนเอง)
                          </p>
                          <p class="text_large font_semi color_green">
                            <img src="@assets/image/true_green.svg" alt="" />
                            รวม 10
                          </p>
                          <p>(เป้าหมายที่ต้องทำได้ 10 หน่วย)</p>
                        </div>
                        <div class="custom_grid_2">
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <p class="font_semi color_pink">2 หน่วยลูก</p>
                            <p>(เป้าหมายที่ต้องทำได้ 3 หน่วยลูก)</p>
                          </div>
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <p class="font_semi color_pink">0 หน่วยหลาน</p>
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
                      <img
                        src="@assets/image/icon_congrat.svg"
                        alt=""
                        class="me-3 mb-3"
                        height="60"
                      />
                      <div class="assets_plan text-center">
                        <p class="font_medium color_title text_md color_title">
                          ประมาณการอัตราความยั่งยืน<br />
                          ล่วงหน้าสะสม 19 เดือน<br />
                          ณ เดือน ธ.ค. 2565
                        </p>
                        <div class="font_semi text_large color_green mt-3 mb-1">
                          81%
                        </div>
                        <p>(เป้าหมายที่ต้องทำได้ 80%)</p>
                      </div>
                    </div>
                    <div>
                      <div class="box_item d-flex align-items-center mb-3">
                        <CircleProgress
                          :percent="80"
                          :width="12"
                          color="#FAB600"
                          class="me-3"
                        />
                        <div class="assets_plan">
                          <p
                            class="color_title font_medium d-inline-block me-1"
                          >
                            PC สะสมของหน่วย
                          </p>
                          <p class="color_gray">(ม.ค. - ธ.ค. 2565)</p>
                          <p class="text_large font_semi color_yellow mt-2">
                            1,200,000
                          </p>
                          <p>(เป้าหมายที่ต้องทำได้ 1,500,000 บาท)</p>
                        </div>
                      </div>
                      <div class="box_item d-flex align-items-center">
                        <CircleProgress
                          :percent="75"
                          :width="12"
                          color="#F86200"
                          class="me-3"
                        />
                        <div class="assets_plan">
                          <p class="font_medium color_title me-1">
                            จำนวนตัวแทน (รวมตนเอง)
                          </p>
                          <p class="color_gray">
                            ที่ PC >= 30,000 (ม.ค. - ธ.ค. 2565)
                          </p>
                          <p
                            class="mt-2 text_large font_semi d-inline-flex align-items-center"
                            style="color: #f86200"
                          >
                            6
                            <img
                              src="@assets/image/icon_user_orange.svg"
                              alt=""
                              class="ms-1 me-2"
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
                <option selected>ไตรมาสที่ 2 ปี 2565</option>
                <option value="1">ไตรมาสที่ 3 ปี 2565</option>
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
                  <p class="mb-2 color_gray">(ต.ค. 2564 - ก.ย. 2565)</p>
                  <p class="text_large font_semi color_yellow d-flex">
                    1,350,000
                  </p>
                  <p>(เป้าหมายที่ต้องทำได้ 1,500,000 PC)</p>
                </div>
              </div>
              <div class="box_item d-flex align-items-center">
                <div class="assets_plan">
                  <p class="font_medium color_title">จำนวนตัวแทน</p>
                  <p class="mb-2 color_gray">
                    ที่ PC >= 30,000 (เม.ย. - มิ.ย. 2565)
                  </p>
                  <p
                    class="text_large font_semi color_green d-flex align-items-center"
                  >
                    <img
                      src="@assets/image/true_green.svg"
                      alt=""
                      width="27"
                      height="31"
                      class="me-2 mb-2"
                    />
                    9
                    <img
                      src="@assets/image/icon_user_green.svg"
                      alt=""
                      class="ms-2"
                    />
                  </p>
                  <p>(เป้าหมายที่ต้องทำได้ 8 คน)</p>
                </div>
              </div>
              <div class="box_item d-flex align-items-center">
                <div class="assets_plan">
                  <p class="font_medium color_title">จำนวน UM ใหม่</p>
                  <p class="mb-2 color_gray">(ก.ค. 2564 - มิ.ย. 2565)</p>
                  <p
                    class="text_large font_semi color_pink d-flex align-items-center"
                  >
                    0
                    <img
                      src="@assets/image/icon_user_pink.svg"
                      alt=""
                      class="ms-2"
                    />
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
.footer {
  margin-top: 7px;
}
.title_modal {
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
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
