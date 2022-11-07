<script>
import { CircleProgress, Tree } from "@components";

export default {
  name: "StructureAgent",
  components: {
    Tree,
    CircleProgress,
  },
  data() {
    return {
      agentList: {
        name: "ลักษมีแข เจริญประภาธนพล",
        code: "123456 (AG)",
        role: "ag",
        id: 1,
        teams: [
          {
            name: "อารียา รัตนาอธิการบดี",
            code: "123456 (SUM)",
            role: "sum",
            id: 11,
            teams: [
              {
                name: "อารียา เทพหัสดิน ณ อยุธยา",
                code: "111111 (AL)",
                id: 111,
                role: "al",
              },
              {
                name: "อารียา 222222",
                code: "222222 (AG)",
                role: "ag",
                id: 112,
              },
            ],
          },
          {
            name: "สมเจตนา พรสุภาภรโชติ",
            code: "234567 (AL)",
            role: "al",
            id: 12,
            teams: [
              {
                name: "สมเจตนา เทพหัสดิน ณ อยุธยา",
                code: "111111 (AG)",
                role: "ag",
                id: 121,
              },
              {
                name: "สมเจตนา 222222",
                code: "222222 (AG)",
                role: "ag",
                id: 122,
              },
            ],
          },
          {
            name: "ดนุพล จันทราสุวรรณะ",
            code: "345678 (SUM)",
            id: 13,
            role: "sum",
            teams: [],
          },
          {
            name: "ธนชัย อารยะวิธิสกุล",
            code: "456789 (AG)",
            id: 14,
            teams: [],
            role: "ag",
          },
          {
            name: "นทีธร นพประทาน",
            code: "567890 (AG)",
            id: 15,
            role: "ag",
            teams: [
              {
                name: "นทีธร เทพหัสดิน ณ อยุธยา",
                code: "111111 (AG)",
                role: "ag",
                id: 151,
              },
              {
                name: "นทีธร 222222",
                code: "222222 (AG)",
                role: "ag",
                id: 152,
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<template>
  <div class="layout-flex">
    <div class="sidebar-tree">
      <div
        class="title-sidebar d-flex align-items-center justify-content-center"
      >
        <div class="text_medium color_primary font_semi">
          โครงสร้างตัวแทนใต้สังกัด
        </div>
      </div>
      <Tree :data="agentList" />
      <div
        class="footer-sidebar d-flex align-items-center justify-content-center"
      >
        <router-link to="/" class="btn custom-btn color_primary font_medium">
          ย้อนกลับ
        </router-link>
      </div>
    </div>
    <div class="wrapper-main">
      <slot></slot>
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
  </div>
</template>

<style scoped>
.layout-flex {
  display: flex;
  width: 100%;
}
.title-sidebar {
  height: 55px;
  border: 1px solid #e0e0e0;
  margin-bottom: 16px;
}
.sidebar-tree {
  min-width: 260px;
  max-width: 260px;
  background-color: #fff;
  position: relative;
}
.tree-sidebar {
  padding-left: 14px;
}
.wrapper-main {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 54px);
  min-width: 0;
  width: 100%;
  overflow: hidden;
  padding: 20px 16px;
  background-color: #003781;
}
.footer-sidebar {
  height: 60px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background: #fff;
}
.footer {
  position: absolute;
  bottom: 0;
}
.footer p {
  font-size: 10px;
}
.custom-btn {
  border: 1px solid #003781;
  width: 200px;
  height: 32px;
}
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
