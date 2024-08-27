<template>
    <div class="placeholder-glow skeleton-text-two-line">
        <span class="placeholder bg-secondary"></span>
        <span class="placeholder bg-secondary"></span>
    </div>
</template>
<style>
.skeleton-text-two-line .placeholder:first-child {
    width: 100%;
    height: 10px;
    border-radius: 8px;
}
.skeleton-text-two-line .placeholder:last-child {
    width: 60%;
    height: 10px;
    border-radius: 8px;
    margin: 10px 0;
}
</style>
