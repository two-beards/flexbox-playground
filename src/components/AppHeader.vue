<template>
    <header
        class="border-b border-gray-300 p-4 h-16 bg-white font-semibold flex items-center justify-between z-10"
    >
        <span class="text-xl">
            Flexbox Playground
            <span
                class="ml-2 py-1 pl-2 border-l border-gray-400 font-normal text-sm text-gray-700"
                >&nbsp;A web app for exploring Flexbox</span
            >
        </span>
        <span class="items-center flex">
            <a
                href="https://github.com/two-beards/flexbox-playground/"
                target="_blank"
                rel="noreferrer noopener"
                title="View on GitHub"
                class="no-underline rounded text-gray-500 hover:text-gray-900 inline-block mr-4 w-6 h-6 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-600 focus:ring-opacity-40"
            >
                <GitHubIcon />
            </a>
            <button
                class="text-sm cursor-pointer rounded px-4 py-2 border-none mr-2 inline-block text-blue-600 bg-gray-100 hover:bg-blue-50 focus:bg-blue-50 font-semibold focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-600 focus:ring-opacity-40"
                @click="resetDefaults"
            >
                Reset to Defaults
            </button>

            <button
                class="text-sm cursor-pointer rounded px-4 py-2 border-none inline-block text-white bg-blue-600 hover:bg-blue-600 font-semibold focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-600 focus:ring-opacity-40"
                @click="toggleMarkup"
            >
                {{ showFlexMarkup ? 'View Flex Items' : 'View Markup' }}
            </button>
        </span>
    </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import GitHubIcon from './GitHubIcon.vue'

export default {
    name: 'AppHeader',
    components: {
        GitHubIcon,
    },
    computed: {
        ...mapState(['showFlexMarkup']),
    },
    methods: {
        ...mapActions(['toggleMarkup', 'resetDefaults']),
    },
}
</script>
