<script>
export default {
  name: "Button",
  props: {
    title: String,
  },
  // created() {
  //   // props are exposed on `this`
  //   console.log(this.title)
  // }
};
</script>
<template>
  <button type="button" class="btn btn-primary">{{ title }}</button>
</template>

<style scoped></style>
