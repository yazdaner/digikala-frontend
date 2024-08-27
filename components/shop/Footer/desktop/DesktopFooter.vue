<template>
    <div class="footer">
        <div class="w-100 logo-box p-4">
            <img
                class="logo"
                :src="useRuntimeConfig().public.serverUrl + '/' + shopSetting.icon"
                alt="logo"
            />
                <div class="d-flex fs-13 mt-4">
                    <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
                    <div class="px-3">|</div>
                    <p>۰۲۱-۹۱۰۰۰۱۰۰</p>
                    <div class="px-3">|</div>
                    <p class="">۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
                </div>
                    
        </div>
    </div>
</template>
<script setup>
const shopSetting = useState("shopSetting");
</script>
