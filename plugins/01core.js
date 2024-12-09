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
    nuxtApp.vueApp.config.globalProperties.$numberFormat = function (num) {
        if (num !== undefined && num !== null) {
            num = num.toString();
            let format = "";
            let counter = 0;
            for (let i = num.length - 1; i >= 0; i--) {
                format += num[i];
                counter++;
                if (counter == 3 && i !== 0) {
                    format += ",";
                    counter = 0;
                }
            }
            num = format.split("").reverse().join("");
        }
        return num;
    };
    nuxtApp.vueApp.config.globalProperties.$addArrayList = function (
        name,
        list
    ) {
        if (nuxtApp.vueApp.config.globalProperties["$" + name] == undefined) {
            nuxtApp.vueApp.config.globalProperties["$" + name] = list;
        } else {
            nuxtApp.vueApp.config.globalProperties["$" + name] = [
                ...nuxtApp.vueApp.config.globalProperties["$" + name],
                ...list,
            ];
        }
    };

    // nuxtApp.vueApp.config.globalProperties.$arraySort = function (array,key,order='asc') {
    //     return _.orderBy(array,key,order);
    // };

    nuxtApp.vueApp.config.globalProperties.$serverErrors = function (error) {
        let errors = [];
        if (error.response != undefined && error.response.status != 401) {
            let validateErrors = null;
            if (error.response.data !== undefined) {
                validateErrors = error.response.data.errors;
            }
            if (validateErrors !== null) {
                let values = Object.values(validateErrors);
                for (let i = 0; i < values.length; i++) {
                    errors.push(values[i][0]);
                }
            }
            if (errors.length == 0) {
                errors.push("خطا در ارتباط با سرور مجددا تلاش نمایید");
            }
        }
        return errors;
    };
});
