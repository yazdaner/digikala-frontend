export default defineNuxtPlugin((nuxtApp) => {

    nuxtApp.vueApp.config.globalProperties.$addArrayList('admin_panel_mian_menus',[
        {
            label : 'محصولات',
            icon : ['fas','list'],
            key : 'products',
            index : 1
        }
    ]);

    nuxtApp.vueApp.config.globalProperties.$addArrayList('admin_panel_child_menus',[
        {
            label : 'مدیریت محصولات',
            path : '/admin/products',
            index : 0,
            key : 'products',
            access : 'manage-products'
        },
        {
            label : 'افزودن محصولات جدید',
            path : '/admin/products/create',
            index : 1,
            key : 'products',
            access : 'manage-products'
        },
        
    ]);

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
