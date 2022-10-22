<script>
export default {
  name: "Select",
  data() {
    return {
      checked: "1",
    };
  },
  methods: {
    onChange(e) {
      this.$emit("input", e.target.value);
      this.checked = e.target.value;
    },
    reset() {
      this.checked = null;
    },
  },
};
</script>

<template>
  {{ checked }}
  <div class="custom-select d-flex">
    <input
      type="checkbox"
      @change="onChange"
      id="excel"
      value="excel"
      v-model="checked"
    />
    <label
      for="excel"
      class="btn_file"
      :class="{ checked: checked === 'excel' }"
      >6
    </label>
    <input
      type="checkbox"
      id="pdf"
      @change="onChange"
      value="pdf"
      v-model="checked"
    />
    <label for="pdf" class="btn_file" :class="{ checked: checked === 'pdf' }">
      12</label
    >
  </div>
</template>

<style lang="scss" scoped>
.custom-select input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.btn_file:hover,
.btn_file.checked {
  background-color: #e7f5fb;
  border: 2px solid #007ab3;
}
.btn_file {
  width: 16px;
  height: 16px;
  border-radius: 100%;
  border: 2px solid #cbcbcb;
}
</style>
