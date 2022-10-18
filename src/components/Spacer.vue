<template>
    <div :style="`width: ${size}px`"></div>
</template>

<script>
export default {
    name: 'Spacer',
    props: {
        size: {
            type: String,
            required: true,
        },
    },
}
</script>
