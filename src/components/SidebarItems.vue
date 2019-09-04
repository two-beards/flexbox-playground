<template lang="html">
  <section>
    <div v-if="selectedItem == null" class="pt-4 px-4 text-center text-gray-700">
      Click the "Edit" button inside a flex item in the container on the right to edit its styles.
    </div>
    
    <div v-if="selectedItem !== null" class="px-4 pb-4">
      <p class="leading-normal text-center text-gray-700 mb-4">Edit properties of the flex items here. The selected item will have a yellow border.</p>
      <button
        class="rounded mb-4 p-2 font-semibold bg-teal-500 hover:bg-teal-600 text-white cursor-pointer w-full text-center"
        @click="setSelectedItem(null)">
        Stop Editing Item
      </button>
      
      <form>
        <div class="mb-4">
          <label class="mb-2 lowercase text-sm font-normal block font-mono">Order</label>
          <input v-model="selectedItem.styles.order" type="number" class="w-full outline-none rounded border border-gray-500 p-2">
        </div>
        
        <div class="mb-4">
          <label class="mb-2 lowercase text-sm font-normal block font-mono">Flex-grow</label>
          <input v-model="selectedItem.styles.flexGrow" type="number" min="0" class="w-full outline-none rounded border border-gray-500 p-2">
        </div>
        
        <div class="mb-4">
          <label class="mb-2 lowercase text-sm font-normal block font-mono">Flex-shrink</label>
          <input v-model="selectedItem.styles.flexShrink" type="number" min="0" class="w-full outline-none rounded border border-gray-500 p-2">
        </div>
        
        <div class="mb-4">
          <label class="mb-2 lowercase text-sm font-normal block font-mono">Flex-basis</label>
          <input v-model="selectedItem.styles.flexBasis" type="text" class="w-full outline-none rounded border border-gray-500 p-2">
        </div>
        
        <div class="mb-4">
          <label class="mb-2 lowercase text-sm font-normal block font-mono">Align-self</label>
          <Multiselect
            v-model="selectedItem.styles.alignSelf"
            :options="flexProperties.alignSelf"
            :show-labels="false"
            :allow-empty="false" />
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Multiselect from 'vue-multiselect'

export default {
  name: 'SidebarItems',
  components: {
    Multiselect
  },
  computed: {
    ...mapState([
      'flexProperties',
      'selectedItem'
    ])
  },
  methods: {
    ...mapActions(['setSelectedItem'])
  }
}
</script>
