<script>
import IconElite from "@components/icons/iconElite.vue";
import { formatNumber, getColorProgressBar } from "@utils/helper";
import MainBody from "./mainBody.vue";
export default {
  name: "CardEliteExpand",
  components: {
    MainBody,
    IconElite,
  },
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    formatNumber,
    getColorProgressBar,
    getRank(value) {
      console.log(value);
      let image = "icon_x.svg";
      if (value > 0 && value < 50) {
        image = "icon_x.svg";
      } else if (value > 49 && value < 100) {
        image = "logo_premier.svg";
      } else if (value >= 100) {
        image = " logo_elite.svg";
      }
      return image;
    },
    handleClick() {
      this.show = !this.show;
    },
  },
  data() {
    return {
      show: false,
      value1: 100,
      value2: 20,
      value3: 90,
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
      <MainBody :click="handleClick" :data="data" />
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
                <td :style="{ color: getColorProgressBar(100) }">
                  {{ formatNumber(data.q1_pc) }} ({{ data.q1_people }} ราย)
                </td>
                <td :style="{ color: getColorProgressBar(20) }">
                  {{ formatNumber(data.q2_pc) }} ({{ data.q2_people }} ราย)
                </td>
                <td :style="{ color: getColorProgressBar(80) }">
                  {{ formatNumber(data.q3_pc) }} ({{ data.q3_people }} ราย)
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td class="text-start text_small">สถานะที่ได้รับ</td>
                <td>
                  <div>
                    <img
                      v-if="value1 > 0 && value1 < 50"
                      src="@assets/image/icon_x.svg"
                      alt=""
                    />

                    <img
                      v-else-if="value1 > 49 && value1 < 100"
                      src="@assets/image/logo_premier.svg"
                      alt=""
                    />
                    <img
                      v-else-if="value1 >= 100"
                      src="@assets/image/logo_elite.svg"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <div>
                    <img
                      v-if="value2 > 0 && value2 < 50"
                      src="@assets/image/icon_x.svg"
                      alt=""
                    />

                    <img
                      v-else-if="value2 > 49 && value2 < 100"
                      src="@assets/image/logo_premier.svg"
                      alt=""
                    />
                    <img
                      v-else-if="value2 >= 100"
                      src="@assets/image/logo_elite.svg"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <div>
                    <img
                      v-if="value3 > 0 && value3 < 50"
                      src="@assets/image/icon_x.svg"
                      alt=""
                    />

                    <img
                      v-else-if="value3 > 49 && value3 < 100"
                      src="@assets/image/logo_premier.svg"
                      alt=""
                    />
                    <img
                      v-else-if="value3 >= 100"
                      src="@assets/image/logo_elite.svg"
                      alt=""
                    />
                  </div>
                </td>
                <td>-</td>
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
.show.bg-overlay {
  position: absolute;
  background-color: #2e2e2e85;
  z-index: 50;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
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
