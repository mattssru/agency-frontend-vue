<script>
import { Avatar } from "@components";

export default {
  name: "CardAll",
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  components: { Avatar },
};
</script>

<template>
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
              <p class="text_small">ชื่อกลุ่ม</p>
              <p>: {{ data.unitName }}</p>
              <p class="text_small">ตำแหน่งปัจจุบัน</p>
              <p>: {{ data.rank }}</p>
              <p class="text_small">รหัสตัวแทน</p>
              <p>: {{ data.agentId }}</p>
              <p class="text_small">รหัสหน่วย</p>
              <p>: {{ data.unitId }}</p>

            </div>
          </div>
          <div>
            <p class="tag_title none_991 mb-2 color_primary font_medium"></p>
            <div class="detail_user border-0">
              <p class="text_small">รหัสกลุ่ม</p>
              <p>: {{ data.groupId }}</p>
              <p class="text_small">เลขที่ใบอนุญาต</p>
              <p>: {{ data.licenseId }}</p>
              <p class="text_small">เลขที่ IC License</p>
              <p>: {{ data.icId }}</p>
            </div>
            <router-link
              :to="`/summary-report/${data.rankPath}`"
              class="font_medium color_primary text_small d-flex align-items-center text-decoration-underline line_heght_24"
            >
              <img src="@assets/image/icon_profile_2.svg" alt="" class="me-2" />
              ดูผลงานรายเดือนย้อนหลัง
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
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

.font-medium {
  font-size: 16px;
}
</style>
