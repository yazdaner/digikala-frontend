<template>
    <div>
        <swiper class="mySwiper">
            <swiper-slide v-for="(slider,key) in sliders" :key="key">
                <img :src="useRuntimeConfig().public.serverUrl+'slider/'+slider.image" :alt="slider.title">
            </swiper-slide>
        </swiper>
    </div>
</template>
<script setup>
const {$axios} = useNuxtApp();
const sliders = ref([]);
onMounted(() => {
    $axios.get(useRuntimeConfig().public.api +'/sliders/all?group=index').then((response)=>{
        sliders.value = response.data;
    })
})
</script>
