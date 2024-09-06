<template>
    <client-only>
        <div class="panel-layout admin">
            <div class="d-flex">
                <admin-sidebar />
                <div class="content w-100" :style="{margin : toggled == true ? '0 70px 0 0' : '0 260px 0 0'}">
                    <admin-header />
                    <slot />
                </div>
            </div>
        </div>
    </client-only>
</template>
<script setup>
const toggled = useState("adminSidebarToggle");
</script>
<style>
@import "/assets/admin.css";
</style>
