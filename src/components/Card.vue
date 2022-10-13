<script>
export default {
  name: "Card",
  props: ["title", "icon"],
  // created() {
  //   // props are exposed on `this`
  //   console.log(this.title)
  // }
};
</script>
<template>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div class="col-auto">
          <div v-if="icon" class="text-primary">
            <i class="align-middle" :data-feather="icon"></i>
            <img src="@assets/image/doc.svg" alt="" />
          </div>
        </div>
        <div class="col mt-0">
          <h5 v-if="title" class="card-title">{{ title }}</h5>
        </div>
      </div>
    </div>
    <div class="card-body">
      <h1 class="mt-1 mb-3">2.382</h1>
      <div class="mb-0">
        <span class="text-danger">
          <i class="mdi mdi-arrow-bottom-right"></i> หกหกก
        </span>
        <span class="text-muted">test</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-card {
  border-bottom: 1px solid;
}
</style>
