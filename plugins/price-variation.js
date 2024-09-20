export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.$variationParamComponent = (type) => {

        let result = null;
        if(type != null){
            const exArray = type.toString().split('\\');
            const ex = exArray[exArray.length - 1];
            if(exArray.length > 0 && ex != '')
            {
                result =  nuxtApp.vueApp.config.globalProperties['$' + ex + 'ShowComponent']
            }
        }
        return result;
    };
});
