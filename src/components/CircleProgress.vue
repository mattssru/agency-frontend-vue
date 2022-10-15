<script>
import CircleProgress from "vue3-circle-progress";
import "vue3-circle-progress/dist/circle-progress.css";

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
      default: 30,
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
      default: "#E0E0E0",
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
      data-font="20px"
      style="font-size: 30"
    />
  </div>
</template>

<style lang="scss" scoped>
.custom-circle {
  ::v-deep(.current-counter)::after {
    content: "%";
  }
}
</style>
