<template>
    <div>
        <image-sliders/>
    </div>
</template>
<script setup>
const theme = ref(useState("theme"));
import ImageSliders from '~/components/sliders/ImageSliders.vue';
</script>