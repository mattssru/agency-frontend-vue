<script>
import { CircleProgress, Tree, Avatar } from "@components";
import SideBar from "@components/LayoutStructure/Sidebar.vue";

export default {
  name: "StructureAgent-Child",
  components: {
    Tree,
    CircleProgress,
    SideBar,
    Avatar,
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
      data: {
        gender: "female",
      },
    };
  },
};
</script>

<template>
  <SideBar>
    <div class="container-fluid p-0">
      <div class="box_item p-3 mb-3">
        <div class="d-flex">
          <div class="image_user me-4">
            <Avatar :gender="data.gender" :image="data.image" />
          </div>
          <div class="grid_2 w-100">
            <div>
              <p class="tag_title mb-2 color_primary font_medium">
                สมใจนึก มิตรสุพรรณพรสกุล
              </p>
              <div class="detail_user">
                <p class="text_small">ชื่อหน่วยงาน</p>
                <p class="text_small">: GHI</p>
                <p class="text_small">ตำแหน่งปัจจุบัน</p>
                <p class="text_small">: Agent (AG)</p>
                <p class="text_small">รหัสตัวแทน</p>
                <p class="text_small">: 423456</p>
                <p class="text_small">รหัสหน่วย</p>
                <p class="text_small">: 111222</p>
              </div>
            </div>
            <div>
              <p class="tag_title none_991 mb-2 color_primary font_medium"></p>
              <div class="detail_user border-0">
                <p class="text_small">รหัสกลุ่ม</p>
                <p class="text_small">: 000111</p>
                <p class="text_small">เลขที่ใบอนุญาต</p>
                <p class="text_small">: 1234567890</p>
                <p class="text_small">เลขที่ IC License</p>
                <p class="text_small">: 0987654321</p>
              </div>
              <router-link
                to="/summary-report"
                class="font_medium color_primary text_small d-flex align-items-center text-decoration-underline line_heght_24"
              >
                <img
                  src="@assets/image/icon_profile_2.svg"
                  alt=""
                  class="me-2"
                />
                ดูผลงานรายเดือนย้อนหลัง
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box_item p-3">
      <div class="grid_2 mb-3">
        <div class="box_item">
          <p class="font_16 font_medium color_title d-inline-flex">
            PC สะสมของสายงาน
          </p>
          <p class="color_gray d-inline-flex ms-2">(ม.ค. 65 - ธ.ค. 65)</p>
          <p class="font_medium color_title mb-2">
            (ใช้ในการดูการเลื่อนตำแหน่งในระดับ AVP)
          </p>
          <p class="text_large font_semi color_blue">874,330</p>
        </div>
        <div class="box_item">
          <p class="font_16 font_medium color_title d-inline-flex">
            PC สะสมของหน่วยตนเอง
          </p>
          <p class="color_gray d-inline-flex ms-2">(ม.ค. 65 - ธ.ค. 65)</p>
          <p class="font_medium color_title mb-2">
            (ใช้ในการดูการเลื่อนตำแหน่งในระดับ AVP)
          </p>
          <p class="text_large font_semi color_blue">343,440</p>
        </div>
        <div class="box_item">
          <p class="font_16 font_medium color_title">
            ประมาณการอัตราความยั่งยืน
          </p>
          <p class="color_title font_medium">
            ล่วงหน้าสะสม 19 เดือน ของสายงาน ณ เดือน ธ.ค. 2565
          </p>
          <p class="font_medium color_title mb-2">
            (ใช้ในการดูการเลื่อนตำแหน่งในระดับ AVP)
          </p>
          <p class="text_large font_semi color_blue">72.34%</p>
        </div>
        <div class="box_item">
          <p class="font_16 font_medium color_title">
            ประมาณการอัตราความยั่งยืน
          </p>
          <p class="color_title font_medium">
            ล่วงหน้าสะสม 19 เดือน ของหน่วยตนเอง ณ เดือน ธ.ค. 2565
          </p>
          <p class="font_medium color_title mb-2">
            (ใช้ในการดูการเลื่อนตำแหน่งในระดับ AVP)
          </p>
          <p class="text_large font_semi color_blue">81.76%</p>
        </div>
      </div>
      <div class="box_item p-0">
        <div class="grid_3 custom">
          <div class="p-3 border_right">
            <p class="font_16 font_medium color_title d-inline-flex">
              จำนวน AL ใต้สังกัด
            </p>
            <p class="color_title d-inline-flex">(รวมหน่วยตนเอง)</p>
            <p class="text_large font_semi color_blue">0</p>
          </div>
          <div class="p-3 border_right">
            <p class="font_16 font_medium color_title">จำนวนหน่วยลูก</p>
            <p class="text_large font_semi color_blue">3</p>
          </div>
          <div class="p-3">
            <p class="font_16 font_medium color_title">จำนวนหน่วยหลาน</p>
            <p class="text_large font_semi color_blue">0</p>
          </div>
        </div>
      </div>
    </div>
  </SideBar>
</template>

<style scoped>
.font_16 {
  font-size: 16px;
  line-height: 24px;
}
.color_blue {
  color: #13a0d3;
}
.border_right {
  border-right: 1px solid #cbcbcb;
}
.grid_3.custom {
  grid-template-columns: 270px auto auto;
  gap: 0;
}
.tag_title {
  font-size: 16px;
  line-height: 22px;
  height: 22px;
}
.image_user {
  max-width: 80px;
  width: 100%;
  height: 80px;
  border-radius: 100%;
}
.image_user img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.detail_user {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-right: 1px solid #cbcbcb;
}
.detail_user p,
.line_heght_24 {
  line-height: 24px;
}
.head_box {
  border-bottom: 1px solid #e0e0e0;
  height: 40px;
}

@media (max-width: 991px) {
  .grid_2 {
    grid-template-columns: repeat(1, 1fr) !important;
    gap: 0;
  }
  .detail_user {
    border-right: none;
  }
  .none_991 {
    display: none;
  }
}
</style>
