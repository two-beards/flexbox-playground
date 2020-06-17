<template>
  <button
    class="focus:outline-none focus:shadow-outline flex w-1/2 uppercase text-sm font-bold rounded items-center justify-center cursor-pointer p-2"
    :class="{
      'bg-white text-indigo-600 shadow': isActive === true,
      'text-gray-600 hover:text-indigo-600': isActive === false
    }"
    @click="$emit('click')">
    {{ tabName }}
  </button>
</template>

<script>
export default {
  name: 'SidebarNavTab',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    tabName: {
      type: String,
      required: true
    }
  }
}
</script>