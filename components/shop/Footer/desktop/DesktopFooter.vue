<template>
    <div class="footer">
        <div class="w-100 logo-box p-4">
            <img
                class="logo"
                :src="
                    useRuntimeConfig().public.serverUrl + '/' + shopSetting.icon
                "
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
        <div
            class="d-flex justify-content-between align-items-center container"
        >
            <div class="text-center">
                <img
                    src="/images/footer/express-delivery.svg"
                    alt="express-delivery"
                />
                <p class="fs-13">اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</p>
            </div>
            <div class="text-center">
                <img
                    src="/images/footer/cash-on-delivery.svg"
                    alt="days-return"
                />
                <p class="fs-13">امکان پرداخت در محل</p>
            </div>
            <div class="text-center">
                <img src="/images/footer/support.svg" alt="support" />
                <p class="fs-13">۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ</p>
            </div>
            <div class="text-center">
                <img src="/images/footer/days-return.svg" alt="days-return" />
                <p class="fs-13">هفت روز ضمانت بازگشت کالا</p>
            </div>
            <div class="text-center">
                <img
                    src="/images/footer/original-products.svg"
                    alt="original-products"
                />
                <p class="fs-13">ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ</p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-3">
                <h5 class="mb-3">با دیجی‌کالا</h5>
                <ul class="none-list-style p-0">
                    <li class="mb-3 fs-15">
                        <nuxt-link class=" color-gray" to="/">
                            اتاق خبر دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class=" color-gray" to="/">
                            فروش در دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class=" color-gray" to="/">
                            فرصت‌های شغلی
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class=" color-gray" to="/">
                            گزارش تخلف در دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class=" color-gray" to="/">
                            تماس با دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class=" color-gray" to="/">
                            درباره دیجی‌کالا
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="col-md-3">
                <h5 class="mb-3">با دیجی‌کالا</h5>
                <ul class="none-list-style p-0">
                    <li class="mb-3 fs-15">
                        <nuxt-link class=" color-gray" to="/">
                            اتاق خبر دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class=" color-gray" to="/">
                            فروش در دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class=" color-gray" to="/">
                            فرصت‌های شغلی
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class=" color-gray" to="/">
                            گزارش تخلف در دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class=" color-gray" to="/">
                            تماس با دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class=" color-gray" to="/">
                            درباره دیجی‌کالا
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="col-md-3">
                <h5 class="mb-3">با دیجی‌کالا</h5>
                <ul class="none-list-style p-0">
                    <li class="mb-3 fs-15">
                        <nuxt-link class=" color-gray" to="/">
                            اتاق خبر دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class=" color-gray" to="/">
                            فروش در دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class=" color-gray" to="/">
                            فرصت‌های شغلی
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class=" color-gray" to="/">
                            گزارش تخلف در دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class=" color-gray" to="/">
                            تماس با دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class=" color-gray" to="/">
                            درباره دیجی‌کالا
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="col-md-3">
                <h5 class="mb-3">همراه ما باشید!</h5>
                
            </div>
        </div>
    </div>
</template>
<script setup>
const shopSetting = useState("shopSetting");
</script>
