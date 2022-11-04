<template>
  <div :class="{ loading: loading || failed }">
    <div
      v-if="loading"
      :class="{ 'spinner-border': loading }"
      class="text-primary"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-if="!loading && failed">
      <div style="color: white">ไม่สามารถเชื่อมระบบได้ กรุณาลองใหม่อีกครั้ง</div>
      <div>
        <button class="btn btn-primary custom-btn" @click="handleRetry">
          <IconRefresh class="me-2" />
          Retry
        </button>
      </div>
    </div>
  </div>
  <slot></slot>
</template>
<script>
import IconRefresh from "@components/icons/IconRefresh.vue";
export default {
  name: "loader",
  props: ["loading", "failed", "retry"],
  components: {
    IconRefresh,
  },
  methods: {
    handleRetry(e) {
      this.retry(e);
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-btn {
  height: 40px;
  display: flex;
  align-items: center;
  svg {
    height: 20px;
  }
}
.loading {
  position: absolute;
  background-color: #201e1eb5;
  z-index: 50;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
