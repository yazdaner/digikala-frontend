<template>
    <div v-if="errors.length > 0" class="alert alert-warning pa-5">
        <ul class="none-style-list mb-0 pa-0">
            <li v-for="(error, key) in errors" :key="key">
                {{ error }}
            </li>
        </ul>
    </div>
</template>
<script setup>
defineProps({
    errors: {
        type: Array,
    },
});
</script>
