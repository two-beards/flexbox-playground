<template>
  <div class="select relative inline-block text-gray-700 w-full">
    <select
      class="inline-block text-base w-full m-0 py-2 pl-4 pr-8 leading-normal text-gray-700 bg-white border border-gray-500 rounded cursor-pointer focus:outline-none focus:border-transparent focus:shadow-outline"
      v-bind="$attrs">
        <option
          class="bg-white text-gray-700"
          v-for="(option, index) in options"
          :key="index"
          :value="option">{{ option }}
        </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: ['options']
}
</script>
