export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.$addArrayList(
        "admin_panel_mian_menus",
        [
            {
                label: "محصولات",
                icon: ["fas", "list"],
                key: "products",
                index: 1,
            },
        ]
    );

    const productPath = function (product) {
        if (product != null) {
            return "product/yzd-" + product.id + "/" + product.slug;
        }
    };

    return {
        provide: {
            productPath,
        },
    };
});
