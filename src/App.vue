<template>
  <div class="grid layout h-screen font-sans text-gray-900 max-w-screen-lg lg:max-w-full">
    <AppHeader />
    <Sidebar />
    <FlexContainer v-if="showFlexMarkup === false" />
    <FlexMarkup v-else />
    <footer class="footer bg-white flex items-center justify-center border-t border-gray-200">
        <a
          href="https://twobeards.dev"
          target="_blank"
          rel="noopener noreferrer"
          title="A project by Two Beards"
          class="inline-block cursor-pointer opacity-75 hover:opacity-100">
          <TwoBeardsLogo :size="24" />
        </a>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppHeader from './components/AppHeader.vue'
import Sidebar from './components/Sidebar.vue'
import FlexContainer from './components/FlexContainer.vue'
import FlexMarkup from './components/FlexMarkup.vue'
import TwoBeardsLogo from './components/TwoBeards.vue'

export default {
  name: 'FlexboxPlayground',
  components: {
    AppHeader,
    Sidebar,
    FlexContainer,
    FlexMarkup,
    TwoBeardsLogo,
  },
  computed: {
    ...mapState(['showFlexMarkup'])
  }
}
</script>

<style>
.layout {
  grid-template-columns: 20rem 1fr;
  grid-template-rows: 4rem 1fr 3rem;
}

header {
  grid-column: 1 / 4;
  grid-row: 1 / 2;
}

.sidebar {
  grid-column-end: span 1;
  grid-row: 2 / 4;
}

.footer {
  grid-column: 2 / 4;
  grid-row: 3 / 4;
}
</style>
