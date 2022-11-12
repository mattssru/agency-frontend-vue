<script>
import { CardAll } from "@components/Dashboard";
import { Avatar, CircleProgress, Tree } from "@components";
import SideBar from "@components/LayoutStructure/Sidebar.vue";

export default {
  name: "StructureAgent-Child",
  components: {
    Tree,
    CircleProgress,
    SideBar,
    Avatar,
    CardAll,
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
        gender: "male",
        image: null,
      },
      agentData: {
        firstname: "อารียา",
        lastname: "รัตนาอธิการบดี",
        gender: "female",
        image: null,
        rankPath: "ag",
        unitName: "GHI",
        rank: "Agent (AG)",
        agentId: 123456,
        unitId: 111222,
        groupId: 111222,
        licenseId: 1234567890,
        icId: 8987654321,
      },
    };
  },
};
</script>

<template>
  <div class="container-fluid p-0">
    <div class="col-lg-12">
      <div class="expend_mobile mb-3">
        <CardAll :data="agentData" />
      </div>
      <div class="box_item p-0 mb-3">
        <div
          class="head_box d-flex justify-content-between align-items-center px-3"
        >
          <div
            class="text_medium color_primary font_semi d-flex align-items-center"
          >
            <img src="@assets/image/doc.svg" alt="" class="me-2" />
            วางแผนรักษาสัญญา
          </div>
          <p class="text_small color_pink mb-0">เหลือเวลาอีก 64 วัน</p>
        </div>
        <div class="body_box d-flex align-items-center p-3">
          <div
            class="box_item_in d-flex align-items-center justify-content-center"
          >
            <CircleProgress :percent="48" class="me-5" :size="150" />
            <div class="assets_plan">
              <p class="font_22 font_semi color_title">
                PC สะสม
                <span class="font_38 font_semi color_primary">288,000</span>
              </p>
              <p class="mb-2 color_gray">(ก.ค. 65 - ธ.ค. 65)</p>
              <p class="color_pink font_semi font_22">
                ยังขาดอีก 312,000 PC
                <span class="color_pink font_semi size_18">
                  เพื่อรักษาสัญญาต่อ</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid_2 {
  gap: 30px;
}
.font_18 {
  font-size: 18px;
  line-height: 28px;
}
.font_22 {
  font-size: 22px;
  line-height: 32px;
}
.font_38 {
  font-size: 38px;
  line-height: 46px;
}
.box_item_in {
  background-color: #fff;
  box-shadow: 0 0 16px rgb(0 0 0 / 12%);
  border-radius: 8px;
  width: 100%;
  min-height: 269px;
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
