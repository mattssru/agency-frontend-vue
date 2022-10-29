<template>
  <div :class="{ loading: loading }">
    <div
      :class="{ 'spinner-border': loading }"
      class="text-primary"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "loader",
  props: ["loading"],
};
</script>
<style lang="scss">
.loading {
  position: absolute;
  background-color: #201e1ed9;
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
