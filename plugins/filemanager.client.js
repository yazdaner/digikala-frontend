export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.$addArrayList(
        "admin_panel_mian_menus",
        [
            {
                label: "داشبورد",
                icon: ["fas", "file"],
                path: "/admin/",
                key: "filemanager",
            },
        ]
    );

    nuxtApp.vueApp.config.globalProperties.$addArrayList(
        "admin_panel_mian_menus",
        [
            {
                label: "دسته بندی",
                icon: ["fas", "cogs"],
                key: "categories",
                path: "/admin/categories/",
            },
        ]
    );
});
