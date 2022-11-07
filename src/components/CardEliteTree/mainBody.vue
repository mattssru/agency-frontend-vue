<script>
import IconPerson from "@components/icons/IconPerson.vue";
import { formatNumber, getColorProgressBar } from "@utils/helper";
import ProgressBar from "./progressBar.vue";
export default {
  name: "MainBody",
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    formatNumber,
    getColorProgressBar,
  },
  data() {
    return {
      show: false,
      premium_pc_min: 75000,
      premium_people_min: 9,
      elite_people_min: 12,
      elite_pc_min: 300000,
    };
  },
  components: { ProgressBar, IconPerson },
  computed: {
    colorPc() {
      const colorPc = this.getColorProgressBar(this.data.percent_pc);
      return colorPc;
    },
    colorPeople() {
      const colorPeople = this.getColorProgressBar(this.data.percent_people);
      return colorPeople;
    },
  },
};
</script>
<template>
  <div class="d-flex">
    <div class="flex-left">
      <div class="head_premier d-flex flex-column justify-content-center">
        <div class="text_16 color_primary font_semi d-flex align-items-center">
          <img src="@assets/image/icon_elite.svg" alt="" class="me-2" />
          Elite / Premier AG
        </div>
        <p class="text_3">
          ผลงาน {{ data.current_q }}. {{ data.current_q_title }}
        </p>
      </div>
      <div class="bottom_premier">
        <div class="d-flex justify-content-between align-items-center">
          <p class="text_small">PC รวม :</p>
          <p
            class="text_semibold font_semi text_semibold"
            :style="{ color: colorPc }"
          >
            {{ formatNumber(data.pc) }}
          </p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <p class="text_small">จำนวนราย :</p>
          <p
            class="text_semibold font_semi d-flex align-items-center"
            :style="{ color: colorPeople }"
          >
            {{ formatNumber(data.people) }}
            <IconPerson class="ms-2" :color="colorPeople" />
          </p>
        </div>
      </div>
    </div>

    <div class="flex-right">
      <div class="head_premier right_premier padding_custom">
        <div class="grid_2 items_flexend align-items-center">
          <div
            class="logo-premium"
            :class="{
              active:
                premium_pc_min < data.pc && premium_people_min < data.people,
            }"
          >
            <img src="@assets/image/premier_active.svg" alt="" />
          </div>
          <div
            class="logo-elite"
            :class="{
              active:
                elite_pc_min <= data.pc && elite_people_min <= data.people,
            }"
          >
            <img src="@assets/image/elite_active.svg" alt="" class="" />
          </div>
        </div>
        <div class="btnAbsolute">
          <button
            @click="show = !show"
            class="btnExpend d-flex align-items-center justify-content-center"
          ></button>
        </div>
      </div>
      <div class="bottom_right_premier">
        <ProgressBar :data="data" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.second .btnExpend::after {
  transform: rotate(0deg);
}
.btnAbsolute {
  position: absolute !important;
  top: 20px;
  right: 15px;
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
  transform: rotate(-180deg);
}

button {
  position: absolute;
}

.logo-premium,
.logo-elite {
  opacity: 0.3;
}
.logo-premium.active,
.logo-elite.active {
  opacity: 1;
}
.head_premier {
  height: 60px;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
}
.head_premier .grid_2 {
  grid-template-columns: repeat(2, 1fr) !important;
}
.right_premier,
.bottom_right_premier {
  border-left: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}
.custom-step {
  position: relative;
}
.custom-progress {
  min-height: 55px;
  display: flex;
  align-items: center;
}
.text-step-second {
  position: absolute;
  width: max-content;
  top: 6px;
}
.step-first {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.step-second {
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: -3px;
  top: 0;
}
.bottom_premier {
  padding: 15px;
  min-height: 120px;
  border-bottom: 1px solid #e0e0e0;
}
.bottom_right_premier {
  padding: 15px 50px 0px 15px;
  min-height: 120px;
}

.items_flexend {
  justify-items: flex-end;
}
.padding_custom {
  padding-right: 50px;
}
.padding_custom .grid_2 {
  gap: 0;
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
.flex-left {
  min-width: 204px;
  max-width: 204px;
}
.flex-right {
  width: 100%;
}
.text_16 {
  font-size: 16px;
  line-height: 24px;
}
.text_13 {
  font-size: 13px;
  line-height: 19px;
}
@media (max-width: 991px) {
  .padding_custom {
    padding-right: 15px;
    gap: 0;
  }
  .bottom_right_premier {
    padding: 15px;
  }
}
</style>
