<template>
    <div v-if="variation != null" class="product-price">
        {{ $replaceEnNumber($numberFormat(variation.price2)) }}
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