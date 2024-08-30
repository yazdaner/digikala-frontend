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
                <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
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
                        <nuxt-link class="color-gray" to="/">
                            اتاق خبر دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class="color-gray" to="/">
                            فروش در دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class="color-gray" to="/">
                            فرصت‌های شغلی
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class="color-gray" to="/">
                            گزارش تخلف در دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class="color-gray" to="/">
                            تماس با دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class="color-gray" to="/">
                            درباره دیجی‌کالا
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="col-md-3">
                <h5 class="mb-3">با دیجی‌کالا</h5>
                <ul class="none-list-style p-0">
                    <li class="mb-3 fs-15">
                        <nuxt-link class="color-gray" to="/">
                            اتاق خبر دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class="color-gray" to="/">
                            فروش در دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class="color-gray" to="/">
                            فرصت‌های شغلی
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class="color-gray" to="/">
                            گزارش تخلف در دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class="color-gray" to="/">
                            تماس با دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class="color-gray" to="/">
                            درباره دیجی‌کالا
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="col-md-3">
                <h5 class="mb-3">با دیجی‌کالا</h5>
                <ul class="none-list-style p-0">
                    <li class="mb-3 fs-15">
                        <nuxt-link class="color-gray" to="/">
                            اتاق خبر دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class="color-gray" to="/">
                            فروش در دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class="color-gray" to="/">
                            فرصت‌های شغلی
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class="color-gray" to="/">
                            گزارش تخلف در دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class="color-gray" to="/">
                            تماس با دیجی‌کالا
                        </nuxt-link>
                    </li>
                    <li class="mb-3 fs-15">
                        <nuxt-link class="color-gray" to="/">
                            درباره دیجی‌کالا
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="col-md-3">
                <h5 class="mb-3">همراه ما باشید!</h5>
                <nuxt-link to="/">
                    <fa-icon
                        :icon="['fab', 'instagram']"
                        class="social-icon-footer"
                    />
                </nuxt-link>
                <nuxt-link to="/">
                    <fa-icon
                        :icon="['fab', 'twitter']"
                        class="social-icon-footer"
                    />
                </nuxt-link>
                <nuxt-link to="/">
                    <fa-icon
                        :icon="['fab', 'linkedin']"
                        class="social-icon-footer"
                    />
                </nuxt-link>
                <nuxt-link to="/">
                    <fa-icon
                        :icon="['fab', 'fa-youtube']"
                        class="social-icon-footer"
                    />
                </nuxt-link>
            </div>
        </div>
        <div class="row mt-5 border-top">
            <div class="col-md-8">
                <h5 class="color-gray-3">
                    فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
                </h5>
                <div class="mt-3">
                    <continued-text-widget :text="text" length="400" />
                </div>
            </div>
            <div class="col-md-4">
                <div class="d-flex text-center float-left">
                    <div class="certificate-footer">
                        <img
                            src="/public/images/footer/kasbokar.webp"
                            alt="kasbokar"
                        />
                    </div>
                    <div class="certificate-footer">
                        <img src="/public/images/footer/rezi.webp" alt="rezi" />
                    </div>
                    <div class="certificate-footer">
                        <img
                            src="/public/images/footer/image-placeholder.svg"
                            alt="image-placeholder"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-5 border-top">
            <p class="fs-12 color-gray-3">
                برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر
                «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن
                آوازه (فروشگاه آنلاین دیجی‌کالا) است.
            </p>
        </div>
    </div>
</template>
<script setup>
const shopSetting = useState("shopSetting");
import ContinuedTextWidget from "~/components/theme/ContinuedTextWidget.vue";
const text = ref(
    "یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌ اینترنتی دیگری، این است که کالای خریداری شده چه زمانی به دستشان می‌رسد. دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با فروشنده کالا،‌ مقصد کالا و همچنین نوع کالا در اختیار کاربران خود قرار می‌دهد. هر یک از روش های ارسال دیجی کالا شرایط و ویژگی‌های خاص خود را دارند که ممکن است گاهی برای کاربران جدید، مبهم و پیچیده به نظر برسند. برای آگاهی بیشتر مشتریان از خدمات دیجی‌کالا، این فروشگاه اینترنتی در بخشی از وب‌سایت خود راهنمای کاملی از شیوه‌‌های ارسال را به صورت ساده و به دور از پیچیدگی، قرار داده است که شامل 8 نوع ارسال کالا به روش‌های زیر است: ارسال امروز، دریافت حضوری، دریافت از گنجه، ارسال توسط فروشنده، ارسال عادی، ارسال کالاهای بزرگ، سنگین و فوق سنگین، ارسال سریع سوپرمارکتی، ارسال با پستکدام محصولات در دیجی‌کالا قابل سفارش هستند؟ یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌ اینترنتی دیگری، این است که کالای خریداری شده چه زمانی به دستشان می‌رسد. دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با فروشنده کالا،‌ مقصد کالا و همچنین نوع کالا در اختیار کاربران خود قرار می‌دهد. هر یک از روش های ارسال دیجی کالا شرایط و ویژگی‌های خاص خود را دارند که ممکن است گاهی برای کاربران جدید، مبهم و پیچیده به نظر برسند. برای آگاهی بیشتر مشتریان از خدمات دیجی‌کالا، این فروشگاه اینترنتی در بخشی از وب‌سایت خود راهنمای کاملی از شیوه‌‌های ارسال را به صورت ساده و به دور از پیچیدگی، قرار داده است که شامل 8 نوع ارسال کالا به روش‌های زیر است: ارسال امروز، دریافت حضوری، دریافت از گنجه، ارسال توسط فروشنده، ارسال عادی، ارسال کالاهای بزرگ، سنگین و فوق سنگین، ارسال سریع سوپرمارکتی، ارسال با پستکدام محصولات در دیجی‌کالا قابل سفارش هستند؟"
);
</script>
