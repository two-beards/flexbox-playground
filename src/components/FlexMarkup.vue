<template>
  <section
    class="h-full flex-1 bg-gray-100 py-6 px-8 xl:p-12 overflow-y-auto leading-normal"
  >
    <h2 class="text-3xl font-bold mb-2">Markup</h2>
    <p class="mb-4 text-lg leading-7">
      Below you will find the CSS and markup required to generate the current
      layout.<br />
      The CSS has been optimized to omit any properties which have the default
      values (e.g., <code>flex-direction: row;</code>).
    </p>
    <div class="flex flex-wrap gap-8 mt-6 bg-white rounded-md p-4 shadow">
      <div class="flex-grow">
        <h3 class="mb-3 font-bold text-xl">CSS</h3>
        <pre class="p-4 mb-6 font-mono text-gray-800 bg-gray-100 rounded-md">{{
          itemsCss
        }}</pre>
      </div>

      <div class="flex-grow">
        <h3 class="mb-3 font-bold text-xl">HTML</h3>
        <pre class="p-4 mb-6 font-mono text-gray-800 bg-gray-100 rounded-md">{{
          itemsMarkup
        }}</pre>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FlexMarkup",
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
    itemsCss() {
      // only include the css property/value if it's not the default value for that property
      let fd = "";
      let fw = "";
      let jc = "";
      let ai = "";
      let ac = "";

      if (this.flexDirection !== this.flexProperties.flexDirection[0]) {
        fd = `\n  flex-direction: ${this.flexDirection};`;
      }
      if (this.flexWrap !== this.flexProperties.flexWrap[0]) {
        fw = `\n  flex-wrap: ${this.flexWrap};`;
      }
      if (this.justifyContent !== this.flexProperties.justifyContent[0]) {
        jc = `\n  justify-content: ${this.justifyContent};`;
      }
      if (this.alignItems !== this.flexProperties.alignItems[0]) {
        ai = `\n  align-items: ${this.alignItems};`;
      }
      if (this.alignContent !== this.flexProperties.alignContent[0]) {
        ac = `\n  align-content: ${this.alignContent};`;
      }
      const containerCss = `.container {
  display: flex;${fd}${fw}${jc}${ai}${ac}
}`;

      const itemsCss = this.flexItems
        .map((it, index) => {
          let nonDefaultCount = 0;
          let o = "";
          let fg = "";
          let fs = "";
          let fb = "";
          let as = "";

          if (it.styles.order !== 0) {
            nonDefaultCount++;
            o = `\n  order: ${it.styles.order};`;
          }

          if (it.styles.flexGrow !== 0) {
            nonDefaultCount++;
            fg = `\n  flex-grow: ${it.styles.flexGrow};`;
          }

          if (it.styles.flexShrink !== 0) {
            nonDefaultCount++;
            fs = `\n  flex-shrink: ${it.styles.flexShrink};`;
          }

          if (it.styles.flexBasis !== "auto") {
            nonDefaultCount++;
            fb = `\n  flex-basis: ${it.styles.flexBasis};`;
          }

          if (it.styles.alignSelf !== "auto") {
            nonDefaultCount++;
            as = `\n  align-self: ${it.styles.alignSelf};`;
          }

          if (nonDefaultCount > 0) {
            return `.item-${index} {${o}${fg}${fs}${fb}${as}
}`;
          }
        })
        .join("\n");

      return `${containerCss}\n\n${itemsCss}`;
    },
    itemsMarkup() {
      const itemsMarkup =
        this.flexItems.length === 0
          ? ""
          : this.flexItems
              .map((it, index) => {
                return `  <div class="item-${index}"></div>`;
              })
              .join("\n");

      return `<div class="container">\n${itemsMarkup}\n</div>`;
    },
  },
};
</script>
