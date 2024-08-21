<template>
    <div>
        <image-sliders/>
        <products-list title="جدید ترین محصولات" />
    </div>
</template>
<script setup>
const theme = ref(useState("theme"));
import ImageSliders from '~/components/sliders/ImageSliders.vue';
import ProductsList from '~/components/shop/widgets/ProductsList.vue';
</script>