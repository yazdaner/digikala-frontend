<template>
    <AdminBreadcrumb :items/>
    <AdminPanelBox title="ویرایش دسته بندی" :requestRoute="url">
        <FormComponent :action="url" :result="result" method="post">
            <input type="hidden" name="_method" class="c-input" value="put">
            <BrandForm :model="category"/>
            <div class="w-100 my-4">
                <FormButton design="btn-primary"> ویرایش </FormButton>
            </div>
        </FormComponent>
    </AdminPanelBox>
</template>
<script setup>
definePageMeta({
    layout: "admin",
    middleware: ["auth"],
});

const id = useRoute().params.id;
const url = 'admin/categories/'+id;

const {$axios} = useNuxtApp();

const category = ref(null);

const formEvent = formStore();

onMounted(() => {
    formEvent.updateFormStatus(url, true);
    $axios.get(
        useRuntimeConfig().public.api + '/' + url
    ).then((response) => {
        formEvent.updateFormStatus(url, false);
        category.value = response.data;
    }).catch((error) => {
        formEvent.updateFormStatus(url, false);
        console.error(error);
    });

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
        title : 'ویرایش دسته بندی',
    }
]
</script>
