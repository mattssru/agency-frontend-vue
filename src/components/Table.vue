<script>
import { formatNumber } from "@utils/helper";

export default {
  name: "Card",
  props: {
    data: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  methods: {
    formatNumber,
  },
  // created() {
  //   // props are exposed on `this`
  //   console.log(this.title)
  // }
};
</script>
<template>
  <div class="box-table">
    <div class="header table-color">
      <div>เดือน</div>
      <div>PC สะสมของตนเอง</div>
      <div>PC สะสมของหน่วย</div>
      <div>จำนวนรายของหน่วย</div>
      <div>PC สะสมของสายงาน</div>
    </div>
    <div class="wrap-body">
      <div
        class="body"
        v-for="(item, index) in data"
        :key="index"
        :class="{
          last: index === data.length - 2,
          footer: index === data.length - 1,
        }"
      >
        <div>{{ item.name }}</div>
        <div>{{ formatNumber(item.pc, 2) }}</div>
        <div>{{ formatNumber(item.pc_team, 2) }}</div>
        <div>{{ item.count }}</div>
        <div>{{ formatNumber(item.pc_branch, 2) }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box-table {
  border: 1px solid #bababa;
  font-family: "regular";
  font-size: 16px;
  position: relative;
  color: #414141;
}
.header {
  position: absolute;
  width: 100%;
  display: flex;
  font-family: "medium";
  background-color: #b5dae6;
  padding-right: 6px;
  div {
    display: flex;
    align-items: center;
    border-right: 1px solid #bababa;
    width: max-content;
    flex: 1;
    justify-content: center;
    height: 40px;
  }
  div:last-child {
    border: none;
  }
}
.wrap-body {
  margin-top: 40px;
  max-height: 463px;
  overflow: hidden;
  overflow-y: scroll;
  margin-bottom: 40px;
}

.body {
  display: flex;
  border-bottom: 1px solid #e0e0e0;

  div {
    padding: 13px 24px;
    width: 130px;
    display: flex;
    align-items: center;
    border-right: 1px solid #bebebe;
    width: max-content;
    flex: 1;
    justify-content: flex-end;
    font-size: 16px;
  }
  div:first-child {
    justify-content: center;
  }
  div:last-child {
    border: none;
  }
}
.body:first-child {
  div {
    padding-top: 25px;
  }
}
.body:last-child,
.last {
  border: none;
}
.last div {
  padding-bottom: 25px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #b5dae6;
  font-family: "medium";
  padding-right: 8px;
}
.wrap-body::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 8px;
}

.wrap-body::-webkit-scrollbar-thumb {
  border-radius: 8px;
  border: 2px solid white; /* should match background, can't be transparent */
  background-color: #cbcbcb;
}
</style>
