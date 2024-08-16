<template>
    <header class="theme-header w-100">
        <div class="w-100 d-flex">
            <div class="d-flex align-items-center flex-grow-1">
                <div class="logo">
                    <nuxt-link to="/">
                        <img
                            :src="
                                useRuntimeConfig().public.serverUrl +
                                shopSetting.icon
                            "
                            alt="logo"
                        />
                    </nuxt-link>
                </div>
                <fast-products-search />
            </div>
        </div>

        <div class="d-flex w-100">
            <ul class="header-navigation d-flex">
                <li>
                    <a class="text-bold text-dark fs-16">
                        <fa-icon class="pl-5px" :icon="['fas', 'bars']" />
                        <span>دسته بندی کالاها</span>
                    </a>
                    <mega-menu />
                </li>

                <li>
                    <nuxt-link to="/">
                        <fa-icon class="pl-5px" :icon="['fas', 'percent']" />
                        <span>شگفت‌ انگیزها</span>
                    </nuxt-link>
                </li>

                <li>
                    <nuxt-link to="/">
                        <fa-icon class="pl-5px" :icon="['fas', 'store-alt']" />
                        <span>سوپر مارکت</span>
                    </nuxt-link>
                </li>

                <li>
                    <nuxt-link to="/">
                        <fa-icon class="pl-5px" :icon="['fas', 'fire-flame-curved']" />
                        <span>پرفروش‌ ترین‌ها</span>
                    </nuxt-link>
                </li>

                <li>
                    <nuxt-link to="/">
                        <fa-icon class="pl-5px" :icon="['fas', 'gift']" />
                        <span>تخفیف‌ ها و پیشنهاد ها</span>
                    </nuxt-link>
                </li>

                <li>
                    <nuxt-link to="/">
                        <span>سوالی دارید؟</span>
                    </nuxt-link>
                </li>

                <li>
                    <nuxt-link to="/">
                        <span>در دیجی‌کالا بفروشید!</span>
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </header>
</template>
<script setup>
import FastProductsSearch from "./FastProductsSearch.vue";
import MegaMenu from "./MegaMenu.vue";
const shopSetting = useState("shopSetting");
</script>
