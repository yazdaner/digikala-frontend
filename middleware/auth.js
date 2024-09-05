export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.client) {
        const { $axios } = useNuxtApp();
        const user = useState("user");
        if (user.value == null) {
            try {
                const response = await $axios.get(
                    useRuntimeConfig().public.api + "/user"
                );
                console.log(response.data);
                user.value = response.data;
            } catch (e) {
                console.log(e);
                return navigateTo("/login");
            }
        }
    }
});
