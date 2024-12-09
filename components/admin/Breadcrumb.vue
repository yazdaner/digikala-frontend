<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <nuxt-link to="/admin">پیشخوان</nuxt-link>
            </li>
            <li
                class="breadcrumb-item"
                :class="key == items.length - 1 ? 'active' : ''"
                v-for="(item, key) in items"
                :key
                aria-current="page"
            >
                <nuxt-link
                    v-if="item['path'] !== undefined"
                    :to="item['path']"
                    >{{ item["title"] }}</nuxt-link
                >
                <a v-else href="#">{{ item["title"] }}</a>
            </li>
        </ol>
    </nav>
</template>
<script setup>
defineProps(["items"]);
</script>
<style>
.breadcrumb-item.active a{
    color:#9c9c9c;
}
</style>