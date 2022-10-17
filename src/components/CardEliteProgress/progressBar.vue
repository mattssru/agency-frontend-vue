<script>
import { formatNumber } from "@utils/helper";
export default {
  name: "ProgressBar",
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    formatNumber,
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
};
</script>
<template>
  <div class="row custom-progress">
    <div class="flex-1">
      <div class="progress" style="height: 10px">
        <div
          class="progress-bar bg-warning"
          role="progressbar"
          aria-label="Success example"
          :style="{ width: data.percent_pc + '%' }"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="grid_2 items_flexend align-items-center custom-step">
        <div class="step-first">
          <img src="@assets/image/icon_polygon.svg" alt="" class="" />
          <div class="text-step-second">
            {{ formatNumber(premium_pc_min) }}
          </div>
        </div>
        <div class="step-second">
          <img src="@assets/image/icon_polygon.svg" alt="" class="" />
          <div class="text-step-second">
            {{ formatNumber(elite_pc_min) }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="flex-1">
      <div class="progress" style="height: 10px">
        <div
          class="progress-bar bg-danger"
          role="progressbar"
          aria-label="Success example"
          :style="{ width: data.percent_people + '%' }"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="grid_2 items_flexend align-items-center custom-step">
        <div class="step-first">
          <img src="@assets/image/icon_polygon.svg" alt="" class="" />
          <div class="text-step-second">{{ premium_people_min }} ราย</div>
        </div>
        <div class="step-second">
          <img src="@assets/image/icon_polygon.svg" alt="" class="" />
          <div class="text-step-second">{{ elite_people_min }} ราย</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
.items_flexend {
  justify-items: flex-end;
}
</style>
