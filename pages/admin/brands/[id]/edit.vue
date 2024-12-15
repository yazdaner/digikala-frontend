<template>
    <AdminBreadcrumb :items/>
    <AdminPanelBox title="ویرایش برند" :requestRoute="'/admin/brands/'+id">
        <FormComponent action="admin/brands" :result="result" method="post">
            <BrandForm :model="brand"/>
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

const {$axios} = useNuxtApp();

const id = useRoute().params.id;
const brand = ref(null);

onMounted(() => {
    $axios.get(
        useRuntimeConfig().public.api + '/admin/brands/' + id
    ).then((response) => {
        brand.value = response.data;
    }).catch((error) => {
        console.error(error);
    });

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
        title : 'ویرایش برند',
    }
]
</script>
