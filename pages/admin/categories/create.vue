<template>
    <AdminBreadcrumb :items/>
    <AdminPanelBox title="افزودن دسته بندی جدید" requestRoute="admin/categories">
        <FormComponent action="admin/categories" :result="result" method="post">
            <CategoryForm />
            <div class="w-100 my-4">
                <FormButton design="btn-success"> ثبت </FormButton>
            </div>
        </FormComponent>
    </AdminPanelBox>
</template>
<script setup>
definePageMeta({
    layout: "admin",
    middleware: ["auth"],
});

function result(response) {
    if (response.data !== undefined && response.data.status == "ok") {
        navigateTo("/admin/categories");
    }
}

const items =[
    {
        title : 'مدیریت دسته بندی ها',
        path : '/admin/categories'
    },
    {
        title : 'ایجاد دسته بندی',
    }
]
</script>
