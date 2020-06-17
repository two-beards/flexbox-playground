<template>
  <div :class="`px-${size}`"></div>
</template>

<script>
export default {
  name: 'Spacer',
  props: {
    size: {
      type: String,
      required: true
    },
  }
}
</script>