<template lang="html">
  <nav class="flex m-4">
    <SidebarNavTab :is-active="activeTab === 'container'" @click="setActiveTab('container')">Container</SidebarNavTab>
    <SidebarNavTab :is-active="activeTab === 'items'" @click="setActiveTab('items')">Items</SidebarNavTab>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SidebarNavTab from './SidebarNavTab'

export default {
  name: 'SidebarNav',
  components: {
    SidebarNavTab,
  },
  computed: {
    ...mapState(['activeTab'])
  },
  methods: {
    ...mapActions(['setActiveTab']),
    handleTabClick(tab) {
      this.setActiveTab(tab)
    }
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
