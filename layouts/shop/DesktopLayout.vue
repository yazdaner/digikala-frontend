<template>
    <div>
        <desktop-header />
        <div>
            <slot />
        </div>
        <desktop-footer />
        <div v-if="showMegaMenu" class="black-cover"></div>
    </div>
</template>
<script setup>
import DesktopHeader from '~/components/shop/Header/desktop/DesktopHeader.vue';
import DesktopFooter from '~/components/shop/Footer/desktop/DesktopFooter.vue';
const showMegaMenu = useState('megaMenu');
</script>