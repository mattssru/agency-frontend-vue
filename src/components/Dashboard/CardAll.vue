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
  <div class="box_item p-3 mb-3">
    <div class="d-flex">
      <div class="image_user me-4">
        <Avatar :gender="data.gender" :image="data.image" />
      </div>
      <div class="w-100">
        <div class="row">
          <div class="col-lg-12">
            <p class="tag_title mb-2 color_primary font-medium">
              คุณ{{ `${data.firstname} ` }}
              <span style="display: inline-block">
                {{ ` ${data.lastname}` }}</span
              >
            </p>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="detail_user">
                <p class="text_small">ชื่อหน่วยงาน</p>
                <p>: {{ data.unitName }}</p>
                <p class="text_small">ตำแหน่งปัจจุบัน</p>
                <p>: {{ data.rank }}</p>
                <p class="text_small">รหัสตัวแทน</p>
                <p>: {{ data.agentId }}</p>
                <p class="text_small">รหัสหน่วย</p>
                <p>: {{ data.unitId }}</p>
              </div>
            </div>
            <div class="col-lg-6">
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
                class="font_medium color_primary text_small d-flex align-items-center text-decoration-underline"
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
  </div>

  <div class="card-expand" style="display: none">
    <div class="row box_item">
      <div class="col-lg-1">
        <div class="profile_user me-3 mb-2" :class="data.rankCode">
          <Avatar :gender="data.gender" :image="data.image" />
        </div>
      </div>
      <div class="col-lg-11">
        <div class="col-lg-12">
          <div class="name_user color_primary font_medium">
            คุณ{{ `${data.firstname} ` }}
            <span style="display: inline-block">
              {{ ` ${data.lastname}` }}</span
            >
          </div>
        </div>
        <div class="row">
          <div class="col-lg-5">
            <div class="custom-profile">
              <div :class="show ? 'detail_user' : 'detail_user mb-2'">
                <p>ชื่อกลุ่ม</p>
                <p>: {{ data.code }}</p>
                <p>ตำแหน่งปัจจุบัน</p>
                <p class="wrap-position" :class="{ 'full-text': show }">
                  : {{ data.rank }}
                </p>
                <p>รหัสตัวแทน</p>
                <p>: {{ data.code }}</p>
                <p>รหัสหน่วย</p>
                <p>: {{ data.codeOrganization }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="custom-profile">
              <div :class="show ? 'detail_user' : 'detail_user mb-2'">
                <p>ชื่อกลุ่ม</p>
                <p>: {{ data.code }}</p>
                <p>ตำแหน่งปัจจุบัน</p>
                <p class="wrap-position" :class="{ 'full-text': show }">
                  : {{ data.rank }}
                </p>
                <p>รหัสตัวแทน</p>
                <p>: {{ data.code }}</p>
                <p>รหัสหน่วย</p>
                <p>: {{ data.codeOrganization }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div :class="show ? 'show bg-overlay' : ''"></div>
</template>

<style lang="scss" scoped>
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
.wrap-position {
  max-width: 160px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.full-text {
  white-space: unset;
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
  grid-template-columns: minmax(1fr, 95px) minmax(95px, auto);
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
.font-medium {
  font-size: 16px;
  font-family: prompt-medium;
}
</style>
