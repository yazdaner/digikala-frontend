<template>
    <div class="product-grid-list" v-if="loading==false">
        <template v-for="(product,key) in products" :key="key">
            <component :is="getViewComponent()" :product="product" :index="key+1" :loading="loading"></component>
        </template>
    </div>
</template>
<script setup>
defineProps(['loading','products']);
import theme1 from '../productview/theme1.vue';
import theme2 from '../productview/theme2.vue';
const theme = ref('theme2');
function getViewComponent(){
    if(theme.value == 'theme1'){
        return theme1;
    }else if(theme.value == 'theme2'){
        return theme2;
    }
}
</script>