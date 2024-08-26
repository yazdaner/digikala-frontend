<template>
    <div class="products-list">
        <div v-if="title !== undefined">
            <div>
                <h5 class="py-4 px-3 fs-18 text-bold">
                    {{title}}
                </h5>
            </div>
            <div class="title-line my-3"></div>
        </div>
        <products-list-view 
            :loading="pending"
            :products="products"
            :row="row"
            :column="column"
            :theme="theme"
        />
    </div>
</template>
<script setup>
defineProps(['title','row','column','theme']);
const {data:products,pending} = useFetch(useRuntimeConfig().public.api + '/shop/products?limit=15&variation=true');
import ProductsListView from './ProductsListView.vue';
</script>