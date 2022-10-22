<script>
export default {
  name: "Tree",
  props: {
    title: String,
  },
  data() {
    return {
      agent: {
        name: "ลักษมีแข เจริญประภาธนพล",
        code: "123456 (AG)",
        id: 1,
        teams: [
          {
            name: "อารียา รัตนาอธิการบดี",
            code: "123456 (AG)",
            id: 11,
            teams: [
              {
                name: "อารียา 111111",
                code: "111111 (AG)",
                id: 111,
              },
              {
                name: "อารียา 222222",
                code: "222222 (AG)",
                id: 112,
              },
            ],
          },
          {
            name: "สมเจตนา พรสุภาภรโชติ",
            code: "234567 (AG)",
            id: 12,
            teams: [
              {
                name: "สมเจตนา 111111",
                code: "111111 (AG)",
                id: 121,
              },
              {
                name: "สมเจตนา 222222",
                code: "222222 (AG)",
                id: 122,
              },
            ],
          },
          {
            name: "ดนุพล จันทราสุวรรณะ",
            code: "345678 (AG)",
            id: 13,
          },
          {
            name: "ธนชัย อารยะวิธิสกุล",
            code: "456789 (AG)",
            id: 14,
          },
          {
            name: "นทีธร นพประทาน",
            code: "567890 (AG)",
            id: 15,
            teams: [
              {
                name: "นทีธร 111111",
                code: "111111 (AG)",
                id: 151,
              },
              {
                name: "นทีธร 222222",
                code: "222222 (AG)",
                id: 152,
              },
            ],
          },
        ],
      },
    };
  },
  // created() {
  //   // props are exposed on `this`
  //   console.log(this.title)
  // }
};
</script>
<template>
  <div>
    <p class="font_semi text_small">{{ agent.name }}</p>
    <span class="text_xs">{{ agent.code }}</span>
    <ul class="tree">
      <li v-for="child in agent.teams" :key="child.id">
        <p class="font_semi text_small">{{ child.name }}</p>
        <p class="text_xs">{{ child.code }}</p>
        <ul>
          <li v-for="c in child.teams" :key="c.id">
            <p class="font_semi text_small">{{ c.name }}</p>
            <p class="text_xs">{{ c.code }}</p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.tree,
.tree ul {
  margin: 0 0 0 1em; /* indentation */
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
