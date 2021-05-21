<template>
  <CodeContainer lang="css" :content="content" />
</template>

<script>
import { mapState } from "vuex";
import CodeContainer from "./CodeContainer.vue";

export default {
  name: "CssMarkup",
  components: {
    CodeContainer,
  },
  computed: {
    ...mapState([
      "flexProperties",
      "flexDirection",
      "flexWrap",
      "justifyContent",
      "alignItems",
      "alignContent",
      "flexItems",
    ]),
    content() {
      // only include the css property/value if it's not the default value for that property
      let fd = "";
      let fw = "";
      let jc = "";
      let ai = "";
      let ac = "";

      if (this.flexDirection !== this.flexProperties.flexDirection[0]) {
        fd = `\n\tflex-direction: ${this.flexDirection};`;
      }
      if (this.flexWrap !== this.flexProperties.flexWrap[0]) {
        fw = `\n\tflex-wrap: ${this.flexWrap};`;
      }
      if (this.justifyContent !== this.flexProperties.justifyContent[0]) {
        jc = `\n\tjustify-content: ${this.justifyContent};`;
      }
      if (this.alignItems !== this.flexProperties.alignItems[0]) {
        ai = `\n\talign-items: ${this.alignItems};`;
      }
      if (this.alignContent !== this.flexProperties.alignContent[0]) {
        ac = `\n\talign-content: ${this.alignContent};`;
      }
      const containerCss = `.container {\n\tdisplay: flex;${fd}${fw}${jc}${ai}${ac}\n}`;

      let itemsCss = this.flexItems
        .map((it, index) => {
          let nonDefaultCount = 0;
          let o = "";
          let fg = "";
          let fs = "";
          let fb = "";
          let as = "";

          if (it.styles.order !== 0) {
            nonDefaultCount++;
            o = `\n\torder: ${it.styles.order};`;
          }

          if (it.styles.flexGrow !== 0) {
            nonDefaultCount++;
            fg = `\n\tflex-grow: ${it.styles.flexGrow};`;
          }

          if (it.styles.flexShrink !== 0) {
            nonDefaultCount++;
            fs = `\n\tflex-shrink: ${it.styles.flexShrink};`;
          }

          if (it.styles.flexBasis !== "auto") {
            nonDefaultCount++;
            fb = `\n\tflex-basis: ${it.styles.flexBasis};`;
          }

          if (it.styles.alignSelf !== "auto") {
            nonDefaultCount++;
            as = `\n\talign-self: ${it.styles.alignSelf};`;
          }

          if (nonDefaultCount > 0) {
            return `.item-${index} {${o}${fg}${fs}${fb}${as}\n}`;
          } else {
            return null;
          }
        })
        .filter((it) => it !== null);

      if (itemsCss.length > 0) {
        itemsCss = `\n\n${itemsCss.join("\n\n")}`;
      } else {
        itemsCss = "";
      }

      return `${containerCss}${itemsCss}`;
    },
  },
};
</script>
