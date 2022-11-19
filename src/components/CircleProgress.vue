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
    percent: {
      type: Number,
      require: true,
      default: 0,
    },
    bgColor: {
      type: String,
    },
    size: {
      type: Number,
      default: 72,
    },
  },
  data() {
    return {};
  },
  methods: {
    getColorRank,
    calDegree(value) {
      const degree = ((360 / 100) * value) / 2;
      return degree + "deg";
    },
  },
  computed: {
    halfSize() {
      return `${this.size / 2}px`;
    },
    outSize() {
      return `${this.size}px`;
    },
    inSize() {
      return `${this.size - this.size * 0.35}px`;
    },
    fontInSize() {
      return `${this.size * 0.278}px`;
    },
    precentInSize() {
      return `${this.size * 0.1667}px`;
    },
    color() {
      const color = this.bgColor || this.getColorRank(this.percent);
      return color;
    },
    isSuccess() {
      return this.percent === 100;
    },
    degree() {
      return this.calDegree(this.percent);
    },
  },
  // mounted() {
  //   this.degree = this.calDegree(this.percent);
  // },
};
</script>

<template>
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
    class="wrap-img"
    :height="size - size * 0.15 || '60'"
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
  width: v-bind(outSize);
  height: v-bind(outSize);
  background: #dddddd;
  border-radius: 50%;
  border: 1px solid #dddddd;
}
.wrap-img {
  min-width: v-bind(outSize);
}

.circle-wrap .circle .mask,
.circle-wrap .circle .fill {
  width: v-bind(outSize);
  height: v-bind(outSize);
  position: absolute;
  border-radius: 50%;
}

.circle-wrap .circle .mask {
  clip: rect(0px, v-bind(outSize), v-bind(outSize), v-bind(halfSize));
}

.circle-wrap .inside-circle {
  width: v-bind(inSize);
  height: v-bind(inSize);
  border-radius: 50%;
  background: #ffffff;
  /* line-height: 120px; */
  /* text-align: center; */
  /* margin: auto; */
  color: #1e51dc;
  z-index: 45;
  font-size: v-bind(fontInSize);
  font-family: "semi-bold";
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 6px;
}
.circle-wrap .inside-circle span {
  font-size: v-bind(precentInSize);
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
  clip: rect(0px, v-bind(halfSize), v-bind(outSize), 0px);
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
