<script>
import { Button, Card, CardExpend, CircleProgress, Modal } from "@components";
import IconTabsFirst from "@components/icons/IconTabsFirst.vue";
import IconTabsSecon from "@components/icons/IconTabsSecon.vue";

export default {
  name: "Dashboard",
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
      showModal: false,
      picked: "One",
    };
  },
  methods: {
    handleClickModal() {
      this.showModal = false;
      console.log("CloseModal");
    },
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
                UM
              </div>
              <div class="condition mb-4">
                <p class="text_small mb-2">เงื่อนไข</p>
                <div class="d-flex justify-content-between">
                  <div
                    class="form-check d-inline-flex align-items-center mb-0 me-2"
                  >
                    <input
                      class="form-check-input mt-0 me-2"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label
                      class="form-check-label text_small"
                      for="inlineCheckbox1"
                      >6 เดือน</label
                    >
                  </div>
                  <div class="form-check d-inline-flex align-items-center mb-0">
                    <input
                      class="form-check-input mt-0 me-1"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label
                      class="form-check-label text_small"
                      for="inlineCheckbox2"
                      >12 เดือน</label
                    >
                  </div>
                </div>
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
            <div class="right_plan">
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div class="grid_2">
                    <div class="box_item d-flex align-items-center">
                      <img
                        src="@assets/image/icon_congrat.svg"
                        alt=""
                        class="me-3"
                        height="60"
                      />
                      <div class="assets_plan">
                        <p class="font_medium d-inline-block me-1">
                          PC สะสมของตนเอง
                        </p>
                        <span class="color_gray">(ม.ค. 65 - มิ.ย. 65)</span>
                        <p class="text_large font_semi color_green">130,000</p>
                        <p class="text_small">
                          (เป้าหมายที่ต้องทำได้ 50,000 PC)
                        </p>
                      </div>
                    </div>
                    <div class="box_item d-flex align-items-center">
                      <CircleProgress
                        :size="72"
                        :percent="80"
                        :width="12"
                        color="#FAB600"
                        class="me-3"
                      />
                      <div class="assets_plan">
                        <p class="font_medium d-inline-block me-1">
                          PC สะสมของทีม
                        </p>
                        <span class="color_gray">(ม.ค. 65 - มิ.ย. 65)</span>
                        <p class="text_large font_semi color_yellow">320,000</p>
                        <p>(เป้าหมายที่ต้องทำได้ 400,000 PC)</p>
                      </div>
                    </div>
                    <div class="box_item d-flex align-items-center">
                      <div
                        class="font_semi color_pink me-3"
                        style="font-size: 24px; line-height: 36px"
                      >
                        30.56%
                      </div>
                      <div class="assets_plan">
                        <p class="font_medium">ประมาณการอัตราความยั่งยืน</p>
                        <p class="font_medium text_small">
                          ล่วงหน้าสะสม 19 เดือน
                        </p>
                        <p class="font_medium text_small">ณ เดือน มิ.ย. 2565</p>
                        <p>(เป้าหมายที่ต้องทำได้ 80%)</p>
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
                        <p class="font_medium me-1">
                          จำนวนตัวแทนที่แนะนำโดยตรง
                        </p>
                        <p
                          class="text_large font_semi d-inline-flex align-items-center"
                          style="color: #f86200"
                        >
                          3
                          <img
                            src="@assets/image/icon_user_orange.svg"
                            alt=""
                            class="ms-1 me-2"
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
                      <CircleProgress
                        :size="72"
                        :percent="30"
                        :width="15"
                        color="#F62459"
                        class="mb-3"
                      />
                      <div class="assets_plan text-center">
                        <p class="font_medium">PC สะสมของตนเอง</p>
                        <p class="font_medium text_small mb-1">
                          ก.ค. 2565 - ธ.ค. 2565
                        </p>
                        <p class="font_semi text_large color_pink mb-1">
                          180,000
                        </p>
                        <p>(เป้าหมายที่ต้องทำได้ 600,000 PC)</p>
                      </div>
                    </div>
                    <div
                      class="box_item d-flex flex-column align-items-center justify-content-center"
                    >
                      <div class="font_semi text_large color_pink mb-3">
                        30.56%
                      </div>
                      <div class="assets_plan text-center">
                        <p class="font_medium">ประมาณการอัตราความยั่งยืน</p>
                        <p class="font_medium text_small mb-2">
                          ล่วงหน้าสะสม 19 เดือน ณ เดือน มิ.ย. 2565
                        </p>
                        <p>(เป้าหมายที่ต้องทำได้ 80%)</p>
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
            <div class="head_premier d-flex flex-column justify-content-center">
              <div
                class="text_medium color_primary font_semi d-flex align-items-center"
              >
                <img src="@assets/image/icon_elite.svg" alt="" class="me-2" />
                Elite / Premier AG
              </div>
              <p class="text_small">ผลงาน Q3. ก.ค. 65 - ก.ย. 65</p>
            </div>
            <div class="bottom_premier">
              <div class="d-flex justify-content-between align-items-center">
                <p class="text_small">PC รวม :</p>
                <p class="text_semibold font_semi text_semibold color_yellow">
                  65,000
                </p>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <p class="text_small">จำนวนราย :</p>
                <p
                  class="text_semibold font_semi color_pink d-flex align-items-center"
                >
                  4
                  <img
                    src="@assets/image/icon_user_pink.svg"
                    alt=""
                    class="ms-2"
                  />
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-9 col-sm-12 nopaddingleft">
            <div class="head_premier right_premier"></div>
            <div class="bottom_right_premier"></div>
          </div>
        </div>
        <!-- <div class="table_premier table-responsive mt-4">
          <table class="table_custom">
            <thead>
              <tr>
                <th width="24.4%">
                  <div class="text_medium font_semi color_primary text-start">
                    ภาพรวมผลงานปี 2565
                  </div>
                </th>
                <th>ม.ค. - มี.ค.</th>
                <th>เม.ย. - มิ.ย.</th>
                <th>ก.ค. - ก.ย.</th>
                <th>ต.ค. - ธ.ค.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-start text_small">PC รวม (จำนวนราย)</td>
                <td>300,000 (14 ราย)</td>
                <td>80,000 (4 ราย)</td>
                <td>150,000 (9 ราย)</td>
                <td>-</td>
              </tr>
              <tr>
                <td class="text-start text_small">สถานะที่ได้รับ</td>
                <td>
                  <div>
                    <img src="@assets/image/logo_elite.svg" alt="" />
                  </div>
                </td>
                <td>
                  <div>
                    <img src="@assets/image/icon_x.svg" alt="" />
                  </div>
                </td>
                <td>
                  <div>
                    <img src="@assets/image/logo_premier.svg" alt="" />
                  </div>
                </td>
                <td>--</td>
              </tr>
            </tbody>
          </table>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard {
  background: #003781;
  padding: 20px;
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
</style>
