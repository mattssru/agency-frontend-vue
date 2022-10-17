<script>
import MainBody from "./mainBody.vue";
import { formatNumber } from "@utils/helper";
export default {
  name: "CardEliteExpand",
  components: {
    MainBody,
  },
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    formatNumber,
  },
  data() {
    return {
      show: false,
      premium_pc_min: 75000,
      premium_people_min: 9,
      elite_people_min: 12,
      elite_pc_min: 300000,
    };
  },
};
</script>
<template>
  <div class="card-extend">
    <div
      :style="{ visibility: show ? 'hidden' : 'visible' }"
      class="premier_dashboard"
    >
      <MainBody @click="show = !show" :data="data" />
    </div>
    <Transition name="slide-up">
      <div v-if="show" class="second premier_dashboard">
        <MainBody @click="show = !show" :data="data" />
        <div class="table_premier table-responsive mt-4">
          <table class="table_custom">
            <thead>
              <tr>
                <th width="24.4%">
                  <div class="text_medium font_semi color_primary text-start">
                    ภาพรวมผลงานปี {{ data.current_year }}
                  </div>
                </th>
                <th>ม.ค. - มี.ค.</th>
                <th>เม.ย. - มิ.ย.</th>
                <th>ก.ค. - ก.ย.</th>
                <th>ต.ค. - ธ.ค.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-start text_small">PC รวม (จำนวนราย)</td>
                <td>
                  {{ formatNumber(data.q1_pc) }} ({{ data.q1_people }} ราย)
                </td>
                <td>
                  {{ formatNumber(data.q2_pc) }} ({{ data.q2_people }} ราย)
                </td>
                <td>
                  {{ formatNumber(data.q3_pc) }} ({{ data.q3_people }} ราย)
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td class="text-start text_small">สถานะที่ได้รับ</td>
                <td>
                  <div>
                    <img src="@assets/image/logo_elite.svg" alt="" />
                  </div>
                </td>
                <td>
                  <div>
                    <img src="@assets/image/icon_x.svg" alt="" />
                  </div>
                </td>
                <td>
                  <div>
                    <img src="@assets/image/logo_premier.svg" alt="" />
                  </div>
                </td>
                <td>--</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Transition>
  </div>
  <div :class="show ? 'show bg-overlay' : ''"></div>
</template>

<style lang="scss" scoped>
.premier_dashboard {
  border-radius: 8px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.12);
  background-color: #fff;
  overflow: hidden;
}
.second .btnExpend::after {
  transform: rotate(0deg);
}

button {
  position: absolute;
}

.card-extend {
  position: relative;
}

.second {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 100;
}

.table_premier .table_custom {
  min-width: 900px;
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-in;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>
