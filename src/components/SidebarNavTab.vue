<template lang="html">
  <button
    class="focus:outline-none focus:border-indigo-700 flex w-1/2 uppercase text-sm font-bold border border-gray-500 first:rounded-l last:rounded-r items-center justify-center cursor-pointer py-2 -mr-px"
    :class="{
      'border-indigo-600 bg-indigo-100 text-indigo-600 z-10': isActive === true,
      'text-gray-600 hover:bg-gray-200': isActive === false
    }"
    @click="$emit('click')">
    <slot></slot>
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