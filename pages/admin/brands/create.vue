<template>
    <AdminBreadcrumb :items/>
    <AdminPanelBox title="افزودن برند جدید" requestRroute="admin/brands">
        <FormComponent action="admin/brands" :result="result" method="post">
            <BrandForm />
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
        navigateTo("/admin/brands");
    }
}

const items =[
    {
        title : 'مدیریت برند ها',
        path : '/admin/brands'
    },
    {
        title : 'ایجاد برند',
    }
]
</script>
