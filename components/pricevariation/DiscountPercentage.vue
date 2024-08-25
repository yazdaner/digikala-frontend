<template>
    <div v-if="variation != null">
        <div v-if="variation.price1 != variation.price2" class="badge bg-danger">
        <span>٪</span>
        {{ $replaceEnNumber(discountPercenr()) }}
        </div>
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

function discountPercenr(){
    let percent = (variation.value.price1 - variation.value.price2) / variation.value.price1; 
    percent = percent * 100 ;
    return Math.ceil(percent) 
}
</script>