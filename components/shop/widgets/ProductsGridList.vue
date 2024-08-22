<template>
    <div class="product-grid-list">
        <template v-for="(product,key) in products" :key="key">
            <component :is="getViewComponent()" :product="product" :index="key+1" :loading="loading"></component>
        </template>
    </div>
</template>
<script setup>
defineProps(['loading','products']);
import theme1 from '../productview/theme1.vue';
const theme = ref('theme1');
function getViewComponent(){
    if(theme.value == 'theme1'){
        return theme1;
    }
}
</script>