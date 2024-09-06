<template>
    <div>
        <div
            v-if="theme == 'desktop'"
            class="sidebar"
            :class="[toggled == true ? 'toggled' : '']"
        >
            <div class="title">
                <h5 class="">پنل مدیریت</h5>
            </div>
            <AdminSidebarMenus />
        </div>
    </div>
</template>
<script setup>
const toggled = useState("adminSidebarToggle", () => false);
const theme = useState("theme");
</script>
