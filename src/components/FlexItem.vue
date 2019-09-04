<template lang="html">
  <div
    :style="flexItemStyles"
    class="p-1 rounded">
    <div class="bg-teal-500 text-white rounded py-2 px-3 w-full h-full flex flex-col justify-around">
      <span class="block text-center mb-2 text-sm">Index: {{ itemIndex }}</span>
      <span class="px-2 py-1 cursor-pointer block mb-2 text-center hover:bg-white hover:text-teal-500" @click="edit">Edit</span>
      <span class="px-2 py-1 cursor-pointer block text-center hover:bg-white hover:text-teal-500" @click="remove">Remove</span>
    </div>
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
    }
  },
  computed: {
    flexItemStyles: function () {
      return `order: ${this.itemStyles.order}; flex-grow: ${this.itemStyles.flexGrow}; flex-shrink: ${this.itemStyles.flexShrink}; flex-basis: ${this.itemStyles.flexBasis}; align-self: ${this.itemStyles.alignSelf}`
    }
  },
  methods: {
    remove() {
      this.$emit('remove', this.itemId)
    },
    edit() {
      this.$emit('set', this.itemId)
    }
  }
}
</script>
