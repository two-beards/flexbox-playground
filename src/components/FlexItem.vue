<template>
  <div
    :style="flexItemStyles"
    class="rounded"
    :class="{ 'ring-4 ring-blue-600': isActiveItem === true }"
  >
    <div class="h-full w-full bg-white shadow flex flex-col rounded p-2">
      <div class="text-sm font-medium text-gray-700 px-2"
        >Index: {{ itemIndex }}</div
      >
      <div class="flex items-center mt-4">
        <button
          class="w-20 cursor-pointer focus:outline-none bg-red-100 text-red-700 font-medium text-xs hover:bg-red-600 hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-red-600 px-2 py-1 rounded mx-1"
          @click="remove"
        >
          Remove
        </button>
        <button
          class="w-16 cursor-pointer focus:outline-none bg-blue-100 text-blue-700 font-medium text-xs hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 px-2 py-1 rounded mx-1"
          @click="edit"
        >
          {{ isActiveItem ? "Done" : "Edit" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlexItem",
  props: {
    itemId: {
      type: String,
      required: true,
    },
    itemStyles: {
      type: Object,
      required: true,
    },
    itemIndex: {
      type: Number,
      required: true,
    },
    isActiveItem: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    flexItemStyles: function () {
      return `order: ${this.itemStyles.order}; flex-grow: ${this.itemStyles.flexGrow}; flex-shrink: ${this.itemStyles.flexShrink}; flex-basis: ${this.itemStyles.flexBasis}; align-self: ${this.itemStyles.alignSelf}`;
    },
  },
  methods: {
    edit() {
      let id = this.itemId;
      if (this.isActiveItem) {
        id = null;
      }
      this.$emit("set", id);
    },
    remove() {
      this.$emit("remove", this.itemId);
    },
  },
};
</script>
