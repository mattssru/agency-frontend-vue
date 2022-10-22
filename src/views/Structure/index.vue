<script>
import { Tree } from "@components";

export default {
  name: "StructureAgent",
  components: {
    Tree,
  },
};
</script>

<template>
  <main class="content">
    <div class="container-fluid p-0">
      <h1 class="h3 mb-3">โครงสร้างตัวแทนใต้สังกัด</h1>
      <Tree />
    </div>
  </main>
</template>

<style scoped></style>
