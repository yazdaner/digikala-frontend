<template>
    <div>
        <products-grid-list
            v-if="row == 'n' && column == 'n'"
            :loading="loading"
            :products="products"
        />
        <products-horizontal-slider
            v-if="row == '1' && column == 'n'"
            :loading="loading"
            :products="products"
        />
        <products-multi-row-slider
            v-if="row > 1"
            :loading="loading"
            :products="products"
            :row="row"
        />
    </div>
</template>
<script setup>
defineProps(["loading", "products", "row", "column"]);
import ProductsGridList from "./ProductsGridList.vue";
import ProductsHorizontalSlider from "./ProductsHorizontalSlider.vue";
import ProductsMultiRowSlider from "./ProductsMultiRowSlider.vue";
</script>
