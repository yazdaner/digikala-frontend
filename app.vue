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
theme.value="desktop";
onMounted(() => {
    theme.value = window.innerWidth >= 1024 ? "desktop" : "mobile";
    window.addEventListener("resize", () => {
        theme.value = window.innerWidth >= 1024 ? "desktop" : "mobile";
    });
});

const { data: shopSetting, pending } = await useFetch(
    useRuntimeConfig().public.api + "/setting/shop"
);
useState("shopSetting", () => shopSetting);
</script>
