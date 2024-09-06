export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.$addArrayList('admin_panel_mian_menus',[
        {
            label : 'مدیریت فایل ها',
            icon : ['fas','file'],
            key : 'filemanager',
        }
    ]);
    nuxtApp.vueApp.config.globalProperties.$addArrayList('admin_panel_child_menus',[
        {
            label : 'وب سرویس',
            path : '/admin/filemanager/web-services',
            index : 1,
            key : 'filemanager'
        },
        {
            label : 'ایمیل',
            path : '/admin/filemanager/email',
            key : 'filemanager'
        }
    ]);
});
