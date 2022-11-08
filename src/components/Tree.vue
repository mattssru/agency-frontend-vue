<script>
export default {
  name: "Tree",
  props: {
    data: Object,
  },
  data() {
    return {
      agent: [],
    };
  },
  methods: {
    handleClick(id) {
      const temp = this.agent;
      this.agent = temp.map((item) => {
        if (item.id === id) {
          return { ...item, open: !item.open };
        } else {
          return item;
        }
      });
    },
    findLength(arr) {
      return arr.length === 0;
    },
  },
  created() {
    const { teams } = this.data;

    this.agent = teams.map((team) => ({
      ...team,
      open: false,
    }));
  },
};
</script>
<template>
  <div class="wrap-tree">
    <div class="agent-profile">
      <div class="profile">
        <img
          v-if="data.gender === 'female'"
          src="@assets/image/profile-female.png"
          alt=""
          class="profile_img"
        />
        <img
          v-else
          src="@assets/image/profile-male.png"
          alt=""
          class="profile_img"
        />
        <router-link :to="`/structure-agent`" class="details">
          <p class="font_semi text_small color_primary">{{ data.name }}</p>
          <span class="text_xs font_regular color_gray">{{ data.code }}</span>
        </router-link>
      </div>
    </div>
    <ul class="tree">
      <li v-for="child in agent" :key="child.id">
        <div class="child-1 d-flex" :class="{ active: child.open }">
          <button
            v-if="!findLength(child.teams)"
            @click="handleClick(child.id)"
            :class="{ active: agent.find((item) => item.id === child.id).open }"
            class="btnExpend d-flex align-items-center justify-content-center"
          ></button>

          <router-link :to="`/${child.role}/structure-agent/${child.id}`">
            <p class="name font_regular color_title text_small">
              {{ child.name }}
            </p>
            <p class="text_xs font_regular color_gray">{{ child.code }}</p>
          </router-link>
        </div>
        <ul v-show="agent.find((item) => item.id === child.id).open">
          <li v-for="c in child.teams" :key="c.id">
            <router-link
              :to="`/${c.role}/structure-agent/${c.id}`"
              class="child-2"
            >
              <p class="font_regular color_title text_small">
                {{ c.name }}
              </p>
              <p class="text_xs font_regular color_gray">{{ c.code }}</p>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.child-1 {
}
.child-1.active .name {
  color: var(--azy-bluedark-color);
  text-decoration: underline;
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
  margin-right: 10px;
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
  transform: rotate(0deg);
}
.active.btnExpend::after {
  transform: rotate(-180deg);
}
.wrap-tree {
  overflow: scroll;
  padding: 14px;
  height: calc(100vh - 190px);
  margin-bottom: 60px;
}
.tree,
.tree ul {
  margin: 0 0 0 2em; /* indentation */
  padding: 0;
  list-style: none;
  color: #cbcbcb;
  position: relative;
}

.tree ul {
  margin-left: 0.5em;
} /* (indentation/2) */

.tree:before,
.tree ul:before {
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
  padding: 0 1.5em; /* indentation + .5em */
  line-height: 6em; /* default list item's `line-height` */
  font-weight: bold;
  position: relative;
  padding-top: 28px;
}

.tree li:before {
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
</style>
