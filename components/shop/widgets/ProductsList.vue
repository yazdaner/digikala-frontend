<template>
    <div class="products-list">
        <div v-if="title !== undefined">
            <div class="p-3 d-flex justify-content-center align-items-center">
                <!-- <fa-icon class="fs-21 fw-500 me-3 text-danger" :icon="['fas', 'fire-flame-curved']" /> -->
                <h5 class="fs-23 fw-500">
                    {{ title }}
                </h5>
            </div>
            <div class="title-line my-3"></div>
        </div>
        <products-list-view
            :loading="pending"
            :products="products"
            :row="row"
            :column="column"
        />
    </div>
</template>
<script setup>
defineProps(["title", "row", "column"]);
const { data: products, pending } = useFetch(
    useRuntimeConfig().public.api + "/shop/products?limit=15&variation=true"
);
import ProductsListView from "./ProductsListView.vue";
</script>
