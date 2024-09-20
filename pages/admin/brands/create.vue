<template>
    <AdminPanelBox title="افزودن برند جدید">
        <FormComponent>
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
</script>
