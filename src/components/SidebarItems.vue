<template>
  <section>
    <div v-if="selectedItem === null" class="pt-4 px-4 text-center text-gray-800">
      Click a flex item in the container on the right to edit its styles.
    </div>

    <div v-if="selectedItem !== null" class="px-4 pb-4">
      <p class="leading-normal text-left text-gray-800 mb-4">Edit properties of the flex items here. The selected item will have a yellow border.</p>
      <button
        class="rounded mb-4 p-2 font-semibold bg-indigo-500 hover:bg-indigo-600 text-white cursor-pointer w-full text-center focus:outline-none focus:shadow-outline"
        @click="setSelectedItem(null)">
        Stop Editing Item
      </button>

      <button
        class="rounded mb-8 p-2 font-semibold bg-red-500 hover:bg-red-600 text-white cursor-pointer w-full text-center focus:outline-none focus:red-shadow-outline"
        @click="removeSelectedItem">
        Remove Item
      </button>

      <form>
        <div class="mb-4">
          <label class="mb-2 lowercase text-base font-semibold block">Order</label>
          <BaseInput
            :value="selectedItem.styles.order"
            @input="updateSelectedItem"
            name="order"
            type="number" />
        </div>

        <div class="mb-4">
          <label class="mb-2 lowercase text-base font-semibold block">Flex-grow</label>
          <BaseInput
            :value="selectedItem.styles.flexGrow"
            @input="updateSelectedItem"
            name="flexGrow"
            type="number"
            min="0" />
        </div>

        <div class="mb-4">
          <label class="mb-2 lowercase text-base font-semibold block">Flex-shrink</label>
          <BaseInput
            :value="selectedItem.styles.flexShrink"
            @input="updateSelectedItem"
            name="flexShrink"
            type="number"
            min="0" />
        </div>

        <div class="mb-4">
          <label class="mb-2 lowercase text-base font-semibold block">Flex-basis</label>
          <BaseInput
            :value="selectedItem.styles.flexBasis"
            @input="updateSelectedItem"
            name="flexBasis"
            type="text" />
        </div>

        <div class="mb-4">
          <label class="mb-2 lowercase text-base font-semibold block">Align-self</label>
          <BaseSelect
            :value="selectedItem.styles.alignSelf"
            @input="updateSelectedItem"
            name="alignSelf"
            :options="flexProperties.alignSelf" />
        </div>
      </form>
      <CarbonAds />
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BaseSelect from './BaseSelect.vue'
import BaseInput from './BaseInput.vue'
import CarbonAds from './CarbonAds.vue'

export default {
  name: 'SidebarItems',
  components: {
    BaseSelect,
    BaseInput,
    CarbonAds,
  },
  computed: mapState([
    'flexProperties',
    'selectedItem'
  ]),
  methods: {
    ...mapActions(['setSelectedItem', 'removeSelectedItem']),
    updateSelectedItem(e) {
      let copy = {...this.selectedItem}
      let prop = e.target.name
      copy.styles[prop] = e.target.value
      this.$store.dispatch('updateSelectedItem', copy)
    }
  }
}
</script>
