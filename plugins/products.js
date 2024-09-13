export default defineNuxtPlugin((nuxtApp) => {
    const productPath = function (product) {
        if(product != null){
            return "product/yzd-" + product.id + "/" + product.slug;
        }
    };

    return {
        provide : {
            productPath
        }
    }
});
