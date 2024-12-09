<template>
    <AdminBreadcrumb :items/>
    <AdminPanelBox title="مدیریت برند ها" route="admin/brands" label="برند" trash-count="10">
    </AdminPanelBox>
</template>
<script setup>
definePageMeta({
    layout: "admin",
    middleware: ["auth"],
});

const items =[
    {
        title : 'مدیریت برند ها',
    }
]
</script>
