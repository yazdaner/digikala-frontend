<template>
    <div>
        <nuxt-link to="/" class="product-theme1">
            <div class="product-image-box" v-if="product != null">
                <img class="product-small-image" :src="useRuntimeConfig().public.serverUrl +'/thumbnails/'+product.image" :alt="product.title">
            </div>
            <div class="product-number-box mx-2">
                {{ $replaceEnNumber(index) }}
            </div>
            <div class="product-title-box" v-if="product != null">
                {{ product.title }}
            </div>
        </nuxt-link>
    </div>
</template>
<script setup>
defineProps(['loading','product','index']);
</script>
