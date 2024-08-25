<template>
    <div v-if="(variation != null && variation.price2 != null)" class="product-price old-price mr-auto fs-13">
        {{ $replaceEnNumber($numberFormat(variation.price1)) }}
    </div>
</template>
<script setup>
const props = defineProps(['product'])
const variation = computed(()=>{
    const product = props.product;
    if(product !== null && product.variation !== null && product.variation !== undefined){
        return product.variation;
    }else{
        return null
    }
});
</script>
