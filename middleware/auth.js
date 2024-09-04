export default defineNuxtRouteMiddleware((to,from)=>{
    if(process.client){
        const user = useState('user');
        if(user.value == null){
            return navigateTo('/login');
        }    
    }
});