<template>
    <div>
        <nuxt-link :to="$productPath(product)" class="product-theme2">
            <div class="product-image-box">
                <img
                    v-if="product != null"
                    class="product-image"
                    :src="
                        useRuntimeConfig().public.serverUrl +
                        '/thumbnails/' +
                        product.image
                    "
                    :alt="product.title"
                />
                <CoreSkeletonImage class="product-image rounded" v-else />
            </div>
            <div class="info" v-if="product != null">
                <div class="d-flex pt-3">
                    <PriceVariationDiscountPercentage :product="product" />
                    <PriceVariationProductFinalPrice :product="product" />
                </div>
                <div class="d-flex pt-3">
                    <PriceVariationProductOldPrice :product="product" />
                </div>
            </div>
            <CoreSkeletonTextTwoLine v-else />
        </nuxt-link>
    </div>
</template>
<script setup>
defineProps(["loading", "product"]);
</script>
