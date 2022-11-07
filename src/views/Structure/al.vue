<script>
import { CircleProgress, Tree } from "@components";
import SideBar from "@components/LayoutStructure/Sidebar.vue";

export default {
  name: "StructureAgent-Child",
  components: {
    Tree,
    CircleProgress,
    SideBar,
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
    return {};
  },
};
</script>

<template>
  <SideBar>
    <div class="container-fluid p-0">
      <div class="box_item p-3 mb-3">
        <div class="d-flex">
          <div class="image_user me-4">
            <img src="@assets/image/user.png" alt="" />
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
  </SideBar>
</template>

<style scoped>
.grid_2 {
  gap: 30px;
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
.size_12 {
  font-size: 12px;
  line-height: 18px;
}
.size_18 {
  font-size: 18px;
  line-height: 28px;
}
.size_20 {
  font-size: 20px;
  line-height: 30px;
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
