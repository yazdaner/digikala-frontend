<template>
    <div class="spinner" :class="[type]">
        <div class="a1"></div>
        <div class="a2"></div>
        <div class="a3"></div>
    </div>
</template>
<script setup>
defineProps({
    type: {
        type: String,
        default: "large",
    },
});
</script>
<style>
.spinner {
    display: flex;
}

.spinner div {
    background-color: deeppink;
    border-radius: 100%;
    animation: spinner 1.4s infinite;
    margin: 0 2px;
}

.spinner.small div {
    width: 5px;
    height: 5px;
}

.spinner.large div {
    width: 10px;
    height: 10px;
}

.spinner .a1 {
    animation-delay: -0.32s;
}

.spinner .a2 {
    animation-delay: -0.16s;
}

@keyframes spinner {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
}
</style>
