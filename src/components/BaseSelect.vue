<template>
  <div class="select relative inline-block text-gray-700 w-full">
    <select
      class="inline-block text-base w-full m-0 py-2 pl-4 pr-8 leading-normal text-gray-700 bg-white border border-gray-500 rounded cursor-pointer focus:outline-none focus:border-transparent focus:shadow-outline"
      v-bind="$attrs">
        <option
          class="bg-white"
          v-for="(option, index) in options"
          :key="index"
          :selected="value === option"
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

<style scoped>
/* styles taken from https://github.com/mdo/wtf-forms/blob/master/wtf-forms.css and modified */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
/* Undo the Firefox inner focus ring */
select:focus:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #000;
}
/* Dropdown arrow */
.select:after {
  position: absolute;
  top: 50%;
  right: 1.25rem;
  display: inline-block;
  content: "";
  width: 0;
  height: 0;
  margin-top: -.15rem;
  pointer-events: none;
  border-top: .35rem solid;
  border-right: .35rem solid transparent;
  border-bottom: .35rem solid transparent;
  border-left: .35rem solid transparent;
}
/* Active/open */
select:active {
  color: #fff;
  background-color: #0074d9;
}
/* Media query to target Firefox only */
@-moz-document url-prefix() {
  /* Firefox hack to hide the arrow */
  select {
    text-indent: 0.01px;
    text-overflow: '';
    padding-right: 1rem;
  }
}
</style>
