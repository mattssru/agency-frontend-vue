<template>
  <div class="custon-radio-input">
    <label for="6">
      <input
        type="radio"
        name="radio"
        value="6"
        id="6"
        @change="$emit('input', '6')"
      />
      6
    </label>
    <label for="12">
      <input
        type="radio"
        name="radio"
        value="12"
        id="12"
        @change="$emit('input', '12')"
      />
      12
    </label>
  </div>
</template>

<script>
export default {};
</script>

<style>
.custon-radio-input {
  width: 60%;
  margin: 20px auto;
  padding: 15px 20px;

  display: flex;
  justify-content: space-between;
}
</style>
