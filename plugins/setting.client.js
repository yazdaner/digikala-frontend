export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.$addArrayList('admin_panel_mian_menus',[
        {
            label : 'تنظیمات',
            icon : ['fas','cogs'],
            key : 'setting'
        }
    ]);
    nuxtApp.vueApp.config.globalProperties.$addArrayList('admin_panel_child_menus',[
        {
            label : 'وب سرویس',
            path : '/admin/setting/web-services',
            index : 1,
            key : 'setting'
        },
        {
            label : 'ایمیل',
            path : '/admin/setting/email',
            key : 'setting'
        }
    ]);
    nuxtApp.vueApp.config.globalProperties.$addArrayList('admin_panel_mian_menus',[
        {
            label : 'تنظیمات',
            icon : ['fas','cogs'],
            key : 'setting'
        }
    ]);
    nuxtApp.vueApp.config.globalProperties.$addArrayList('admin_panel_child_menus',[
        {
            label : 'وب سرویس',
            path : '/admin/setting/web-services',
            index : 1,
            key : 'setting'
        },
        {
            label : 'ایمیل',
            path : '/admin/setting/email',
            key : 'setting'
        }
    ]);
});
