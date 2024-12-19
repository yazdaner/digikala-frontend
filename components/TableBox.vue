<template>
    <component :is="defaultComponent" :title :route :label :trashCount :trashed>
        <FormComponent method="get" :result :action="route" ref="searchForm">
            <input type="hidden" class="c-input" name="page" :value="page" />
            <input
                type="hidden"
                class="c-input"
                name="trashed"
                :value="trashed"
            />
            <div class="search-box">
                <slot name="form" />
                <template v-if="$slots['form']">
                    <FormButton design="btn-success ms-3">جستوجو</FormButton>
                </template>
            </div>
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
    </component>
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
const trashed = ref(false);
const page = ref(1);
const searchForm = ref();

onMounted(() => {
    nextTick().then(() => {
        searchForm.value.submitForm();
    });
});

function result(response) {
    if (props.property !== undefined) {
        tableData.value = response.data[props.property];
        trashCount.value = response.data.trashCount;
    } else {
        tableData.value = response.data;
    }
}

const tableData = ref({ data: [] });

onMounted(() => {
    getServerData();
});

function getServerData(n) {
    page.value = n;
    nextTick().then(() => {
        searchForm.value.submitForm();
    });
}

watch(
    () => useRoute().query["trashed"],
    () => {
        trashed.value = useRoute().query["trashed"] == "true";
        nextTick().then(() => {
            searchForm.value.submitForm();
        });
    }
);
</script>
