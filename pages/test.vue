<template>
    <div>
        <div style="width: 300px; margin: 20px">
            <FormComponent action="shop/categories-data?ids=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16" :result="showResponse">
                <FormTextInput label="نام کاربری" :rules="['required']" name="username" id="username"/>
                <FormTextInput label="xxxxxxxxx" :rules="['required']" name="xxxxxxxxx" id="xxxxxxxxx"/>
                <FormTextInput label="fff" :rules="['required']" name="fff" id="fff"/>
                <FormPasswordInput label="رمز" rules="required" name="password" id="password"/>
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

function showResponse(response)
{
    console.log(response);
}
</script>
