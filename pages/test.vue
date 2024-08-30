<template>
    <div>
        <div style="width: 300px; margin: 20px">
            <FormComponent>
                <FormTextInput label="نام کاربری" v-model="username" rules="required"/>
            </FormComponent>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: false,
});
const username = ref("yazdaner");
</script>
