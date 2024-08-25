export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.$replaceEnNumber = function (num) {
        if (num !== undefined && num !== null) {
            num = num.toString();
            const find = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            const replace = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
            for (let i = 0; i < find.length; i++) {
                num = num.replace(new RegExp(find[i], "g"), replace[i]);
            }
        }
        return num;
    };
});