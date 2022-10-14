<template>
  <div :class="show ? 'show' : ''">
    <div @click="show = !show">click</div>
    <div class="custom-card">
      <slot> </slot>
      <Transition>
        <div ref="extend" class="extend" v-show="show">
          <slot name="expend"> </slot>
        </div>
      </Transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardExpend",
  data() {
    return {
      height: this.$refs.extend,
      show: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.show {
  position: relative;
  border: 1px solid white;
}
.custom-card {
  border-radius: 5px;
  padding: 20px;
}
.show .extend {
  z-index: 100;
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
