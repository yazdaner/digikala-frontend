<template>
    <div class="product-grid-list">
        <template v-if="loading == false">
            <template v-for="(product, key) in products" :key="key">
                <component
                    :is="getViewComponent()"
                    :product="product"
                    :index="key + 1"
                    :loading="loading"
                ></component>
            </template>
        </template>
        <template v-else>
            <template v-for="i in 10" :key="i">
                <component
                    :is="getViewComponent()"
                    :product="null"
                    :index="i"
                    :loading="loading"
            ></component>
            </template>
        </template>
    </div>
</template>
<script setup>
defineProps(["loading", "products"]);
import theme1 from "../productview/theme1.vue";
import theme2 from "../productview/theme2.vue";
const theme = ref("theme1");
function getViewComponent() {
    if (theme.value == "theme1") {
        return theme1;
    } else if (theme.value == "theme2") {
        return theme2;
    }
}
</script>
