<script setup>
import Layouts from "@components/Layouts/index.vue";
import AG from "./views/AG/index.vue";
</script>

<template>
  <main>
    <Layouts>
      <template #body>
        <router-view />
      </template>
    </Layouts>
  </main>
</template>

<style scoped></style>
