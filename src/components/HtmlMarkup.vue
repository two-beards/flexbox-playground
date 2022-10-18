<template>
    <CodeContainer lang="html" :content="content" />
</template>

<script>
import { mapState } from 'vuex'
import CodeContainer from './CodeContainer.vue'

export default {
    name: 'HtmlMarkup',
    components: {
        CodeContainer,
    },
    computed: {
        ...mapState(['flexItems']),
        content() {
            const itemsMarkup =
                this.flexItems.length === 0
                    ? ''
                    : this.flexItems
                          .map((it, index) => {
                              return `\t<div class="item-${index}"></div>`
                          })
                          .join('\n')

            return `<div class="container">\n${itemsMarkup}\n</div>`
        },
    },
}
</script>
