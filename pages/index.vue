<template>
    <div>
        <image-sliders />
        <products-list title="جدید ترین محصولات" row="n" column="n" />
        <products-list title="پرفروش ترین محصولات" row="1" column="n" />
        <products-list title="داغ ترین محصولات" row="3" column="n" />
    </div>
</template>
<script setup>
const theme = ref(useState("theme"));
import ImageSliders from "~/components/sliders/ImageSliders.vue";
import ProductsList from "~/components/shop/widgets/ProductsList.vue";
</script>
