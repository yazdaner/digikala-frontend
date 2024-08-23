<template>
    <div>
        <nuxt-link to="/" class="product-theme2">
            <div class="product-image-box">
                <img
                    v-if="product != null"
                    class="product-image m-3"
                    :src="
                        useRuntimeConfig().public.serverUrl +
                        '/thumbnails/' +
                        product.image
                    "
                    :alt="product.title"
                />
                <skeleton-image class="product-image" v-else></skeleton-image>
            </div>
            <div class="info">
                <div class="w-100">
                    <span class="title_two_line" v-if="product != null">
                        {{ product.title }}
                    </span>
                    <skeleton-text-line v-else></skeleton-text-line>
                </div>
                <div class="d-flex justify-content-between pt-3"></div>
                <div class="d-flex pt-3"></div>
            </div>
        </nuxt-link>
    </div>
</template>
<script setup>
defineProps(["loading", "product"]);
import SkeletonImage from "~/components/core/SkeletonImage.vue";
import SkeletonTextLine from "~/components/core/SkeletonTextLine.vue";
</script>
