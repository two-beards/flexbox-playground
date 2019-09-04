<template lang="html">
  <header class="border-b border-gray-300 p-4 h-16 bg-white font-semibold flex items-center justify-between z-10">
    <span>
      Flexbox Playground
      <span class="ml-2 py-1 pl-2 border-l border-gray-400 font-normal text-sm text-gray-700">&nbsp;A web app for exploring Flexbox</span>
    </span>
    <span>
      <button
        class="text-sm cursor-pointer rounded px-4 py-2 border-none mr-2 inline-block text-teal-600 bg-gray-200 hover:bg-gray-300 font-semibold"
        @click="resetDefaults">
        Reset to Defaults
      </button>
      
      <button
        class="text-sm cursor-pointer rounded px-4 py-2 border-none inline-block text-white bg-teal-500 hover:bg-teal-600 font-semibold"
        @click="toggleMarkup">
        Toggle Markup
      </button>
    </span>
  </header>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AppHeader',
  methods: {
    ...mapActions(['toggleMarkup', 'resetDefaults'])
  }
}
</script>
