<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";

export default {
  name: "Progress",
  components: {
    CircleProgress,
  },
  props: {
    size: {
      type: Number,
      default: 180,
    },
    width: {
      type: Number,
      default: 12,
    },
    percent: {
      type: Number,
      require: true,
    },
    color: {
      type: String,
      default: "red",
    },
    bgColor: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="custom-circle">
    <circle-progress
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
