<template>
    <div>
        <nuxt-link to="/" class="product-theme1">
            <div class="product-image-box">
                <img
                    v-if="product != null"
                    class="product-small-image"
                    :src="
                        useRuntimeConfig().public.serverUrl +
                        '/thumbnails/' +
                        product.image
                    "
                    :alt="product.title"
                />
                <skeleton-image v-else></skeleton-image>
            </div>
            <div class="product-number-box mx-2">
                {{ $replaceEnNumber(index) }}
            </div>
            <div class="product-title-box">
                <span class="title_two_line" v-if="product != null">
                    {{product.title}}
                </span>
                <skeleton-text-line v-else></skeleton-text-line>
            </div>
        </nuxt-link>
    </div>
</template>
<script setup>
defineProps(["loading", "product", "index"]);
import SkeletonImage from "~/components/core/SkeletonImage.vue";
import SkeletonTextLine from "~/components/core/SkeletonTextLine.vue";
</script>
