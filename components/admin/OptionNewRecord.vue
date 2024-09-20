<template>
    <nuxt-link
        v-if="newRecordFunction == undefined"
        :to="'/' + route + '/create'"
    >
        افزودن {{ label }} جدید
    </nuxt-link>
    <a @click="newRecordFunction()" class="cursor-pointer" v-else :to="'/' + route + '/create'">
        افزودن {{ label }} جدید
    </a>
</template>
<script setup>
defineProps({
    route: {
        type: String,
    },
    newRecordFunction: {
        type: Function,
    },
    label: {
        type: String,
    },
});
</script>
