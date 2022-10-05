<template>
    <button
        class="focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-40 flex flex-1 uppercase text-sm font-bold rounded items-center justify-center cursor-pointer p-2"
        :class="{
            'bg-white text-blue-600 shadow': isActive === true,
            'text-gray-500 group-hover:text-gray-800': isActive === false,
        }"
        @click="$emit('click')"
    >
        {{ tabName }}
    </button>
</template>

<script>
export default {
    name: 'SidebarNavTab',
    props: {
        isActive: {
            type: Boolean,
            default: false,
        },
        tabName: {
            type: String,
            required: true,
        },
    },
}
</script>
