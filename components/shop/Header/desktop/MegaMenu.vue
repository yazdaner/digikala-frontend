<template>
    <div v-if="!pending">
        <div v-if="showMegaMenu" class="desktop-header-mega-menu">
            <div class="right-list">
                <ul class="none-list-style">
                    <template v-for="(category, key) in categories" :key="key">
                        <li
                            v-if="category.parent_id == 0"
                            @mouseenter="selectedCatrgory = category"
                            :class="[
                                selectedCatrgory == category ? 'active' : '',
                            ]"
                        >
                            <nuxt-link to="/">
                                <fa-icon :icon="category.icon" class="pl-5px" />
                                <span>{{ category.name }}</span>
                            </nuxt-link>
                        </li>
                    </template>
                </ul>
            </div>
            <div class="left-list" v-if="selectedCatrgory != null">
                <nuxt-link to="/" class="all-products-category">
                    <span>همه محصولات </span>
                    <span>{{ selectedCatrgory.name }}</span>
                    <fa-icon
                        :icon="['fas', 'angle-left']"
                        class="pr-5px fs-10"
                    />
                </nuxt-link>
                <ul class="none-list-style">
                    <template
                        v-for="(child1, key) in getChildCategory(
                            selectedCatrgory.id
                        )"
                        :key="key"
                    >
                        <li class="main-group">
                            <nuxt-link to="/">
                                <span>{{ child1.name }}</span>
                                <fa-icon
                                    :icon="['fas', 'angle-left']"
                                    class="pr-5px fs-10"
                                />
                            </nuxt-link>
                        </li>

                        <template
                            v-for="(child2, key2) in getChildCategory(
                                child1.id
                            )"
                            :key="key2"
                        >
                            <li v-if="child2.nonsignificant == 0">
                                <nuxt-link
                                    :to="
                                        child2.url == null
                                            ? '/search/' +
                                              child1.slug +
                                              '/' +
                                              child2.slug
                                            : child2.url
                                    "
                                >
                                    <span>{{ child2.name }}</span>
                                </nuxt-link>
                            </li>
                        </template>
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
const showMegaMenu = useState('megaMenu');
// const showMegaMenu = true;

const selectedCatrgory = ref(null);

function getChildCategory(id) {
    let list = [];

    categories.value.forEach((category) => {
        if (category.parent_id == id) {
            list.push(category);
        }
    });
    return list;
}
</script>
<style>
@import "~/assets/mega-menu.css";
</style>
