<template>
    <div>
        <nuxt-link to="/" class="product-theme2">
            <div class="product-image-box" v-if="product != null">
                <img
                    class="product-small-image"
                    :src="
                        useRuntimeConfig().public.serverUrl +
                        '/thumbnails/' +
                        product.image
                    "
                    :alt="product.title"
                />
            </div>

            <div class="info">
                <div class="w-100"></div>
                <div class="d-flex justify-content-between pt-3"></div>
                <div class="d-flex pt-3"></div>
            </div>
        </nuxt-link>
    </div>
</template>
<script setup>
defineProps(["loading", "product"]);
</script>
