<template>
    <div class="variation-detail"
        v-if="selectedVariation != null"
    >
        <div
            class="d-flex justify-content-between"
            v-if="shopSetting != null && shopSetting['multi-seller'] == 'true' && getSellerCount() > 0"
        >
            <span class="text-bold"> فروشنده </span>
            <span
                @click="showOtherPrices()"
                class="color-blue fs-14 cursor-pointer"
            >
                {{ $replaceEnNumber(getSellerCount()) }} فروشنده دیگر
            </span>
        </div>
        <div class="px-4" v-if="selectedVariation.param2_type">
            <component :is="$variationParamComponent(selectedVariation.param2_type)" />
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

function getSellerCount() {
    return props.product.variations.filter((variation) => {
        if (variation.param1_id == selectedVariation.value.param1_id) {
            return true;
        } else {
            return false;
        }
    }).length;
}


function showOtherPrices() {}
</script>
