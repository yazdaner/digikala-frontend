<template>
    <div>
        <div class="selected-categories">
            <div v-if="categories.length > 0">
                <h3 class="text-center m-5 fs-23">خرید بر اساس دسته‌ بندی</h3>
                <ul>
                    <li class="category-item" v-for="(category, key) in categories" :key="key">
                        <nuxt-link :to="getCategoryUrl(category)">
                            <img
                                class="category-image"
                                :src="
                                    useRuntimeConfig().public.serverUrl +
                                    '/category/' +
                                    category.image
                                "
                                :alt="category.name"
                            />
                            <p class="text-center fs-13 mt-1">
                                {{ category.name }}
                            </p>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
const categories = ref([]);
const { $axios } = useNuxtApp();
onMounted(() => {
    const url =
        useRuntimeConfig().public.api +
        "/shop/categories-data?ids=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16";
    $axios.get(url).then((response) => {
        categories.value = response.data;
    });
});
function getCategoryUrl(category) {
    let path = "/main/" + category.slug;
    if (category.parent_id != 0) {
        path = "/search/" + category.slug;
    }
    return path;
}
</script>
<style>
.selected-categories {
    width: 90%;
    height: 100%;
    margin: 10px 4%;
}

.selected-categories ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.selected-categories .category-image {
    width: 100px;
    height: 100px;
}

.selected-categories .category-item{
    margin: 30px;
}

</style>
