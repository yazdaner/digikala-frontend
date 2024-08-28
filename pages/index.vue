<template>
    <div>
        <image-sliders />
        <selected-categories />
        <products-list title="جدید ترین محصولات" row="n" column="n" />
        <products-list title="پرفروش ترین محصولات" row="1" column="n" />
        <products-list title="داغ ترین محصولات" row="3" column="n" />
    </div>
</template>
<script setup>
import ImageSliders from "~/components/shop/sliders/ImageSliders.vue";
import ProductsList from "~/components/shop/widgets/ProductsList.vue";
import SelectedCategories from "~/components/shop/category/SelectedCategories.vue";
</script>
