<template>
    <div class="d-flex">
        <nuxt-link
            v-if="disableEditIcon == false && trashed == false"
            :to="getUpdateUrl()"
        >
            <fa-icon :icon="['fas', 'pen-to-square']" />
        </nuxt-link>
        <table-delete-link
            v-if="disableDeleteIcon == false"
            :url="getDeleteUrl()"
            :title
            :trashed
            :item
            :fetchData
        />
        <table-restore-link
            v-if="trashed"
            :url="getRestoreUrl()"
            :title
            :trashed
            :item
            :fetchData
        />
    </div>
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
    fetchData: {
        type: Function,
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
