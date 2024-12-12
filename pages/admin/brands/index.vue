<template>
    <AdminBreadcrumb :items/>
   <TableBox
    title="مدیریت برند ها" route="admin/brands" label="برند" :columns
   />
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

const columns = [
    {
        title: "نام دسته",
        value: "name",
    },
];

</script>
