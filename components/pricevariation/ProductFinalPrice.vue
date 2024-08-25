<template>
    <div v-if="variation != null" class="product-price mr-auto">
        {{ $replaceEnNumber($numberFormat(variation.price2 ?? variation.price1)) }}
        <span>تومان</span>
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