<template>
    <div class="shop-layout">
        <desktop-layout v-if="theme == 'desktop'">
            <slot />
        </desktop-layout>
        <mobile-layout v-else>
            <slot />
        </mobile-layout>
    </div>
</template>
<script setup>
import DesktopLayout from './shop/DesktopLayout.vue';
import MobileLayout from './shop/MobileLayout.vue';
const theme = useState('theme') ;
</script>