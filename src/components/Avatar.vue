<script>
export default {
  name: "Avatar",
  props: {
    gender: {
      type: String,
      default: "female",
    },
    image: {
      type: String,
      default: null,
    },
  },
  methods: {
    getImgUrl(gender) {
      const image = {
        female: "profile-female.png",
        male: "profile-male.png",
      };
      var images = new URL(`../assets/image/${image[gender]}`, import.meta.url);
      return images;
    },
  },
};
</script>
<template>
  <img :src="image || getImgUrl(gender)" alt="" />
</template>

<style scoped></style>
