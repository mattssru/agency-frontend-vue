<script>
import { Button, Modal } from "@components";
import RadioImage from "./RadioImage.vue";

export default {
  name: "ModalShare",
  components: {
    Button,
    Modal,
    RadioImage,
  },
  data() {
    return {
      selectFile: "",
      checkedNames: [],
      showModal: false,
    };
  },
  methods: {
    handleClick(e) {
      this.selectFile = e.target.value;
    },
  },
};
</script>

<template>
  <modal id="exampleModal" :active="checkedNames.length !== 0 && !!selectFile">
    <template #header>Share ผลงานของคุณ</template>
    <template #body>
      <div class="title_modal color_secondary">
        กรุณาเลือกผลงานที่คุณต้องการแชร์
      </div>
      <div class="row mb-5 custom-checkbox">
        <div class="col-md-4">
          <label
            for="1"
            class="share_check mb-3 mb-md-0"
            :class="{ checked: checkedNames.find((i) => i === '1') }"
          >
            <div class="img_share_check">
              <img
                src="@assets/image/share1.svg"
                alt=""
                class="mb-3"
                height="55.98"
              />
            </div>

            <input type="checkbox" id="1" value="1" v-model="checkedNames" />
            <p class="title_modal mb-0">วางแผน<br />รักษาสัญญา</p>
          </label>
        </div>
        <div class="col-md-4">
          <label
            for="2"
            class="share_check mb-3 mb-md-0"
            :class="{ checked: checkedNames.find((i) => i === '2') }"
          >
            <div class="img_share_check">
              <img
                src="@assets/image/share2.svg"
                alt=""
                class="mb-3"
                height="56.11"
              />
            </div>
            <input type="checkbox" id="2" value="2" v-model="checkedNames" />
            <p class="title_modal mb-0">วางแผน<br />เลื่อนตำแหน่ง</p>
          </label>
        </div>
        <div class="col-md-4">
          <label
            for="3"
            class="share_check mb-3 mb-md-0"
            :class="{ checked: checkedNames.find((i) => i === '3') }"
          >
            <div class="img_share_check">
              <img
                src="@assets/image/share3.svg"
                alt=""
                class="mb-3"
                height="53.46"
              />
            </div>
            <input type="checkbox" id="3" value="3" v-model="checkedNames" />
            <p class="title_modal mb-0">Elite AG /<br />Premier AG</p>
          </label>
        </div>
      </div>
      <div class="title_modal color_secondary">กรุณาเลือกประเภทของไฟล์</div>
      <RadioImage :onchange="handleClick" />
    </template>
  </modal>
</template>

<style lang="scss" scoped>
.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
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
  width: 142px;
  text-align: center;
  //padding: 0 25px;
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
.share_check.checked::after {
  display: block;
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
.share_check:hover,
.share_check.checked {
  background-color: #e7f5fb;
  border: 2px solid #007ab3;
}

.title_modal {
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
}
</style>
