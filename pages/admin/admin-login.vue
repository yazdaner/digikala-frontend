<template>
    <div class="admin-login-page">
        <div class="wrap-login container">
            <h5 class="text-center my-5">ورود به پنل مدیریت فروشگاه</h5>
            <FormComponent class="mt-5" :send-function="login">
                <div class="row">
                    <div class="col-12">
                        <FormTextInput
                            label="نام کاربری"
                            :rules="['required']"
                            name="username"
                        />
                    </div>
                    <div class="col-12">
                        <FormPasswordInput
                            label="کلمه عبور"
                            :rules="['required']"
                            name="password"
                        />
                    </div>
                    <div class="row">
                        <FormButton design="btn-primary">ورود</FormButton>
                    </div>
                </div>
            </FormComponent>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: "",
});
const { $axios } = useNuxtApp();
async function login(data) {
    data["type"] = "admin";
    // const url = useRuntimeConfig().public.serverUrl + "/login";
    const url = useRuntimeConfig().public.serverUrl + "/sanctum/csrf-cookie";
    const response = await $axios.get(url, data);
}
</script>
