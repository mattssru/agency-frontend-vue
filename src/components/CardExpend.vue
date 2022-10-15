<template>
  <div class="card-expand">
    <div :class="show ? 'show box_item' : 'box_item'">
      <div class="d-flex">
        <div>
          <div class="profile_user me-3 mb-2">
            <img src="@assets/image/img_user.svg" alt="" />
          </div>
          <img src="@assets/image/premier.svg" alt="" width="64" height="13" />
        </div>
        <div class="">
          <div class="name_user color_primary font_medium">
            คุณลักษมีแข เจริญประภาการธนพล
          </div>
          <div :class="show ? 'detail_user' : 'detail_user mb-2'">
            <p>ชื่อหน่วยงาน</p>
            <p>: ภาคอาวุโส โภคทรัพย์</p>
            <p>ตำแหน่งปัจจุบัน</p>
            <p>: Agent (AG)</p>
          </div>
          <Transition>
            <div
              :class="show ? 'detail_user mb-2' : 'detail_user'"
              v-show="show"
            >
              <p>รหัสตัวแทน</p>
              <p>: 135791</p>
              <p>รหัสหน่วย</p>
              <p>: 34246802468</p>
              <p>รหัสกลุ่ม</p>
              <p>: 42086</p>
              <p>เลขที่ใบอนุญาติ</p>
              <p>: 246802468</p>
              <p>เลขที่ IC License</p>
              <p>: 08642086</p>
            </div>
          </Transition>
          <a
            href="#"
            class="font_medium color_primary text_small d-flex align-items-center mb-2 text-decoration-underline"
          >
            <img src="@assets/image/icon_profile_1.svg" alt="" class="me-2" />
            ดูโครงสร้างและหน่วยงานภายใต้ตัวแทน
          </a>
          <a
            href="#"
            class="font_medium color_primary text_small d-flex align-items-center text-decoration-underline"
          >
            <img src="@assets/image/icon_profile_2.svg" alt="" class="me-2" />
            ดูผลงานรายเดือนย้อนหลัง
          </a>
        </div>
        <span @click="show = !show">click</span>
      </div>
    </div>
  </div>
  <div :class="show ? 'show bg-overlay' : ''"></div>
</template>
<script>
export default {
  name: "CardExpend",
  data() {
    return {
      height: this.$refs.expend,
      show: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.show {
  //position: relative;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
}
.card-expand {
  position: relative;
}
.box_item {
  width: 100%;
}
.show .extend {
  z-index: 100;
}
.show.bg-overlay {
  position: absolute;
  background-color: #2e2e2e85;
  z-index: 50;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
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
.v-enter-active,
.v-leave-active {
  overflow: hidden;
  transition: all 0.5s ease;
  position: absolute;
  opacity: 0;
}

.v-enter-from,
.v-leave-to {
  height: 0;
}
</style>
