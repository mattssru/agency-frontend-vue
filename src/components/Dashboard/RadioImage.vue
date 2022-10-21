<script>
export default {
  name: "RadioImage",
  data() {
    return {
      checked: "",
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
  <div class="custom-select d-flex">
    <label
      for="excel"
      class="btn_file"
      :class="{ checked: checked === 'excel' }"
    >
      <img src="@assets/image/icon_excel.svg" alt="" class="me-2" /> Excel
      <input
        type="checkbox"
        @change="onChange"
        id="excel"
        value="excel"
        v-model="checked"
      />
    </label>
    <label for="pdf" class="btn_file" :class="{ checked: checked === 'pdf' }">
      <img src="@assets/image/icon_pdf.svg" alt="" class="me-2" />PDF
      <input
        type="checkbox"
        id="pdf"
        @change="onChange"
        value="pdf"
        v-model="checked"
      />
    </label>
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
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cbcbcb;
  border-radius: 8px;
  height: 44px;
  max-width: 142px;
  width: 100%;
  margin-right: 24px;
}
</style>
