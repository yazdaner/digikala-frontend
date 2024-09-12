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
                <skeleton-image class="product-image rounded" v-else></skeleton-image>
            </div>
            <div class="info" v-if="product != null">
                <div class="d-flex pt-3">
                    <discount-percentage :product="product" />
                    <product-final-price :product="product" />
                </div>
                <div class="d-flex pt-3">
                    <product-old-price :product="product" />
                </div>
            </div>
            <skeleton-text-two-line v-else></skeleton-text-two-line>
        </nuxt-link>
    </div>
</template>
<script setup>
defineProps(["loading", "product"]);
import SkeletonImage from "~/components/core/SkeletonImage.vue";
import SkeletonTextTwoLine from "~/components/core/SkeletonTextTwoLine.vue";

import ProductFinalPrice from "~/components/pricevariation/ProductFinalPrice.vue";
import DiscountPercentage from "~/components/pricevariation/DiscountPercentage.vue";
import ProductOldPrice from "~/components/pricevariation/ProductOldPrice.vue";
</script>
