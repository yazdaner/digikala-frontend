<template>
    <component :is="defaultComponent" :title :route :label :trashCount>
    </component>

    <FormComponent method="get" :result :action="route" ref="searchForm">
        <input type="hidden" class="c-input" name="page" :value="page" />
        <input type="hidden" class="c-input" name="trashed" :value="trashed" />
        <slot name="form" />
    </FormComponent>
    <TableComponent
        :route
        :trashed
        :columns
        :data="tableData"
        :title="label"
        :fetchData="getServerData"
    >
    </TableComponent>
</template>
<script setup>
import defaultComponent from "~/components/admin/PanelBox.vue";

const props = defineProps({
    title: {
        type: String,
    },
    label: {
        type: String,
    },
    route: {
        type: String,
    },
    property: {
        type: String,
    },
    columns: {
        type: Array,
    },
});

const trashCount = ref(undefined);
const trashed = ref("false");
const page = ref(1);
const searchForm = ref();

onMounted(() => {
    nextTick().then(() => {
        console.log(1234);
        console.log(searchForm.value);
        searchForm.value.submitForm();
    });
});

function result() {}

const tableData = ref({ data: [] });
const { $axios } = useNuxtApp();
onMounted(() => {
    getServerData();
});

function getServerData(page = 1) {
    $axios
        .get(useRuntimeConfig().public.api + "/admin/categories?page=" + page)
        .then((response) => {
            categories.value = response.data.categories;
        });
}
</script>
