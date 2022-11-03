<script>
export default {
  name: "CardExpend",
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
};
</script>

<template>
  <div class="card-expand">
    <div :style="{ height: '140px', display: show ? 'block' : 'none' }"></div>
    <div :class="show ? 'show box_item' : 'box_item'">
      <div class="d-flex">
        <div>
          <div class="profile_user me-3 mb-2" :class="data.rankCode">
            <img src="@assets/image/img_user.svg" alt="" />
          </div>
          <img
            v-if="data.rankCode === 'premier'"
            src="@assets/image/premier.svg"
            alt=""
            width="64"
            height="13"
          />
          <img
            v-if="data.rankCode === 'elite'"
            src="@assets/image/logo-elite-rank.svg"
            alt=""
            width="64"
            height="19"
          />
        </div>
        <div class="custom-profile">
          <div class="name_user color_primary font_medium">
            คุณ{{ `${data.firstname} ` }}
            <span style="display: inline-block">
              {{ ` ${data.lastname}` }}</span
            >
          </div>
          <div :class="show ? 'detail_user' : 'detail_user mb-2'">
            <p>ชื่อหน่วยงาน</p>
            <p>: {{ data.organizationName }}</p>
            <p>ตำแหน่งปัจจุบัน</p>
            <p>: {{ data.rank }}</p>
          </div>
          <Transition>
            <div
              :class="show ? 'detail_user mb-2' : 'detail_user'"
              v-show="show"
            >
              <p>รหัสตัวแทน</p>
              <p>: {{ data.code }}</p>
              <p>รหัสหน่วย</p>
              <p>: {{ data.codeOrganization }}</p>
              <p>รหัสกลุ่ม</p>
              <p>: {{ data.codeGroup }}</p>
              <p>เลขที่ใบอนุญาติ</p>
              <p>: {{ data.no }}</p>
              <p>เลขที่ IC License</p>
              <p>: {{ data.licenseNo }}</p>
            </div>
          </Transition>
          <router-link
            v-if="this.$route.path !== '/structure-agent'"
            to="/structure-agent"
            class="font_medium color_primary text_small d-flex align-items-center mb-2 text-decoration-underline"
          >
            <img src="@assets/image/icon_profile_1.svg" alt="" class="me-2" />
            ดูโครงสร้างและหน่วยงานภายใต้ตัวแทน
          </router-link>
          <router-link
            to="/summary-report"
            class="font_medium color_primary text_small d-flex align-items-center text-decoration-underline"
          >
            <img src="@assets/image/icon_profile_2.svg" alt="" class="me-2" />
            ดูผลงานรายเดือนย้อนหลัง
          </router-link>
        </div>
      </div>
      <div class="btnAbsolute">
        <button
          @click="show = !show"
          class="btnExpend d-flex align-items-center justify-content-center"
        ></button>
      </div>
    </div>
  </div>
  <div :class="show ? 'show bg-overlay' : ''"></div>
</template>

<style lang="scss" scoped>
.show.box_item .btnExpend::after {
  transform: rotate(-180deg);
}
.btnAbsolute {
  position: absolute !important;
  top: 10px;
  right: 15px;
  z-index: 50;
}
.btnExpend {
  position: relative !important;
  padding: 0;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background-color: #c3e7f4;
  border: none;
  opacity: 0.7;
  position: relative;
}
.btnExpend::after {
  content: "";
  background-image: url(@assets/image/icon_down.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
  width: 10px;
  height: 10px;
  transition: transform 0.2s ease-in-out;
}
.custom-profile {
  min-height: 120px;
}
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
  //position: relative;
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
  border-radius: 100%;
}
.profile_user.premier,
.profile_user.elite {
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
  grid-template-columns: minmax(auto, 95px) minmax(95px, auto);
}
.v-enter-active,
.v-leave-active {
  overflow: hidden;
  transition: all 0.05s ease;
  position: absolute;
  opacity: 0;
}

.v-enter-from,
.v-leave-to {
  height: 0;
}
</style>
