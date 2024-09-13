<template>
    <div class="variation-detail">{{selectedVariation}}</div>
</template>
<script setup>
const props = defineProps(["product"]);
const selectedVariation = useState("selectedVariation");
onMounted(() => {
    if (
        props.product != null &&
        props.product.variations.length > 0 &&
        selectedVariation.value == null
    ) {
        selectedVariation.value = props.product.variations[0];
    }
});
</script>
