<template>
    <div>
        <div 
            v-if="theme == 'desktop'"
            :style="{width : toggled == true ? '70px' : '260px'}"
        >
        <div class="sidebar" :class="[toggled == true ? 'toggled' : '']">
            <div class="title">
                <h5 class="">پنل مدیریت</h5>
            </div>
            <AdminSidebarMenus />
        </div>
    </div>
    </div>
</template>
<script setup>
const toggled = ref(false);
const theme = useState("theme");
</script>
