<template>
    <div v-if="value !== null">
        <img width="80px" :src="useRuntimeConfig().public.serverUrl+'/upload/'+value">
    </div>
</template>
<script setup>
defineProps(["value"]);
</script>
