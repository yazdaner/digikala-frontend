<template>
    <div><div class="theme-header">
        <div class="d-flex align-items-center">
            <fa-icon :icon="['fas','bars']" class="cursor-pointer" @click="toggled = !toggled"/>
        </div>
    </div>
    </div>
</template>
<script setup>
const toggled = useState("adminSidebarToggle");
</script>