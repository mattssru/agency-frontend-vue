<script>
import { formatNumber } from "@utils/helper";
export default {
  name: "CardEliteExpand",
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
      <div class="row">
        <div class="col-lg-3 col-sm-12 nopaddingright">
          <div class="head_premier d-flex flex-column justify-content-center">
            <div
              class="text_medium color_primary font_semi d-flex align-items-center"
            >
              <img src="@assets/image/icon_elite.svg" alt="" class="me-2" />
              Elite / Premier AG
            </div>
            <p class="text_small">
              ผลงาน {{ data.current_q }}. {{ data.current_q_title }}
            </p>
          </div>
          <div class="bottom_premier">
            <div class="d-flex justify-content-between align-items-center">
              <p class="text_small">PC รวม :</p>
              <p class="text_semibold font_semi text_semibold color_yellow">
                {{ formatNumber(data.pc) }}
              </p>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <p class="text_small">จำนวนราย :</p>
              <p
                class="text_semibold font_semi color_pink d-flex align-items-center"
              >
                {{ formatNumber(data.people) }}
                <img
                  src="@assets/image/icon_user_pink.svg"
                  alt=""
                  class="ms-2"
                />
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-9 col-sm-12 nopaddingleft">
          <div class="head_premier right_premier padding_custom">
            <div class="grid_2 items_flexend align-items-center">
              <div
                class="logo-premium"
                :class="{
                  active:
                    premium_pc_min < data.pc &&
                    premium_people_min < data.people,
                }"
              >
                <img src="@assets/image/premier_active.svg" alt="" />
              </div>
              <div
                class="logo-elite"
                :class="{
                  active:
                    elite_pc_min < data.pc && elite_people_min < data.people,
                }"
              >
                <img src="@assets/image/elite_active.svg" alt="" class="" />
              </div>
            </div>
            <div class="btnAbsolute">
              <button
                @click="show = !show"
                class="btnExpend d-flex align-items-center justify-content-center"
              ></button>
            </div>
          </div>
          <div class="bottom_right_premier">
            <div class="row custom-progress">
              <div class="flex-1">
                <div class="progress" style="height: 10px">
                  <div
                    class="progress-bar bg_yellow"
                    role="progressbar"
                    aria-label="Success example"
                    :style="{ width: data.percent_pc + '%' }"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div
                  class="grid_2 items_flexend align-items-center custom-step"
                >
                  <div class="step-first">
                    <img src="@assets/image/icon_polygon.svg" alt="" class="" />
                    <div class="text-step-second">
                      {{ formatNumber(premium_pc_min) }}
                    </div>
                  </div>
                  <div class="step-second">
                    <img src="@assets/image/icon_polygon.svg" alt="" class="" />
                    <div class="text-step-second">
                      {{ formatNumber(elite_pc_min) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="flex-1">
                <div class="progress" style="height: 10px">
                  <div
                    class="progress-bar bg_pink"
                    role="progressbar"
                    aria-label="Success example"
                    :style="{ width: data.percent_people + '%' }"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div
                  class="grid_2 items_flexend align-items-center custom-step"
                >
                  <div class="step-first">
                    <img src="@assets/image/icon_polygon.svg" alt="" class="" />
                    <div class="text-step-second">
                      {{ premium_people_min }} ราย
                    </div>
                  </div>
                  <div class="step-second">
                    <img src="@assets/image/icon_polygon.svg" alt="" class="" />
                    <div class="text-step-second">
                      {{ elite_people_min }} ราย
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Transition name="slide-up">
      <div v-if="show" class="second premier_dashboard">
        <div class="row">
          <div class="col-lg-3 col-sm-12 nopaddingright">
            <div class="head_premier d-flex flex-column justify-content-center">
              <div
                class="text_medium color_primary font_semi d-flex align-items-center"
              >
                <img src="@assets/image/icon_elite.svg" alt="" class="me-2" />
                Elite / Premier AG
              </div>
              <p class="text_small">
                ผลงาน {{ data.current_q }}. {{ data.current_q_title }}
              </p>
            </div>
            <div class="bottom_premier">
              <div class="d-flex justify-content-between align-items-center">
                <p class="text_small">PC รวม :</p>
                <p class="text_semibold font_semi text_semibold color_yellow">
                  {{ formatNumber(data.pc) }}
                </p>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <p class="text_small">จำนวนราย :</p>
                <p
                  class="text_semibold font_semi color_pink d-flex align-items-center"
                >
                  {{ formatNumber(data.people) }}
                  <img
                    src="@assets/image/icon_user_pink.svg"
                    alt=""
                    class="ms-2"
                  />
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-9 col-sm-12 nopaddingleft">
            <div class="head_premier right_premier padding_custom">
              <div class="grid_2 items_flexend align-items-center">
                <div
                  class="logo-premium"
                  :class="{
                    active:
                      premium_pc_min < data.pc &&
                      premium_people_min < data.people,
                  }"
                >
                  <img src="@assets/image/premier_active.svg" alt="" />
                </div>
                <div
                  class="logo-elite"
                  :class="{
                    active:
                      elite_pc_min < data.pc && elite_people_min < data.people,
                  }"
                >
                  <img src="@assets/image/elite_active.svg" alt="" class="" />
                </div>
              </div>
              <div class="btnAbsolute">
                <button
                  @click="show = !show"
                  class="btnExpend d-flex align-items-center justify-content-center"
                ></button>
              </div>
            </div>
            <div class="bottom_right_premier">
              <div class="row custom-progress">
                <div class="flex-1">
                  <div class="progress" style="height: 10px">
                    <div
                      class="progress-bar bg_yellow"
                      role="progressbar"
                      aria-label="Success example"
                      :style="{ width: data.percent_pc + '%' }"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div
                    class="grid_2 items_flexend align-items-center custom-step"
                  >
                    <div class="step-first">
                      <img
                        src="@assets/image/icon_polygon.svg"
                        alt=""
                        class=""
                      />
                      <div class="text-step-second">
                        {{ formatNumber(premium_pc_min) }}
                      </div>
                    </div>
                    <div class="step-second">
                      <img
                        src="@assets/image/icon_polygon.svg"
                        alt=""
                        class=""
                      />
                      <div class="text-step-second">
                        {{ formatNumber(elite_pc_min) }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="flex-1">
                  <div class="progress" style="height: 10px">
                    <div
                      class="progress-bar bg_pink"
                      role="progressbar"
                      aria-label="Success example"
                      :style="{ width: data.percent_people + '%' }"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div
                    class="grid_2 items_flexend align-items-center custom-step"
                  >
                    <div class="step-first">
                      <img
                        src="@assets/image/icon_polygon.svg"
                        alt=""
                        class=""
                      />
                      <div class="text-step-second">
                        {{ premium_people_min }} ราย
                      </div>
                    </div>
                    <div class="step-second">
                      <img
                        src="@assets/image/icon_polygon.svg"
                        alt=""
                        class=""
                      />
                      <div class="text-step-second">
                        {{ elite_people_min }} ราย
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <td class="color_green">
                  {{ formatNumber(data.q1_pc) }} ({{ data.q1_people }} ราย)
                </td>
                <td class="color_green_secondary">
                  {{ formatNumber(data.q2_pc) }} ({{ data.q2_people }} ราย)
                </td>
                <td class="color_green">
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
.btnAbsolute {
  position: absolute !important;
  top: 20px;
  right: 15px;
}
.btnExpend {
  position: relative !important;
  padding: 0;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background-color: #c3e7f4;
  border: none;
  opacity: 0.7;
  position: relative;
}
.btnExpend::after {
  content: "";
  background-image: url(@assets/image/icon_down.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
  width: 10px;
  height: 10px;
  transition: transform 0.2s ease-in-out;
  transform: rotate(-180deg);
}
.btn-container {
  display: inline-block;
  position: relative;
  height: 1em;
}

button {
  position: absolute;
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

.card-extend {
  position: relative;
}
.logo-premium,
.logo-elite {
  opacity: 0.3;
}
.logo-premium.active,
.logo-elite.active {
  opacity: 1;
}
.text_small {
  font-size: 14px;
  line-height: 17px;
}
.second {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 100;
}
.head_premier {
  height: 60px;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
}
.head_premier .grid_2 {
  grid-template-columns: repeat(2, 1fr) !important;
}
.right_premier,
.bottom_right_premier {
  border-left: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}
.custom-step {
  position: relative;
}
.custom-progress {
  min-height: 55px;
  display: flex;
  align-items: center;
}
.text-step-second {
  position: absolute;
  width: max-content;
  top: 6px;
  color: #414141;
}
.step-first {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.step-second {
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: -3px;
  top: 0;
}
.bottom_premier {
  padding: 15px;
  min-height: 120px;
  border-bottom: 1px solid #e0e0e0;
}
.bottom_right_premier {
  padding: 15px 50px 0px 23px;
  min-height: 120px;
}
.table_premier .table_custom {
  min-width: 900px;
}
.items_flexend {
  justify-items: flex-end;
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
.padding_custom {
  padding-right: 50px;
}
@media (max-width: 991px) {
  .padding_custom {
    padding-right: 15px;
  }
}
</style>
