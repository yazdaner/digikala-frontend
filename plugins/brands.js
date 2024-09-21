export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.$addArrayList('admin_panel_child_menus',[
        {
            label : 'برند ها',
            path : '/admin/brands',
            key : 'products',
            access : 'manage-brands'
        },
        
    ]);
});
