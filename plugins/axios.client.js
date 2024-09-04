import axios from 'axios';
export default defineNuxtPlugin((nuxtApp) => {
    const axiosInstance = axios.create({
        withCredentials : true,
        withXSRFToken : true
    })
    return {
        provide: {
            axios:axiosInstance
        },
    };
});
