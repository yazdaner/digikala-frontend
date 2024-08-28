<template>
    <div
        :class="
            showAll == true
                ? 'fs-13 color-gray-2 line-h-2'
                : 'fs-13 color-gray-2 line-h-2 continued-text'
        "
        v-html="showAll ? text : text.toString().substring(0, length)"
    ></div>
    <span
        @click="showAll = !showAll"
        v-if="text.toString().length > length"
        class="fs-13 d-flex align-items-center color-blue mt-4"
    >
        <span v-if="!showAll" class="me-1 cursor-pointer">مشاهده بیشتر</span>
        <span v-else class="me-1 cursor-pointer">بستن</span>
        <fa-icon class="cursor-pointer" :icon="['fas', 'angle-left']" />
    </span>
</template>
<script setup>
defineProps(["text", "length"]);
const showAll = ref(false);
</script>
<style>
.continued-text {
    position: relative;
}

.continued-text:before {
    background: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 50%, #fff);
    content: "";
    height: 100%;
    position: absolute;
    width: 100%;
}
</style>
