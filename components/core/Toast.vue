<template>
    <div class="toast-box" v-if="toast !== null">
        <div class="message" :class="toast.type">
            <fa-icon :icon="['fas', 'check']" v-if="toast.type == 'success'" />
            <span class="ps-2">
                {{ toast.message }}
            </span>
        </div>
    </div>
</template>
<script setup>
const toast = useState("toast", () => null);
watch(
    () => toast.value,
    () => {
        if (toast.value !== null) {
            setTimeout(() => {
                toast.value = null;
            }, 4000);
        }
    }
);
</script>
<style>
.toast-box {
    position: fixed;
    bottom: 1.25rem;
    width: 100%;
    display: flex;
    justify-content: center;
}
.toast-box .message {
    background-color: black;
    color: white;
    padding: 10px;
    border-radius: 5px;
}
.toast-box .message.success {
    background-color: #00ce00;
}
</style>
