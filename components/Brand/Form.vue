<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <FormTextInput label="نام برند" 
                    :rules="['required']"
                    name="name"
                />
            </div>
            <div class="col-md-6">
                
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps(['model'])
</script>