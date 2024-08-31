<template>
    <button type="button" @click="sendForms" class="btn" :class="design">
        <slot />
    </button>
</template>
<script setup>
defineProps(['design']);

const sendForm = inject('sendForm');
function sendForms(){
    sendForm();
}

</script>