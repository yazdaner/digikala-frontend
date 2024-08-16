<template>
    <div>
        <nuxt-layout>
            <div v-if="pending"></div>
            <nuxt-page v-else />
        </nuxt-layout>
</div>
</template>
<script setup>
const theme = ref(useState("theme"));
onMounted(() => {
    theme.value = window.innerWidth >= 1200 ? "desktop" : "mobile";
    window.addEventListener("resize", () => {
        theme.value = window.innerWidth >= 1200 ? "desktop" : "mobile";
    });
});

const {data:shopSetting,pending} = await useFetch('http://127.0.0.1:8000/api/setting/shop');
useState('shopSetting',()=>shopSetting);
</script>
