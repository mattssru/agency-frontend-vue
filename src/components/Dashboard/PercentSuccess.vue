<script>
export default {
  name: "PercentSuccess",
  props: {
    percent: {
      type: Number,
      default: 0,
    },
    class: {
      type: String,
    },
  },
  methods: {},
};
</script>

<template>
  <div v-if="percent > 80" class="custom-success me-3">
    <img src="@assets/image/icon_congrat.svg" alt="" class="" height="60" />
    <span :style="{ color: '#5fcd8a' }">{{ percent }}%</span>
  </div>
  <div
    v-else
    :class="class"
    class="font_semi custom-text"
    :style="{ color: '#f62459' }"
  >
    {{ percent }}%
  </div>
</template>
<style lang="scss" scoped>
.custom-success {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.custom-text {
  font-size: 24px;
  line-height: 36px;
}
</style>
