export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.$addArrayList('admin_panel_mian_menus',[
        {
            label : 'مدیریت فایل ها',
            icon : ['fas','file'],
            key : 'filemanager',
        }
    ]);
});
