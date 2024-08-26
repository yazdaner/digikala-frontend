<template>
    <swiper
        class="swiper-c products-horizontal-slider"
        :modules="[SwiperNavigation]"
        navigation
        slides-per-view="auto"
    >
        <template v-if="loading == false">
            <swiper-slide
                v-for="i in Math.ceil(products.length / row)"
                :key="i"
            >
                <template v-for="n in parseInt(row)" :key="n">
                    <component
                        :is="getViewComponent()"
                        :product="products[(getProductKey(i,n))-1]"
                        :index="getProductKey(i,n)"
                        :loading="loading"
                    />
                </template>
            </swiper-slide>
        </template>
        <template v-else>
            <swiper-slide v-for="i in Math.ceil(18 / row)" :key="i">
                <template v-for="n in parseInt(row)" :key="n">
                    <component
                        :is="getViewComponent()"
                        :product="null"
                        :index="getProductKey(i,n)"
                        :loading="loading"
                    />
                </template>
            </swiper-slide>
        </template>
    </swiper>
</template>
<script setup>
defineProps(["loading", "products", "row"]);
import theme1 from "../productview/theme1.vue";
import theme2 from "../productview/theme2.vue";
const theme = ref("theme2");
function getViewComponent() {
    if (theme.value == "theme2") {
        return theme1;
    } else if (theme.value == "theme2") {
        return theme2;
    }
}
function getProductKey(column,n){
    let number = ((column-1)+n) + (column-1);
    if(column>1){
        number = number+(column-1);
    }
    return number;
}
</script>
