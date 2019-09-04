<template lang="html">
  <nav class="flex mb-4">
    <span
      :class="{ 'border-black text-gray-800': activeTab === 'container', 'border-transparent text-gray-600': activeTab !== 'container' }"
      class="flex w-1/2 uppercase text-sm font-bold border-b-2 items-center justify-center cursor-pointer py-3"
      @click="setActiveTab('container')">
      Container
    </span>
    <span
      :class="{ 'border-black text-gray-800': activeTab === 'items', 'border-transparent text-gray-600': activeTab !== 'items' }"
      class="flex w-1/2 uppercase text-sm font-bold border-b-2 items-center justify-center cursor-pointer py-3"
      @click="setActiveTab('items')">
      Items
    </span>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'SidebarNav',
  computed: {
    ...mapState(['activeTab'])
  },
  methods: {
    ...mapActions(['setActiveTab'])
  }
}
</script>

<style lang="css" scoped>
.tab {
  background-color: rgba(0,0,0,0.05);
  flex: 1 0 0px;
}

.tab:hover {
  background-color: rgba(0,0,0,0.075);
}

.tab.active {
  background-color: #fff;
  border-bottom-color: transparent;
}
</style>
