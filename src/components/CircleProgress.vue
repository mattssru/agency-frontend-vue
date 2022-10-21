<script>
// import "vue3-circle-progress/dist/circle-progress.css";
// import CircleProgress from "vue3-circle-progress";
import { getColorRank } from "@utils/helper";

export default {
  name: "Progress",
  components: {
    //CircleProgress,
  },
  props: {
    size: {
      type: Number,
      default: 72,
    },
    width: {
      type: Number,
      default: 12,
    },
    percent: {
      type: Number,
      require: true,
      default: 0,
    },
    bgColor: {
      type: String,
    },
  },
  data() {
    const degree = ((360 / 100) * this.percent) / 2;
    return {
      color: "",
      size: "72px",
      degree: degree + "deg",
    };
  },
  methods: {
    getColorRank,
  },
  computed: {
    color() {
      this.color = this.getColorRank(this.percent);
      return this.color;
    },
    isSuccess() {
      return this.percent === 100;
    },
  },
  watch: {},
};
</script>

<template>
  <!-- ddd {{ degree }} -->
  <div class="circle-wrap" v-if="!isSuccess">
    <div class="circle">
      <div class="mask full">
        <div class="fill" :style="{ 'background-color': color }"></div>
      </div>
      <div class="mask half">
        <div class="fill" :style="{ 'background-color': color }"></div>
      </div>
      <div class="inside-circle" :style="{ color: color }">
        {{ percent }}<span>%</span>
      </div>
    </div>
  </div>
  <img
    v-else
    src="@assets/image/icon_congrat.svg"
    alt=""
    class="me-3"
    height="60"
  />

  <!-- <div class="custom-circle">
    <circle-progress
      v-if="percent !== 100"
      :size="size"
      :border-width="width"
      :border-bg-width="width"
      :percent="percent"
      :transition="1500"
      viewport
      show-percent
      linecap="line"
      :fill-color="color"
      :empty-color="bgColor"
      :style="{ color: color }"
    />
    <img
      v-else
      src="@assets/image/icon_congrat.svg"
      alt=""
      class="me-3"
      height="60"
    />
  </div> -->
</template>

<style lang="scss" scoped>
.circle-wrap {
  width: 72px;
  height: 72px;
  background: #dddddd;
  border-radius: 50%;
  border: 1px solid #dddddd;
}

.circle-wrap .circle .mask,
.circle-wrap .circle .fill {
  width: 72px;
  height: 72px;
  position: absolute;
  border-radius: 50%;
}

.circle-wrap .circle .mask {
  clip: rect(0px, 72px, 72px, 36px);
}

.circle-wrap .inside-circle {
  width: 47px;
  height: 47px;
  border-radius: 50%;
  background: #ffffff;
  /* line-height: 120px; */
  /* text-align: center; */
  /* margin: auto; */
  color: #1e51dc;
  z-index: 45;
  font-size: 20px;
  font-family: "semi-bold";
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 6px;
}
.circle-wrap .inside-circle span {
  font-size: 12px;
  margin-top: 6px;
}

/* color animation */
.circle {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 3rd progress bar */
.mask .fill {
  clip: rect(0px, 36px, 72px, 0px);
  background-color: #227ded;
}

.mask.full,
.circle .fill {
  animation: fill ease-in-out 3s;
  transform: rotate(v-bind(degree));
}

@keyframes fill {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(v-bind(degree));
  }
}
</style>
