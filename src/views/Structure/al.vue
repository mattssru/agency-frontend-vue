<script>
import { CircleProgress, Tree, Avatar } from "@components";
import { CardAll } from "@components/Dashboard";
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
        gender: "female",
      },
      agentData: {
        firstname: "ลักษมีแข",
        lastname: "เจริญประภาการธนพล",
        gender: "female",
        image: null,
        rankPath: "al",
        unitName: "GHI",
        rank: "Unit Manager (UM)",
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
    </div>
    <div class="box_item p-3">
      <div class="grid_2 mb-3">
        <div class="box_item">
          <p class="font_16 font_medium color_title d-inline-flex">
            PC สะสมของหน่วยตนเอง
          </p>
          <p class="color_gray d-inline-flex ms-2">(ม.ค. 65 - ธ.ค. 65)</p>
          <p class="font_medium color_title mb-2">
            (ใช้ในการดูการเลื่อนตำแหน่งในระดับ AL)
          </p>
          <p class="text_large font_semi color_blue">874,330</p>
        </div>

        <div class="box_item">
          <p class="font_16 font_medium color_title">
            ประมาณการอัตราความยั่งยืน
          </p>
          <p class="color_title font_medium">
            ล่วงหน้าสะสม 19 เดือน ของหน่วยตนเอง ณ เดือน ธ.ค. 2565
          </p>
          <p class="font_medium color_title mb-2">
            (ใช้ในการดูการเลื่อนตำแหน่งในระดับ AL)
          </p>
          <p class="text_large font_semi color_blue">72.34%</p>
        </div>
        <div class="box_item">
          <p class="font_16 font_medium color_title d-inline-flex">
            PC สะสมของสายงาน
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
</style>
