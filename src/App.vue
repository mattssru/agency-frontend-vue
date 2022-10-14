<script setup>
import Layouts from "@components/Layouts/index.vue";
</script>

<template>
  <main class="main">
    <Layouts>
      <template #body>
        <router-view />
      </template>
    </Layouts>
  </main>
</template>

<style scoped></style>
