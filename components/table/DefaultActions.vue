<template>
     <nuxt-link
        :to="getUpdateUrl(item)"
        v-if="disableEditIcon == false && trashed == false"
    >
        <fa-icon :icon="['fas', 'pen-to-square']" />
    </nuxt-link>
    <table-delete-link
        :title="title"
        :trashed="trashed"
        v-if="disableDeleteIcon == false"
        :url="getDeleteUrl(item)"
    />
    <table-restore-link
        v-if="trashed"
        :title="title"
        :trashed="trashed"
        :url="getRestoreUrl(item)"
    />
</template>
<script setup>
import { getUpdateUrl, getDeleteUrl, getRestoreUrl } from "~/functions/table";
const props = defineProps({
    item: {
        type: Object,
    },
    trashed: {
        type: Boolean,
    },
    disableEditIcon: {
        type: Boolean,
    },
    disableDeleteIcon: {
        type: Boolean,
    },
    title: {
        type: String,
    },
    editUrl: {
        type: String,
    },
    route: {
        type: String,
    },
  
});
</script>