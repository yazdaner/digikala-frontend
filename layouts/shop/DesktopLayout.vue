<template>
    <div>
        <desktop-header />
        <div>
            <slot />
        </div>
        <div v-if="showMegaMenu" class="black-cover"></div>
    </div>
</template>
<script setup>
import DesktopHeader from '~/components/shop/desktop/DesktopHeader.vue';
const showMegaMenu = useState('megaMenu');
</script>