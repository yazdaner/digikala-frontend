<template>
    <div v-if="!pending">
    </div>
</template>
<script setup>
const { data: categories, pending } = await useFetch(
    useRuntimeConfig().public.api + "/categories/all"
);
</script>
