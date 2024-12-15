<template>
    <AdminBreadcrumb :items/>
    <AdminPanelBox title="ویرایش برند" :requestRoute="url">
        <FormComponent :action="url" :result="result" method="post">
            <input type="hidden" name="_method" class="c-input" value="put">
            <BrandForm :model="brand"/>
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
const url = 'admin/brands/'+id;

const {$axios} = useNuxtApp();

const brand = ref(null);

const formEvent = formStore();

onMounted(() => {
    formEvent.updateFormStatus(url, true);
    $axios.get(
        useRuntimeConfig().public.api + '/' + url
    ).then((response) => {
        formEvent.updateFormStatus(url, false);
        brand.value = response.data;
    }).catch((error) => {
        formEvent.updateFormStatus(url, false);
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
