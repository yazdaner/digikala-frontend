import WarrantyShow from "../components/Warranty/show.vue";
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.$WarrantyShowComponent = WarrantyShow;
});
