<template>
    <font-awesome-icon :icon="name"/>
</template>

<script setup lang="ts">
let props = defineProps({
    name: {
        type: String,
        required: true,
    }
})
</script>