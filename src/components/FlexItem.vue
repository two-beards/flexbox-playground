<template>
  <div
    :style="flexItemStyles"
    class="p-1 rounded">
    <button
      class="cursor-pointer text-white rounded p-8 w-full h-full flex flex-col justify-around focus:outline-none focus:shadow-outline"
      :class="[activeClasses]"
      @click="edit">
      <span class="block text-center text-sm">Index: {{ itemIndex }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'FlexItem',
  props: {
    itemId: {
      type: String,
      required: true
    },
    itemStyles: {
      type: Object,
      required: true
    },
    itemIndex: {
      type: Number,
      required: true
    },
    isActiveItem: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    flexItemStyles: function () {
      return `order: ${this.itemStyles.order}; flex-grow: ${this.itemStyles.flexGrow}; flex-shrink: ${this.itemStyles.flexShrink}; flex-basis: ${this.itemStyles.flexBasis}; align-self: ${this.itemStyles.alignSelf}`
    },
    activeClasses() {
      if (this.isActiveItem) {
        return 'bg-teal-600'
      }
      return 'bg-indigo-500'
    }
  },
  methods: {
    edit() {
      this.$emit('set', this.itemId)
    }
  }
}
</script>
