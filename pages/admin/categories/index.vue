<template>
    <AdminBreadcrumb :items />
    <TableBox
        title="مدیریت دسته بندی ها"
        route="admin/categories"
        label="دسته بندی"
        :columns
        property="categories"
    >
        <template v-slot:form>
            <FormTextInput name="name" label="نام دسته بندی" />
        </template>
    </TableBox>
</template>
<script setup>
// import IconColumn from "~/components/Category/IconColumn.vue";
definePageMeta({
    layout: "admin",
    middleware: ["auth"],
});

const items = [
    {
        title: "مدیریت دسته بندی ها",
    },
];

const columns = [
    {
        title: "آیکون",
        value: "icon",
        // component: IconColumn,
    },
    {
        title: "نام دسته بندی",
        value: "name",
    },
    {
        title: "en_name",
        value: "en_name",
    },
    {
        title: "اسلاگ",
        value: "slug",
    },
    {
        title: "url",
        value: "url",
    },
];
</script>
