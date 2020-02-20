<template lang="html">
  <div class="font-sans text-gray-900 min-h-screen flex flex-col max-w-screen-lg lg:max-w-full">
    <AppHeader />
    <main class="flex-auto overflow-hidden absolute inset-0 pt-16 flex">
      <Sidebar />
      <FlexContainer v-if="showFlexMarkup === false" />
      <FlexMarkup v-else />
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppHeader from '@/components/AppHeader'
import Sidebar from '@/components/Sidebar'
import FlexContainer from '@/components/FlexContainer'
import FlexMarkup from '@/components/FlexMarkup'

export default {
  name: 'FlexboxPlayground',
  components: {
    AppHeader,
    Sidebar,
    FlexContainer,
    FlexMarkup
  },
  computed: {
    ...mapState(['showFlexMarkup'])
  }
}
</script>

<style lang="css">
@import './assets/main.css';
</style>
