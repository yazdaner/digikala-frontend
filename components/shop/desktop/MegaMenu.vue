<template>
   <div v-if="!pending">
    <div v-if="showMegaMenu" class="desktop-header-mega-menu">
        <div class="right-lsit">
            <ul class="none-list-style">
                <template v-for="(category, key) in categories" :key="key">
                    <li v-if="category.parent_id == 0">
                        <nuxt-link to="/">
                            <fa-icon :icon="category.icon" />
                            <span>{{ category.name }}</span>
                        </nuxt-link>
                    </li>
                </template>
            </ul>
        </div>
        <div class="left-list"></div>
    </div>
   </div>
</template>
<script setup>
const { data: categories, pending } = await useFetch(
    useRuntimeConfig().public.api + "/categories/all"
);
const showMegaMenu = inject('megaMenu');
</script>
<style>
@import "~/assets/mega-menu.css";
</style>