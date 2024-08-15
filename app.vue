<template>
    <div>
        <nuxt-layout>
            <nuxt-page />
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
</script>
