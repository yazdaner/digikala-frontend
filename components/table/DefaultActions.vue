<template>
    <nuxt-link
        v-if="disableEditIcon == false && trashed == false"
        :to="getUpdateUrl()"
    >
        <fa-icon :icon="['fas', 'pen-to-square']" />
    </nuxt-link>
    <table-delete-link
        v-if="disableDeleteIcon == false"
        :title="title"
        :trashed="trashed"
        :url="getDeleteUrl()"
    />
    <table-restore-link
        v-if="trashed"
        :title="title"
        :trashed="trashed"
        :url="getRestoreUrl()"
    />
</template>
<script setup>
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

function getUpdateUrl() {
    if (props.editUrl === undefined) {
        return "/" + props.route + "/" + props.item.id + "/edit";
    } else {
        return props.editUrl.toString().replace(":id", props.item.id);
    }
}

function getDeleteUrl() {
    return (
        useRuntimeConfig().public.api + "/" + props.route + "/" + props.item.id
    );
}

function getRestoreUrl() {
    return (
        useRuntimeConfig().public.api +
        "/" +
        props.route +
        "/" +
        props.item.id +
        "/restore"
    );
}
</script>
