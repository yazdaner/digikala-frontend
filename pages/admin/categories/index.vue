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
        title: "نام",
        value: "name",
    },
    {
        title: "نام انگلیسی",
        value: "en_name",
    },
    {
        title: "اسلاگ",
        value: "slug",
    },
    {
        title: "دسته والد",
        value: function(item){
            if(item.parent !== null){
                return item.parent.name;
            }else{
                return '-';
            }
        },
    },
    {
        title: "url",
        value: "url",
    },
   
];
</script>
