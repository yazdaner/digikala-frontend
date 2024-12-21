<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <FormTextInput
                    label="نام دسته بندی"
                    :rules="['required']"
                    name="name"
                    id="name"
                    :initialValue="model != null ? model.name : null"
                />
            </div>
            <div class="col-md-6">
                <FormTextInput
                    label="نام انگلیسی دسته بندی"
                    :rules="['required']"
                    name="en_name"
                    id="en_name"
                    :initialValue="model != null ? model.en_name : null"
                />
            </div>
            <div class="col-md-6">
                <FormNestedSelectTag
                    label="انتخاب سر دسته"
                    name="parent_id"
                    item-value="id"
                    item-text="name"
                    :rules="['required']"
                    :initialValue="model != null ? model.parent_id : 0"
                    :items="[...[{ id: 0, name: 'دسته اصلی' }, ...categories]]"
                    property="parent_id"
                    disable-icon
                />
            </div>
            <div class="col-md-6">
                <FormTextInput
                    label="url دسته"
                    name="url"
                    id="url"
                    :initialValue="model != null ? model.url : null"
                />
            </div>
            <div class="d-flex align-items-center">
                <div class="col-md-6">
                    <FormTextInput
                        label="آیکون"
                        name="icon"
                        id="icon"
                        :initialValue="model != null ? model.icon : null"
                    />
                </div>

                <div class="col-md-6 ms-4">
                    <a
                        class="color-blue"
                        href="https://fontawesome.com/search"
                        target="_blank"
                        >لیست آیکون ها</a
                    >
                </div>
            </div>
            <div class="d-flex align-items-center">
                <div class="col-md-6">
                    <FormFileInput label="تصویر دسته" name="image" />
                </div>
                <div class="col-md-6 ms-4">
                    <FormCheckBox
                        label="دسته کم اهمیت"
                        name="nonsignificant"
                        :selected="
                            model !== null && model !== undefined
                                ? model.nonsignificant
                                : false
                        "
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({
    model: {
        type: Object,
    },
});
const { $axios } = useNuxtApp();
const categories = ref([]);

onMounted(() => {
    getCategoriesList();
});

function getCategoriesList() {
    const url = useRuntimeConfig().public.api + "/categories/all";
    $axios.get(url).then((response) => {
        categories.value = response.data;
    });
}
</script>
