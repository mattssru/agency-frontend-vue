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
  <div class="custom-table table-responsive">
    <table class="table align-middle table-borderless m-0">
      <thead class="table-color">
        <tr class="">
          <th>เดือน</th>
          <th>PC สะสมของตนเอง</th>
          <th>PC สะสมของหน่วย</th>
          <th>จำนวนรายของหน่วย</th>
          <th>PC สะสมของสายงาน</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in data"
          :key="index"
          :class="{
            'table-first': index === 0,
            'table-color font_medium': index === data.length - 1,
          }"
        >
          <td>{{ item.name }}</td>
          <td>{{ formatNumber(item.pc, 2) }}</td>
          <td>{{ formatNumber(item.pc_team, 2) }}</td>
          <td>{{ item.count }}</td>
          <td>{{ formatNumber(item.pc_branch, 2) }}</td>
        </tr>
        <!-- <tr>
          <td>Project Apollo</td>
          <td>01/01/2021</td>
          <td>31/06/2021</td>
          <td>31/06/2021</td>
          <td>31/06/2021</td>
        </tr>
        <tr>
          <td>Project Apollo</td>
          <td>01/01/2021</td>
          <td>31/06/2021</td>
          <td>31/06/2021</td>
          <td>31/06/2021</td>
        </tr>
        <tr>
          <td>Project Apollo</td>
          <td>01/01/2021</td>
          <td>31/06/2021</td>
          <td>31/06/2021</td>
          <td>31/06/2021</td>
        </tr>
        <tr>
          <td>Project Apollo</td>
          <td>01/01/2021</td>
          <td>31/06/2021</td>
          <td>31/06/2021</td>
          <td>31/06/2021</td>
        </tr>
        <tr>
          <td>Project Apollo</td>
          <td>01/01/2021</td>
          <td>31/06/2021</td>
          <td>31/06/2021</td>
          <td>31/06/2021</td>
        </tr> -->
      </tbody>
      <!-- <tfoot>
        <tr>
          <td>Footer</td>
          <td>01/01/2021</td>
          <td>31/06/2021</td>
          <td>31/06/2021</td>
          <td>31/06/2021</td>
        </tr>
      </tfoot> -->
    </table>
  </div>
</template>

<style scoped lang="scss">
.custom-table {
  border: 1px solid #bababa;
  td {
    border-right: 1px solid #bababa;
    border-color: #bababa !important;
    text-align: right;
    padding: 0 24px;
  }
  th {
    border-right: 1px solid #bababa;
    border-color: #bababa !important;
  }
  th,
  td:first-child {
    text-align: center;
  }

  th:last-child,
  td:last-child {
    border-right: none;
  }
  th,
  td {
    line-height: 36px;
    font-size: 16px;
    height: 40px;
  }
  th {
    height: 40px;
    padding: 0;
    vertical-align: middle;
  }
  .table-color {
    background-color: #daecf2;
    td {
    }
  }
  .table-first td {
    padding-top: 20px;
  }
}
</style>
