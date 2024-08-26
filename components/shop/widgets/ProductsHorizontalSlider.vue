<template>
    <swiper
        class="swiper-c products-horizontal-slider"
        :modules="[SwiperNavigation]"
        navigation
        slides-per-view="auto"
    >
        <template v-if="loading == false">
            <swiper-slide v-for="(product, key) in products" :key="key">
                <component
                    :is="getViewComponent()"
                    :product="product"
                    :index="key + 1"
                    :loading="loading"
                />
            </swiper-slide>
        </template>
        <template v-else>
            <swiper-slide v-for="i in 10" :key="i">
                <component
                    :is="getViewComponent()"
                    :product="null"
                    :index="i"
                    :loading="loading"
                />
            </swiper-slide>
        </template>
    </swiper>
</template>
<script setup>
defineProps(["loading", "products"]);
import theme1 from "../productview/theme1.vue";
import theme2 from "../productview/theme2.vue";
const theme = ref("theme2");
function getViewComponent() {
    if (theme.value == "theme1") {
        return theme1;
    } else if (theme.value == "theme2") {
        return theme2;
    }
}
</script>
