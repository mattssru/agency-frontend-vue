<script setup>
import Header from "@components/Layouts/Header.vue";
import Sidebar from "@components/Layouts/Sidebar.vue";
import Footer from "@components/Layouts/Footer.vue";
</script>

<template>
  <div class="wrapper">
    <!-- <Sidebar /> -->
    <div class="main">
      <Header />
      <slot name="body"> </slot>
      <Footer />
    </div>
  </div>
</template>

<style scoped></style>
