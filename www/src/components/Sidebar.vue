<template>
  <aside class="flex flex-col bg-white border-r border-gray-300 h-full overflow-y-auto w-80">
    <SidebarNav />
    <SidebarContainer v-if="activeTab === 'container'" />
    <SidebarItems v-if="activeTab === 'items'" />
    <CarbonAds />
  </aside>
</template>

<script>
import { mapState } from 'vuex'
import SidebarNav from './SidebarNav.vue'
import SidebarContainer from './SidebarContainer.vue'
import SidebarItems from './SidebarItems.vue'
import CarbonAds from './CarbonAds.vue'

export default {
  name: 'Sidebar',
  components: {
    SidebarNav,
    SidebarContainer,
    SidebarItems,
    CarbonAds
  },
  computed: {
    ...mapState(['activeTab'])
  }
}
</script>
