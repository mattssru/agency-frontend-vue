<script>
export default {
  name: "Avatar",
  props: {
    gender: {
      type: String,
    },
    image: {
      type: String,
    },
  },
};
</script>
<template>
  <button type="button" class="btn btn-primary">{{ title }}</button>
</template>

<style scoped></style>
