<script>
export default {
  name: "Modal",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    handleClose: {
      type: Function,
    },
  },
};
</script>
<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header" id="exampleModalLabel">
          <slot name="header"></slot>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn_share"
            :class="{ active: active }"
            data-bs-dismiss="modal"
            @click="handleClose"
          >
            Share ผลงาน
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-content {
  border-radius: 12px;
}
.modal-header {
  background-color: #003781;
  color: #fff;
  font-family: "medium";
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 48px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.btn-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background-image: url(@assets/image/icon_close_white.svg);
  background-size: 15px;
  padding: 0 !important;
}
.modal-body {
  padding: 32px 83px 50px 83px;
}
.modal-dialog {
  max-width: 640px;
}
.modal-footer {
  border: none;
  padding-top: 0;
  padding-bottom: 30px;
}
.btn_share,
.btn_share:hover {
  font-size: 18px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 225px;
  width: 100%;
  margin: 0 auto;
  background-color: #cbcbcb;
  border-radius: 5px;
  color: #fff;
  cursor: unset;
}
.btn_share.active,
.btn_share.active:hover {
  background-color: #003781;
  color: #fff;
  cursor: pointer;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
</style>
