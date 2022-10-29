<template>
  <div class="custom-radio-input">
    <div class="form-check d-inline-flex align-items-center">
      <input
        class="form-check-input me-2"
        type="radio"
        name="selectMonth"
        @change="onChange"
        checked
        id="6"
      />
      <label class="form-check-label" for="6">6 เดือน</label>
    </div>
    <div class="form-check d-inline-flex align-items-center">
      <input
        class="form-check-input me-2"
        type="radio"
        name="selectMonth"
        id="12"
        @change="handleChange"
      />
      <label class="form-check-label" for="12">12 เดือน</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onChange: {
      type: Function,
    },
  },
  methods: {
    handleChange(e) {
      this.$emit("input", e.target.value);
      this.onChange(e.target.value);
    },
  },
};
</script>

<style>
.custom-radio-input {
  margin-right: auto;
  display: flex;
  justify-content: space-between;
}
.custom-radio-input .form-check {
  margin: 0;
  min-height: inherit;
}
.custom-radio-input input {
  width: 16px;
  height: 16px;
  border: 1px solid #cbcbcb;
  margin-top: 0;
}
.custom-radio-input .form-check-input:checked[type="radio"] {
  background-image: url(@assets/image/radio.svg);
  border: none;
}
label {
  font-size: 14px;
  color: #414141;
  line-height: 21px;
}
@media (max-width: 991px) {
  .custom-radio-input {
    flex-direction: column;
  }
}
</style>
