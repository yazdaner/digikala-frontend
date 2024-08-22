<template>
    <div class="header-container">
        <header class="theme-header w-100">
            <div class="w-100 d-flex">
                <div class="d-flex align-items-center flex-grow-1">
                    <div class="logo">
                        <nuxt-link to="/">
                            <img
                                :src="
                                    useRuntimeConfig().public.serverUrl +
                                    '/' +
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
                <div class="hover-line"><div></div></div>
                <ul class="header-navigation d-flex">
                    <li @mouseenter="showMegaMenu" @mouseleave="hideMegaMenu">
                        <a class="text-bold text-dark fs-16">
                            <fa-icon
                                class="pl-5px color-gray-2"
                                :icon="['fas', 'bars']"
                            />
                            <span>دسته بندی کالاها</span>
                        </a>
                        <mega-menu />
                    </li>

                    <li class="severense-line">
                        <nuxt-link to="/">
                            <fa-icon
                                class="pl-5px color-gray-2"
                                :icon="['fas', 'percent']"
                            />
                            <span>شگفت‌ انگیزها</span>
                        </nuxt-link>
                    </li>

                    <li>
                        <nuxt-link to="/">
                            <fa-icon
                                class="pl-5px color-gray-2"
                                :icon="['fas', 'store-alt']"
                            />
                            <span>سوپر مارکت</span>
                        </nuxt-link>
                    </li>

                    <li>
                        <nuxt-link to="/">
                            <fa-icon
                                class="pl-5px color-gray-2"
                                :icon="['fas', 'fire-flame-curved']"
                            />
                            <span>پرفروش‌ ترین‌ها</span>
                        </nuxt-link>
                    </li>

                    <li>
                        <nuxt-link to="/">
                            <fa-icon
                                class="pl-5px color-gray-2"
                                :icon="['fas', 'gift']"
                            />
                            <span>تخفیف‌ ها و پیشنهاد ها</span>
                        </nuxt-link>
                    </li>

                    <li class="severense-line">
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
    </div>
</template>
<script setup>
import FastProductsSearch from "./FastProductsSearch.vue";
import MegaMenu from "./MegaMenu.vue";
const shopSetting = useState("shopSetting");

const megaMenu = ref(useState("megaMenu"));
megaMenu.value = false;

function showMegaMenu() {
    megaMenu.value = true;
}
function hideMegaMenu() {
    megaMenu.value = false;
}

onMounted(() => {
    document
        .querySelectorAll(".theme-header .header-navigation li")
        .forEach((el) => {
            el.addEventListener("mouseenter", function () {
                const li_width = el.offsetWidth;
                const full_width =
                    document.querySelector(".theme-header").clientWidth;
                const right = full_width - li_width - el.offsetLeft;
                document.querySelector(
                    ".theme-header .hover-line"
                ).style.width = li_width + "px";
                document.querySelector(
                    ".theme-header .hover-line"
                ).style.transform = "scaleX(1)";
                document.querySelector(
                    ".theme-header .hover-line"
                ).style.right = right + "px";
            });
            el.addEventListener("mouseleave", function () {
                document.querySelector(
                    ".theme-header .hover-line"
                ).style.transform = "scaleX(0)";
            });
        });
});
</script>
