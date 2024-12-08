import { defineStore } from "pinia";

export const formStore = defineStore("form", () => {
    const sendStatus = ref({});
    const key = ref(0);
    function updateFormStatus(url, status) {
        sendStatus.value[url] = status;
        key.value++;
    }
    return {
        sendStatus,
        key,
        updateFormStatus,
    };
});
