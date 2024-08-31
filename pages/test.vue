<template>
    <div>
        <div style="width: 300px; margin: 20px">
            <FormComponent>
                <FormTextInput label="نام کاربری" v-model="username" :rules="['required',validUsername]" name="username" id="username"/>
                <FormTextInput label="رمز" rules="required" name="password" id="password"/>
                <FormButton design="btn-success">ورود</FormButton>
            </FormComponent>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: false,
});
const username = ref(null);

function validUsername(value, label){
    return true;
}
</script>
