<template>
    <AdminBreadcrumb :items />
    <TableBox
        title="مدیریت برند ها"
        route="admin/brands"
        label="برند"
        :columns
        property="brands"
    />
</template>
<script setup>
definePageMeta({
    layout: "admin",
    middleware: ["auth"],
});

const items = [
    {
        title: "مدیریت برند ها",
    },
];

const columns = [
    {
        title: "آیکون",
        value: "icon",
    },
    {
        title: "نام برند",
        value: "name",
    },
    {
        title: "اسلاگ",
        value: "en_name",
    },
];
</script>
