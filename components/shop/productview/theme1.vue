<template>
    <div>
        <nuxt-link :to="$productPath(product)" class="product-theme1">
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
                <CoreSkeletonImage class="product-small-image rounded me-3" v-else />
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
            <CoreSkeletonTextTwoLine class="w-100" v-else />
        </nuxt-link>
    </div>
</template>
<script setup>
defineProps(["loading", "product", "index"]);
</script>
