<template>
  <section
    :style="flexStyles"
    class="h-full flex flex-grow bg-gray-100 p-4 overflow-x-auto">
    <FlexItem
      v-for="(item, index) in flexItems"
      :key="item.id"
      :item-id="item.id"
      :item-styles="item.styles"
      :item-index="index"
      :is-active-item="selectedItem !== null && selectedItem.id === item.id"
      @set="setSelectedItem" />
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import FlexItem from './FlexItem.vue'

export default {
  name: 'FlexContainer',
  components: {
    FlexItem
  },
  computed: {
    ...mapState([
      'flexDirection',
      'flexWrap',
      'justifyContent',
      'alignItems',
      'alignContent',
      'flexItems',
      'selectedItem'
    ]),
    flexStyles() {
      return `flex-direction: ${this.flexDirection}; flex-wrap: ${this.flexWrap}; justify-content: ${this.justifyContent}; align-items: ${this.alignItems}; align-content: ${this.alignContent};`
    },
  },
  methods: {
    ...mapActions([
      'removeFlexItem',
      'setSelectedItem'
    ])
  }
}
</script>
