<template>
    <ul>
        <li v-for="(menu, key) in menuList" :key="key">
            <nuxt-link :to="menu.path" v-if="!checkHasChildMenu(menu.key)">
                <div class="main-menu">
                    <div>
                        <fa-icon :icon="menu.icon" />
                        <span class="label">{{ menu.label }}</span>
                    </div>
                </div>
            </nuxt-link>
            <template v-else>
                <div class="main-menu"
                    @click="showChildMenu(key)"
                >
                    <div>
                        <fa-icon :icon="menu.icon" />
                        <span class="label">{{ menu.label }}</span>
                    </div>
                    <fa-icon :icon="['fas', 'fa-angle-down']" />
                </div>
                <transition name="child-menu">
                    <ul class="child-menu-ul" v-if="activeMenu == key">
                        <template v-for="child in getChildMenus(menu.key)">
                            <li>
                                <nuxt-link :to="child.path">
                                    {{ child.label }}
                                </nuxt-link>
                            </li>
                        </template>
                    </ul>
                </transition>
            </template>
        </li>
    </ul>
</template>
<script setup>
const mainMenus =
    useNuxtApp().vueApp.config.globalProperties.$admin_panel_mian_menus;
const childMenus =
    useNuxtApp().vueApp.config.globalProperties.$admin_panel_child_menus;

const activeMenu = ref(null);
const menuList = computed(() => {
    return mainMenus;
});

function checkHasChildMenu(key) {
    let result = false;
    childMenus.forEach((childMenu) => {
        if (childMenu.key == key && result == false) {
            result = true;
        }
    });
    return result;
}

function getChildMenus(key){
    let list = [];
    childMenus.forEach((childMenu) => {
        if (childMenu.key == key) {
            list.push(childMenu);
        }
    });
    return list;
}

function showChildMenu(key){
    if(activeMenu.value == key){
        activeMenu.value = null;
    }else{
        activeMenu.value = key;
    }
}

</script>
<style>
.child-slide-enter-active{
    animation: slide 0.3s;
}
.child-slide-leave-active{
    animation: slide 0.3s reverse;
}
</style>