<template>
    <AdminPanelBox title="افزودن برند جدید">
        <FormComponent action="admin/brands"
            :result="result" method="post"
        >
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

function result(response)
{
    console.log(response);
}

</script>
