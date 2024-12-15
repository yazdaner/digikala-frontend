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
                        <nuxt-link v-if="trashed" :to="'/' + route">{{ title }}</nuxt-link>
                        <nuxt-link v-else :to="'/' + route + '?trashed=true'">
                            سطل زباله ({{ trashCount }})
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card-body">
            <div class="loading-box" v-if="loading">
                <CoreLoading />
            </div>
            <CoreErrors :errors />
            <slot />
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    title: {
        type: String,
    },
    removeNewLink: {
        type: Boolean,
    },
    trashCount: {
        type: Number,
    },
    trashed: {
        type: Boolean,
    },
    route: {
        type: String,
    },
    requestRoute: {
        type: String,
    },
    label: {
        type: String,
    },
    newRecordFunction: {
        type: Function,
    },
});
const loading = ref(false);
const errors = ref([]);
const formEvent = formStore();
watch(
    () => formEvent.key,
    () => {
        loading.value =
            formEvent.sendStatus[props.requestRoute] !== undefined
                ? formEvent.sendStatus[props.requestRoute]
                : loading.value;
        errors.value =
            formEvent.serverErrors[props.requestRoute] !== undefined
                ? formEvent.serverErrors[props.requestRoute]
                : errors.value;
    }
);
</script>
