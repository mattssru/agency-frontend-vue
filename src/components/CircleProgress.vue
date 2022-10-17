<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import { getColorRank } from "@utils/helper";

export default {
  name: "Progress",
  components: {
    CircleProgress,
  },
  props: {
    size: {
      type: Number,
      default: 72,
    },
    width: {
      type: Number,
      default: 12,
    },
    percent: {
      type: Number,
      require: true,
    },
    bgColor: {
      type: String,
    },
  },
  data() {
    return {
      color: "",
    };
  },
  methods: {
    getColorRank,
  },
  computed: {
    color() {
      this.color = this.getColorRank(this.percent);
      return this.color;
    },
  },
};
</script>

<template>
  <div class="custom-circle">
    <circle-progress
      v-if="percent !== 100"
      :size="size"
      :border-width="width"
      :border-bg-width="width"
      :percent="percent"
      :transition="1500"
      viewport
      show-percent
      linecap="line"
      :fill-color="color"
      :empty-color="bgColor"
      :style="{ color: color }"
    />
    <img
      v-else
      src="@assets/image/icon_congrat.svg"
      alt=""
      class="me-3"
      height="60"
    />
  </div>
</template>

<style lang="scss" scoped>
.custom-circle {
  ::v-deep(.current-counter) {
    font-size: 20px;
    left: 52%;
    font-family: "semi-bold";
  }
  ::v-deep(.current-counter)::after {
    content: "%";
    font-size: 15px;
  }
}
</style>
