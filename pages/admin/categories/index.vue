<template>
    <div class="admin-module-container">
        <TableComponent
            :columns="columns"
            :data="categories"
            title="دسته بندی"
            route="admin/categories"
        >
        </TableComponent>
    </div>
</template>
<script setup>
definePageMeta({
    layout: "admin",
    middleware: ["auth"],
});
const categories = ref({ data: [] });
const { $axios } = useNuxtApp();
onMounted(() => {
    $axios
        .get(useRuntimeConfig().public.api + "/admin/categories")
        .then((response) => {
            categories.value = response.data.categories;
            console.log(response.data.categories.data);
        });
});
const columns = [
    {
        title: "نام دسته",
        value: "name",
    },
];
</script>
