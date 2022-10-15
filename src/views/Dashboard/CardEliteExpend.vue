<script>
export default {
  name: "CardExpend",
  data() {
    return {
      show: false,
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
            <p class="text_small">ผลงาน Q3. ก.ค. 65 - ก.ย. 65</p>
          </div>
          <div class="bottom_premier">
            <div class="d-flex justify-content-between align-items-center">
              <p class="text_small">PC รวม :</p>
              <p class="text_semibold font_semi text_semibold color_yellow">
                65,000
              </p>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <p class="text_small">จำนวนราย :</p>
              <p
                class="text_semibold font_semi color_pink d-flex align-items-center"
              >
                4
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
          <div class="head_premier right_premier">
            <div class="btnAbsolute">
              <button
                @click="show = !show"
                class="btnExpend d-flex align-items-center justify-content-center"
              ></button>
            </div>
          </div>
          <div class="bottom_right_premier"></div>
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
              <p class="text_small">ผลงาน Q3. ก.ค. 65 - ก.ย. 65</p>
            </div>
            <div class="bottom_premier">
              <div class="d-flex justify-content-between align-items-center">
                <p class="text_small">PC รวม :</p>
                <p class="text_semibold font_semi text_semibold color_yellow">
                  65,000
                </p>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <p class="text_small">จำนวนราย :</p>
                <p
                  class="text_semibold font_semi color_pink d-flex align-items-center"
                >
                  4
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
            <div class="head_premier right_premier">
              <div class="btnAbsolute">
                <button
                  @click="show = !show"
                  class="btnExpend d-flex align-items-center justify-content-center"
                ></button>
              </div>
            </div>
            <div class="bottom_right_premier"></div>
          </div>
        </div>
        <div class="table_premier table-responsive mt-4">
          <table class="table_custom">
            <thead>
              <tr>
                <th width="24.4%">
                  <div class="text_medium font_semi color_primary text-start">
                    ภาพรวมผลงานปี 2565
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
                <td>300,000 (14 ราย)</td>
                <td>80,000 (4 ราย)</td>
                <td>150,000 (9 ราย)</td>
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
.btnAbsolute {
  position: absolute !important;
  top: 10px;
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
.right_premier,
.bottom_right_premier {
  border-left: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}
.bottom_premier {
  padding: 15px;
  min-height: 120px;
  border-bottom: 1px solid #e0e0e0;
}
.bottom_right_premier {
  padding: 20px 23px 10px 23px;
  min-height: 120px;
}
.table_premier .table_custom {
  min-width: 900px;
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
</style>
