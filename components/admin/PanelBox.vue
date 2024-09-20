<template>
    <div class="admin-panel-box card position-relative">
        <div
            class="card-header d-flex justify-content-between align-items-center"
        >
            <span>{{ title }}</span>
            <div class="dropdown" v-if="route !== undefined">
                <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                >
                    گزینه ها
                </button>
                <ul class="dropdown-menu">
                    <li v-if="removeNewLink == false" class="dropdown-item">
                        <AdminOptionNewRecord
                            :route
                            :newRecordFunction
                            :label
                        />
                    </li>
                    <li class="dropdown-item" v-if="trashCount !== undefined">
                        <nuxt-link :to="'/' + route + '?trashed=true'">
                            سطل زباله ({{ trashCount }})
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card-body">
            <slot />
        </div>
    </div>
</template>
<script setup>
defineProps({
    title: {
        type: String,
    },
    removeNewLink: {
        type: Boolean,
    },
    trashCount: {
        type: Number,
    },
    route: {
        type: String,
    },
    label: {
        type: String,
    },
    newRecordFunction: {
        type: Function,
    },
});
</script>
