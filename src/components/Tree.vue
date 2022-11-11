<script>
import Avatar from "./Avatar.vue";

export default {
  name: "Tree",
  components: { Avatar },
  props: {
    data: Object,
  },
  data() {
    return {
      agent: [],
    };
  },
  methods: {
    findLength(arr) {
      return arr.length === 0;
    },
    setSelect(value) {
      return true;
    },
  },
  created() {
    const { teams } = this.data;
    this.agent = teams.map((team) => {
      if (team.teams) {
        const child = team.teams;
        team.teams = child.map((c) => ({
          ...c,
          open: false,
        }));
      }
      return {
        ...team,
        open: false,
      };
    });
  },
  computed: {
    route() {
      return this.$route.path;
    },
  },
};
</script>
<template>
  <div class="agent-profile">
    <div class="profile">
      <Avatar :gender="data.gender" :image="data.image" class="profile_img" />
      <router-link :to="`/structure-agent/${data.role}`" class="details">
        <p class="font_semi text_small color_primary">{{ data.name }}</p>
        <span class="text_xs font_regular color_gray">{{ data.code }}</span>
      </router-link>
    </div>
  </div>
  <div class="wrap-tree">
    <ul class="tree first">
      <li v-for="child in agent" :key="child.id">
        <div
          class="child-1 d-flex"
          :class="[{ active: child.open }, child.role]"
        >
          <button
            v-if="!findLength(child.teams)"
            @click="child.open = !child.open"
            :class="[{ active: child.open }]"
            class="btnExpend d-flex align-items-center justify-content-center"
          ></button>

          <div
            :class="{
              selected: route === `/structure-agent/${child.id}/${child.role}`,
            }"
            class="lables"
          >
            <router-link :to="`/structure-agent/${child.id}/${child.role}`">
              <p class="name font_regular color_title text_small">
                {{ child.name }}
              </p>
              <p class="text_xs font_regular color_gray">{{ child.code }}</p>
            </router-link>
          </div>
        </div>
        <ul class="second" v-show="child.open">
          <li v-for="c in child.teams" :key="c.id">
            <div class="d-flex" :class="[{ active: c.open }, c.role]">
              <button
                v-if="c.teams && !findLength(c.teams)"
                @click="c.open = !c.open"
                :class="[{ active: c.open }]"
                class="btnExpend d-flex align-items-center justify-content-center"
              ></button>
              <div
                class="lables"
                :class="{
                  selected: route === `/structure-agent/${c.id}/${c.role}`,
                }"
              >
                <router-link :to="`/structure-agent/${c.id}/${c.role}`">
                  <p class="font_regular color_title text_small">
                    {{ c.name }}
                  </p>
                  <p class="text_xs font_regular color_gray">{{ c.code }}</p>
                </router-link>
              </div>
            </div>
            <ul v-show="c.open">
              <li v-for="a in c.teams" :key="a.id">
                <div class="d-flex" :class="[{ active: c.open }, a.role]">
                  <div
                    class="lables"
                    :class="{
                      selected: route === `/structure-agent/${a.id}/${a.role}`,
                    }"
                  >
                    <router-link :to="`/structure-agent/${a.id}/${a.role}`">
                      <p class="font_regular color_title text_small">
                        {{ a.name }}
                      </p>
                      <p class="text_xs font_regular color_gray">
                        {{ a.code }}
                      </p>
                    </router-link>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.agent-profile {
  padding: 14px;
  padding-bottom: 0;
}
.child-1.active .name {
  color: var(--azy-bluedark-color);
  //text-decoration: underline;
}
.profile_img {
  height: 48px;
  width: 48px;
  border: 2px solid #b59d5e;
  border-radius: 50%;
  z-index: 10;
}
.profile {
  position: relative;
  display: flex;
}
.details {
  position: absolute;
  left: 25px;
  flex-direction: column;
  background-color: #f0f0f0;
  height: 48px;
  width: 220px;
  padding-left: 36px;
  justify-content: center;
  display: flex;
}
.btnExpend {
  position: relative !important;
  padding: 0;
  margin-top: 10px;
  margin-right: 3px;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background-color: #c3e7f4;
  border: none;
  position: relative;
}
.btnExpend::after {
  content: "";
  background-image: url(@assets/image/ag-icon.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
  width: 10px;
  height: 10px;
  //transition: transform 0.2s ease-in-out;
  //transform: rotate(0deg);
  background-size: 12px;
}
.active.btnExpend::after {
  transform: rotate(-180deg);
}
.wrap-tree {
  overflow: auto;
  height: calc(100vh - 247px);
  margin-bottom: 60px;
  padding-top: 0;
}
.tree {
  margin-right: 20px;
}
.al .btnExpend {
  background-color: #c3e7f4;
}
.al .btnExpend::after {
  background-image: url(@assets/image/al-icon.svg);
}
.al .active.btnExpend {
  background-color: #13a0d3;
}

.al .active.btnExpend::after,
.ag .active.btnExpend::after {
  background-image: url(@assets/image/icon-expanded.svg);
  background-size: 10px;
}
.ag .btnExpend {
  background-color: #a0c0ea;
}
.ag .btnExpend::after {
  background-image: url(@assets/image/ag-icon.svg);
}
.ag .btnExpend.active {
  background-color: #003781;
}
.tree,
.tree ul {
  margin: 0 0 0 3.1em; /* indentation */
  padding: 0;
  list-style: none;
  color: #cbcbcb;
  position: relative;
}

.tree ul {
  margin-left: 8px;
} /* (indentation/2) */

.submenu {
  //margin-right: 20px;
  max-width: calc(100% + 10vw);
  width: 100%;
}
.tree:before,
.tree ul:before,
.second ul:before {
  content: "";
  display: block;
  width: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  border-left: 1.5px solid;
}

.tree li {
  margin: 0;
  padding: 0; /* indentation + .5em */
  line-height: 6em; /* default list item's `line-height` */
  font-weight: bold;
  position: relative;
  padding-top: 16px;
  padding-left: 13px;
  width: max-content;
  p {
    white-space: nowrap;
  }
}

.tree li:before,
.second li:before {
  content: "";
  display: block;
  width: 10px; /* same with indentation */
  height: 0;
  border-top: 1.5px solid;
  margin-top: -1px; /* border top width */
  position: absolute;
  top: 3em; /* (line-height/2) */
  left: 0;
}

.tree li:last-child:before {
  background: white; /* same with body background */
  height: auto;
  top: 3em; /* (line-height/2) */
  bottom: 0;
}
.second li:before {
  border-top: 1.5px dashed;
}
ul.second:before,
.second ul:before {
  border-left: 1.5px dashed;
}
.lables {
  padding: 10px;
  border-radius: 10px;
  width: max-content;
  margin-right: 15px;
}
.ag .selected {
  background-color: #8bb4ea;
  .color_gray {
    color: #414141;
  }
  .color_title {
    color: #003781;
    font-family: "medium";
  }
}
.al .selected {
  background-color: #c3e7f4;
  .color_gray {
    color: #414141;
  }
  .color_title {
    color: #003781;
    font-family: "medium";
  }
}

.wrap-tree::-webkit-scrollbar {
  -webkit-appearance: none;
}
.wrap-tree::-webkit-scrollbar:vertical {
  width: 8px;
}
.wrap-tree::-webkit-scrollbar:horizontal {
  height: 8px;
}

.wrap-tree::-webkit-scrollbar-thumb {
  border-radius: 8px;
  border: 2px solid white; /* should match background, can't be transparent */
  background-color: #cbcbcb;
}
</style>
