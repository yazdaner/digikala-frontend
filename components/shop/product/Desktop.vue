<template>
    <div class="product-page">
        <ShopProductDesktopSkeleton v-if="pending" />
        <div v-if="product != null">
            <!-- {{ product }} -->
            {{ images }}
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4">
                        <ShopProductOptions :product />
                        <div class="product-gallery w-100">
                            <img
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
                    <div class="col-5"></div>
                    <div class="col-3"></div>
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
