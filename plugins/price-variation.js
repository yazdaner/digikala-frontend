export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.$variationParamComponent = (type) => {

        let result = null;
        if(type != null){
            const ex = type.toString().split('\\');
            if(ex.length > 0 && ex[ex.length - 1] != '')
            {
                result =  nuxtApp.vueApp.config.globalProperties['$' + ex[ex.length - 1] + 'ShowComponent']
            }
        }
        return result;
    };
});
