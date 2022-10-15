<script>
import { Button, Card, CardExpend, CircleProgress, Modal } from "@components";
import IconTabsFirst from "@components/icons/IconTabsFirst.vue";
import IconTabsSecon from "@components/icons/IconTabsSecon.vue";
import CardEliteExpend from "./CardEliteExpend.vue";

export default {
  name: "Dashboard-UM",
  components: {
    Button,
    Card,
    IconTabsFirst,
    IconTabsSecon,
    CircleProgress,
    CardExpend,
    Modal,
    CardEliteExpend,
  },
  data() {
    return {};
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
    <div class="container-fluid">
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
              <p class="text_small color_pink mb-0">เหลือเวลาอีก 64 วัน</p>
            </div>
            <div class="d-flex pt-3" style="padding: 0 15px">
              <CircleProgress
                :size="72"
                :percent="48"
                :width="12"
                color="#F62459"
                class="me-3"
              />
              <div>
                <div class="mb-2">
                  <span class="text_medium font_semi">Pc สะสม</span>&nbsp;
                  <span class="text_large font_semi color_primary">11,520</span
                  >&nbsp;
                  <span class="color_gray">(ก.ค. 65 - ธ.ค. 65)</span>
                </div>
                <div class="color_pink font_semi">
                  <span class="text_medium">ยังขาดอีก</span>&nbsp;
                  <span class="text_semi">12,480 PC</span>&nbsp;
                  <span>เพื่อรักษาสัญญาต่อ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <CardExpend />
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
                DM
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-sm-12 nopaddingleft">
            <div class="right_plan">
              <div class="grid_2">
                <div>
                  <div class="box_item d-flex align-items-center mb-3">
                    <CircleProgress
                      :size="72"
                      :percent="80"
                      :width="12"
                      color="#FAB600"
                      class="me-3"
                    />
                    <div class="assets_plan">
                      <p class="font_medium d-inline-block me-1">
                        PC สะสมของหน่วย
                      </p>
                      <p class="color_gray">(ม.ค. 65 - มิ.ย. 65)</p>
                      <p class="text_large font_semi color_yellow mt-2">
                        320,000
                      </p>
                      <p>(เป้าหมายที่ต้องทำได้ 400,000 PC)</p>
                    </div>
                  </div>
                  <div class="box_item d-flex align-items-center">
                    <CircleProgress
                      :size="72"
                      :percent="75"
                      :width="12"
                      color="#F86200"
                      class="me-3"
                    />
                    <div class="assets_plan">
                      <p class="font_medium me-1">จำนวนตัวแทนที่แนะนำโดยตรง</p>
                      <p class="color_gray">
                        ที่ PC >= 30,000 (ม.ค. 65 - ธ.ค. 65)
                      </p>
                      <p
                        class="mt-2 text_large font_semi d-inline-flex align-items-center"
                        style="color: #f86200"
                      >
                        5
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
                    <p class="font_medium">ประมาณการอัตราความยั่งยืน</p>
                    <p class="font_medium text_small mb-2">
                      ล่วงหน้าสะสม 19 เดือน ของสายงาน
                    </p>
                    <p class="font_medium text_small mb-2">ณ เดือน ธ.ค. 2565</p>
                    <div class="font_semi text_large color_green mt-3">
                      88.88%
                    </div>
                    <p>(เป้าหมายที่ต้องทำได้ 80%)</p>
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
            <div class="left_plan">
              <div class="um d-flex align-items-center mb-3">
                <img
                  src="@assets/image/logo-elite.svg"
                  alt=""
                  class="mx-auto"
                />
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
                    <p class="font_medium">PC สะสมของหน่วย</p>
                    <p class="mb-2 color_gray">(ก.ค. 2564 - มิ.ย. 2565)</p>
                    <p class="text_large font_semi color_green d-flex">
                      <img
                        src="@assets/image/icon_congrat.svg"
                        alt=""
                        width="27"
                        height="31"
                        class="me-2 mb-2"
                      />
                      1,600,000
                    </p>
                    <p>(เป้าหมายที่ต้องทำได้ 1,500,000 PC)</p>
                  </div>
                </div>
                <div class="box_item d-flex align-items-center">
                  <div class="assets_plan">
                    <p class="font_medium">จำนวนตัวแทน</p>
                    <p class="mb-2 color_gray">
                      ที่ PC >= 30,000 (เม.ย. - มิ.ย. 2565)
                    </p>
                    <p
                      class="text_large font_semi color_green d-flex align-items-center"
                    >
                      <img
                        src="@assets/image/icon_congrat.svg"
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
                    <p class="font_medium">จำนวน UM ใหม่</p>
                    <p class="mb-2 color_gray">(ก.ค. 2564 - มิ.ย. 2565)</p>
                    <p
                      class="text_large font_semi color_pink d-flex align-items-center"
                    >
                      1
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard {
  background: #003781;
  padding: 20px;
  height: 100vh;
}
.head_box {
  border-bottom: 1px solid #e0e0e0;
}
.share_modal {
  cursor: pointer;
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
.condition .form-check-input:checked {
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
  height: 100%;
}
.right_plan .tab-pane:first-child .box_item {
  height: 105px;
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
.table_premier .table_custom {
  min-width: 900px;
}
.border_right {
  border-right: 1px solid #e0e0e0;
}
</style>
