<template>
  <div v-for="item in options" :key="item.value">
    <input
      type="radio"
      :id="item.value"
      :value="item.value"
      v-model="selectProduct"
      @change="handleChange"
    />
    <label :for="item.value" :data-label="item.value" class="radio">
      <div class="check-icon" :for="item.value" :data-label="item.value">
        <span>{{ label }}</span>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: "Radio",
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectProduct: null,
    };
  },
  methods: {
    handleChange(e) {
      const { value } = e.target;
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
