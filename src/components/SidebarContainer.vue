<template lang="html">
  <section class="px-4 pb-4">
    <p class="leading-normal mb-2">Edit properties of the flex container here.</p>
    <button
      class="rounded mb-6 p-2 font-semibold bg-indigo-500 hover:bg-indigo-600 text-white cursor-pointer w-full text-center"
      @click="addFlexItem">
      Add Flex Item
    </button>
    <form>
      <div class="mb-4">
        <label class="mb-2 lowercase text-base font-semibold block">Flex-direction</label>
        <Multiselect
          v-model="flexDirection"
          :options="flexProperties.flexDirection"
          :show-labels="false"
          :allow-empty="false" />
      </div>
      
      <div class="mb-4">
        <label class="mb-2 lowercase text-base font-semibold block">Flex-wrap</label>
        <Multiselect
          v-model="flexWrap"
          :options="flexProperties.flexWrap"
          :show-labels="false"
          :allow-empty="false" />
      </div>
      
      <div class="mb-4">
        <label class="mb-2 lowercase text-base font-semibold block">Justify-content</label>
        <Multiselect
          v-model="justifyContent"
          :options="flexProperties.justifyContent"
          :show-labels="false"
          :allow-empty="false" />
      </div>
      
      <div class="mb-4">
        <label class="mb-2 lowercase text-base font-semibold block">Align-items</label>
        <Multiselect
          v-model="alignItems"
          :options="flexProperties.alignItems"
          :show-labels="false"
          :allow-empty="false" />
      </div>
      
      <div class="mb-4">
        <label class="mb-2 lowercase text-base font-semibold block">Align-content</label>
        <Multiselect
          v-model="alignContent"
          :options="flexProperties.alignContent"
          :show-labels="false"
          :allow-empty="false" />
      </div>
    </form>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Multiselect from 'vue-multiselect'

export default {
  name: 'SidebarContainer',
  components: {
    Multiselect
  },
  computed: {
    ...mapState(['flexProperties']),
    flexDirection: {
      get() {
        return this.$store.state.flexDirection
      },
      set(value) {
        this.$store.dispatch('setFlexDirection', value)
      }
    },
    flexWrap: {
      get() {
        return this.$store.state.flexWrap
      },
      set(value) {
        this.$store.dispatch('setFlexWrap', value)
      }
    },
    justifyContent: {
      get() {
        return this.$store.state.justifyContent
      },
      set(value) {
        this.$store.dispatch('setJustifyContent', value)
      }
    },
    alignItems: {
      get() {
        return this.$store.state.alignItems
      },
      set(value) {
        this.$store.dispatch('setAlignItems', value)
      }
    },
    alignContent: {
      get() {
        return this.$store.state.alignContent
      },
      set(value) {
        this.$store.dispatch('setAlignContent', value)
      }
    }
  },
  methods: {
    ...mapActions(['addFlexItem'])
  }
}
</script>