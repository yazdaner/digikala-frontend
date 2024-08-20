import axios from 'axios';
export default defineNuxtPlugin((nuxtApp) => {
    const axiosInstance = axios.create({

    })
    return {
        provide: {
            axios:axiosInstance
        },
    };
});
