<script>
export default {
  name: "SuccessIcon",
  props: {
    percent: {
      type: Number,
      default: 0,
    },
  },
  methods: {},
};
</script>

<template>
  <div
    v-if="percent > 79.99"
    class="custom-success d-flex align-items-center flex-column"
  >
    <img src="@assets/image/icon_congrat.svg" alt="" class="" height="60" />
    <span
      class="font_semi text_small"
      :style="{ color: getColorTextPercent(percent), 'margin-top': '2px' }"
    >
      {{ percent }}<span :style="{ 'font-size': '10px' }">%</span>
    </span>
  </div>
  <div v-else class="d-flex custom-success justify-content-center">
    <div
      class="font_semi color_pink"
      style="font-size: 24px; line-height: 36px"
      :style="{ color: getColorTextPercent(percent) }"
    >
      {{ percent }}<span :style="{ 'font-size': '14px' }">%</span>
    </div>
  </div>
</template>

<style scoped>
.custom-success {
  width: 77px;
  text-align: center;
}
</style>
