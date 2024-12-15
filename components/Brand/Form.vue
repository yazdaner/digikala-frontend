<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <FormTextInput
                    label="نام برند"
                    :rules="['required']"
                    name="name"
                    id="name"
                    :initialValue="model != null ? model.name : null"
                />
            </div>
            <div class="col-md-6">
                <FormTextInput
                    label="نام انگلیسی برند"
                    :rules="['required']"
                    name="en_name"
                    id="en_name"
                    :initialValue="model != null ? model.en_name : null"
                />
            </div>
            <div class="col-md-6">
                <FormFileInput label="آیکون" name="icon" />
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
</script>
