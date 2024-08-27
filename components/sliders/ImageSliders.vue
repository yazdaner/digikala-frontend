<template>
    <div class="image-slider">
        <div class="placeholder-glow" v-if="loading">
            <span class="placeholder w-100 bg-secondary"></span>
        </div>
        <swiper
            v-else
            :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
            :autoplay="{
                delay: 5000,
                disableOnInteraction: true,
            }"
            navigation
            :pagination="{
                clickable: true,
            }"
            @mouseenter="showNavigation"
            @mouseleave="hideNavigation"
        >
            <swiper-slide v-for="(slider, key) in sliders" :key="key">
                <a href="" class="d-block w-100">
                    <img
                        v-if="theme == 'mobile' && slider.mobile_image != null"
                        :src="
                            useRuntimeConfig().public.serverUrl +
                            '/slider/' +
                            slider.mobile_image
                        "
                        :alt="slider.title"
                    />

                    <img
                        v-else
                        :src="
                            useRuntimeConfig().public.serverUrl +
                            '/slider/' +
                            slider.image
                        "
                        :alt="slider.title"
                    />
                </a>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script setup>
const { $axios } = useNuxtApp();
const sliders = ref([]);
onMounted(() => {
    $axios
        .get(useRuntimeConfig().public.api + "/sliders/all?group=index")
        .then((response) => {
            sliders.value = response.data;
        })
        .finally(() => {
            loading.value = false;
        });
});
const theme = ref(useState("theme"));

function showNavigation() {
    document.querySelector(".image-slider .swiper-button-prev").style.display =
        "flex";
    document.querySelector(".image-slider .swiper-button-next").style.display =
        "flex";
}
function hideNavigation() {
    document.querySelector(".image-slider .swiper-button-prev").style.display =
        "none";
    document.querySelector(".image-slider .swiper-button-next").style.display =
        "none";
}
const loading = ref(true);
</script>
<style>
.image-slider img {
    height: 400px;
    width: 100%;
    object-fit: cover;
}

.image-slider .swiper-button-next::after,
.image-slider .swiper-button-prev::after {
    color: black !important;
    font-size: 16px;
    font-weight: 900;
}

.image-slider .swiper-button-next,
.image-slider .swiper-button-prev {
    border: 1px solid #c0c2c5;
    background-color: white;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    top: 80%;
    display: none;
}

.image-slider .swiper-button-next {
    right: 80px;
}

.image-slider .swiper-button-prev {
    right: 30px;
}

.image-slider .swiper-pagination-bullet {
    transition: width 0.2s ease-in-out;
    width: 4px;
    height: 4px;
}

.image-slider .swiper-pagination-bullet-active {
    background-color: #fff;
    border-radius: 9999px;
    opacity: 1;
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
    transition: width 0.2s ease-in-out;
    height: 6px;
    width: 16px;
}

.image-slider .placeholder {
    height: 400px;
}

@media (max-width: 768px) {
    .image-slider img {
        height: 268px;
    }
    .image-slider .placeholder {
        height: 268px;
    }
}
</style>
