<template>
    <TableComponent
        :columns="columns"
        :data="categories"
        title="دسته بندی"
        route="admin/categories"
        :fetch-data="fetchData"
    >
        <!-- <template v-slot:row="{ item }">
                <span>{{ item.icon }}</span>
            </template> -->
    </TableComponent>
</template>
<script setup>
definePageMeta({
    layout: "admin",
    middleware: ["auth"],
});
const categories = ref({ data: [] });
const { $axios } = useNuxtApp();
onMounted(() => {
    fetchData();
});
const columns = [
    {
        title: "نام دسته",
        value: "name",
    },
];

function fetchData(page = 1) {
    $axios
        .get(useRuntimeConfig().public.api + "/admin/categories?page=" + page)
        .then((response) => {
            categories.value = response.data.categories;
        });
}
</script>
