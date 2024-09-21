<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <FormTextInput label="نام برند" 
                    :rules="['required']"
                    name="name"
                    id="name"
                    :initial-value="(model !== null && model !== undefined) ? modal.name : null"
                />
            </div>
            <div class="col-md-6">
                <FormTextInput label="نام انگلیسی برند" 
                    :rules="['required']"
                    name="en_name"
                    id="en_name"
                    :initial-value="(model !== null && model !== undefined) ? modal.en_name : null"
                />
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps(['model'])
</script>