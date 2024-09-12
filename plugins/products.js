export default defineNuxtPlugin((nuxtApp) => {
    const productPath = function (product) {
        return "product/yzd-" + product.id + "/" + product.slug;
    };

    return {
        provide : {
            productPath
        }
    }
});
