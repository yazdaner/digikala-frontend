export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.$addArrayList('admin_panel_child_menus',[
        {
            label : 'دسته بندی ها',
            path : '/admin/categories',
            key : 'products',
            access : 'manage-categories'
        },
        
    ]);
});

