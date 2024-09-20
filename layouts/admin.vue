<template>
    <client-only>
        <div class="panel-layout admin">
            <div class="d-flex">
                <admin-sidebar />
                <div class="content w-100" :class="toggled ? 'toggled' :''">
                    <admin-header />
                    <div class="admin-module-container">
                        <slot />
                    </div>
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
