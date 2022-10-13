<script>
import { Button } from "@components";

export default {
  name: "DefaultLayout",
  components: {
    Button,
  },
};
</script>

<template>
  <main class="content">
    <div class="container-fluid p-0">
      <h1 class="h3 mb-3">Dashboard</h1>
      <Button title="button primary" />
    </div>
  </main>
</template>

<style scoped></style>
