<template lang="html">
  <header class="border-b border-gray-300 p-4 h-16 bg-white font-semibold flex items-center justify-between z-10">
    <span>
      Flexbox Playground
      <span class="ml-2 py-1 pl-2 border-l border-gray-400 font-normal text-sm text-gray-700">&nbsp;A web app for exploring Flexbox</span>
    </span>
    <span class="items-center flex">
      <a
        href="https://github.com/mikemcbride/flexbox-playground/"
        target="_blank"
        rel="noreferrer noopener"
        title="View on GitHub"
        class="no-underline text-gray-600 hover:text-gray-900 inline-block mr-4 w-6 h-6">
        <GitHubIcon />
      </a>
      <button
        class="text-sm cursor-pointer rounded px-4 py-2 border-none mr-2 inline-block text-indigo-600 bg-gray-200 hover:bg-gray-300 font-semibold"
        @click="resetDefaults">
        Reset to Defaults
      </button>
      
      <button
        class="text-sm cursor-pointer rounded px-4 py-2 border-none inline-block text-white bg-indigo-500 hover:bg-indigo-600 font-semibold"
        @click="toggleMarkup">
        Toggle Markup
      </button>
    </span>
  </header>
</template>

<script>
import { mapActions } from 'vuex'
import GitHubIcon from '@/components/GitHubIcon'

export default {
  name: 'AppHeader',
  components: {
    GitHubIcon,
  },
  methods: {
    ...mapActions(['toggleMarkup', 'resetDefaults'])
  }
}
</script>
