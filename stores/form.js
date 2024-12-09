import { defineStore } from "pinia";

export const formStore = defineStore("form", () => {
    const sendStatus = ref({});
    const serverErrors = ref({});
    const key = ref(0);
    function updateFormStatus(url, status) {
        sendStatus.value[url] = status;
        key.value++;
    }
    function updateServerErrors(url, errors) {
        serverErrors.value[url] = errors;
        key.value++;
    }
    return {
        sendStatus,
        serverErrors,
        key,
        updateFormStatus,
        updateServerErrors,
    };
});
