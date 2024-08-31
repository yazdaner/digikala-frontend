<template>
    <button type="button" @click="sendRequest" class="btn" :class="design">
        <slot />
    </button>
</template>
<script setup>
defineProps(['design']);

const sendForm = inject('sendForm');
function sendRequest(){
    sendForm();
}

</script>