<template>
    <button type="button" @click="sendForm" class="btn" :class="design">
        <slot />
    </button>
</template>
<script setup>
defineProps(['design']);

// const sendForm = inject('sendForm');
// function sendForm(){
//     sendForm();
// }

</script>