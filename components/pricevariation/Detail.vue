<template>
    <div class="variation-detail">
        {{  }}
        <div class="d-flex justify-content-between"
        v-if="shopSetting != null && shopSetting['multi-seller'] == 'true'"
        >
        <span class="text-bold">
            فروشنده
        </span>
        <span @click="showOtherPrices()" class="color-secondary cursor-pointer">
            {{ $replaceEnNumber(getSellerCount()) }}
        </span>
        </div>
    </div>
</template>
<script setup>

const props = defineProps(["product"]);
const selectedVariation = useState("selectedVariation");
const shopSetting = useState("shopSetting");
onMounted(() => {
    if (
        props.product != null &&
        props.product.variations.length > 0 &&
        selectedVariation.value == null
    ) {
        selectedVariation.value = props.product.variations[0];
    }
});

function getSellerCount(){
    return props.product.variations.filter((variation)=>{
        if(variation.param1_id == props.product.variations[0].param1_id){
            return true;
        }else{
            return false;
        }
    }).length;
}
function showOtherPrices(){

}
</script>
