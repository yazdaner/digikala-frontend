<template>
    <ShopProductDesktop :product :pending v-if="theme == 'desktop'" />
    <ShopProductMobile :product :pending v-else />
</template>
<script setup>
const theme = useState("theme");
const route = useRoute();
const url = useRuntimeConfig().public.api + route.fullPath;
const { data: product, pending } = useFetch(url);

</script>
