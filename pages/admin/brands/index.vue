<template>
    <AdminBreadcrumb :items />
    <TableBox
        title="مدیریت برند ها"
        route="admin/brands"
        label="برند"
        :columns
        property="brands"
    >
        <template v-slot:form>
            <FormTextInput name="name" label="نام برند" />
        </template>
    </TableBox>
</template>
<script setup>
import IconColumn from "~/components/Brand/IconColumn.vue";
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
        component: IconColumn,
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
