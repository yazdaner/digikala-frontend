<template>
    <div class="product-page">
        <ShopProductDesktopSkeleton v-if="pending" />
        <div v-else>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4">
                        <ShopProductOptions :product />
                        <div class="product-gallery w-100">
                            <img
                                class="img-fluid"
                                v-if="images.length > 0"
                                :src="
                                    useRuntimeConfig().public.serverUrl +
                                    '/' +
                                    images[0].path
                                "
                                :alt="product.title"
                            />
                            <GallerySmallSwiper :gallery="product.gallery" />
                        </div>
                        <PriceReportWrong :product />
                    </div>
                    <div class="col-8 mt-5">
                        <div class="w-100">
                            <h1 class="lh-30 fs-19 text-bold">
                                {{ product.title }}
                            </h1>
                        </div>
                        <div class="row mt-4">
                            <div class="col-7">
                                <div class="detail-box"></div>
                            </div>
                            <div class="col-5">
                                <div class="variation-box">
                                    <PriceVariationDetail :product />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(["product", "pending"]);
const images = computed(() => {
    if (props.product != null) {
        return props.product.gallery.filter((item) => {
            return item.path.toString().indexOf("mp4") == -1;
        });
    }
});
</script>
