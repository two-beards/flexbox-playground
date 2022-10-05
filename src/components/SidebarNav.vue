<template>
    <nav
        class="group flex m-4 bg-gray-100 rounded p-1 hover:bg-gray-200 hover:bg-opacity-75"
    >
        <SidebarNavTab
            :is-active="activeTab === 'container'"
            @click="setActiveTab('container')"
            tab-name="Container"
        />
        <Spacer size="4" />
        <SidebarNavTab
            :is-active="activeTab === 'items'"
            @click="setActiveTab('items')"
            tab-name="Items"
        />
    </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SidebarNavTab from './SidebarNavTab.vue'
import Spacer from './Spacer.vue'

export default {
    name: 'SidebarNav',
    components: {
        SidebarNavTab,
        Spacer,
    },
    computed: {
        ...mapState(['activeTab']),
    },
    methods: {
        ...mapActions(['setActiveTab']),
        handleTabClick(tab) {
            this.setActiveTab(tab)
        },
    },
}
</script>

<style lang="css" scoped>
.tab {
    background-color: rgba(0, 0, 0, 0.05);
    flex: 1 0 0px;
}

.tab:hover {
    background-color: rgba(0, 0, 0, 0.075);
}

.tab.active {
    background-color: #fff;
    border-bottom-color: transparent;
}
</style>
