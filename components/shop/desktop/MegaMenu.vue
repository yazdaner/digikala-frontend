<template>
    <div v-if="!pending">
        <div v-if="showMegaMenu" class="desktop-header-mega-menu">
            <div class="right-list">
                <ul class="none-list-style">
                    <template v-for="(category, key) in categories" :key="key">
                        <li
                            v-if="category.parent_id == 0"
                            @mouseenter="selectedCatrgory = category"
                            @mouseleave="selectedCatrgory = null"
                        >
                            <nuxt-link to="/">
                                <fa-icon :icon="getIcon(category.icon)" />
                                <span>{{ category.name }}</span>
                            </nuxt-link>
                        </li>
                    </template>
                </ul>
            </div>
            <div class="left-list" v-if="selectedCatrgory != null">
                <nuxt-link to="/">
                    <span>همه محصولات </span>
                    <span>{{ selectedCatrgory.name }}</span>
                </nuxt-link>
                <ul class="none-list-style">
                    <template
                        v-for="child1 in getChildCategory(selectedCatrgory.id)"
                    >
                        <li>
                            {{ child1.name }}
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
const { data: categories, pending } = await useFetch(
    useRuntimeConfig().public.api + "/categories/all"
);
const showMegaMenu = inject("megaMenu");
const selectedCatrgory = ref(null);

function getChildCategory(id) {
    let list = [];

    categories.value.forEach(category => {
        if(category.parent_id == id){
            list.push(category);
        }
    });
    return list;
}

function getIcon(icon){
    console.log(icon);
    console.log(typeof(icon));
    return icon;
}
</script>
<style>
@import "~/assets/mega-menu.css";
</style>
