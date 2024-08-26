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
                <skeleton-image class="product-small-image me-3" v-else />
            </div>
            <div class="d-flex" v-if="product != null">
                <div class="product-number-box mx-2">
                    {{ $replaceEnNumber(index) }}
                </div>
                <div class="product-title-box">
                    <span class="title_two_line">
                        {{ product.title }}
                    </span>
                </div>
            </div>
            <skeleton-text-two-line class="w-100" v-else />
        </nuxt-link>
    </div>
</template>
<script setup>
defineProps(["loading", "product", "index"]);
import SkeletonImage from "~/components/core/SkeletonImage.vue";
import SkeletonTextTwoLine from "~/components/core/SkeletonTextTwoLine.vue";
</script>
