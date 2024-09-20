<template>
   <div class="admin-panel-box card position-relative">
    <div class="card-header d-flex justify-content-between align-items-center">
        <span>{{ title }}</span>
    </div>
    <div class="card-body">
        <slot />
    </div>
   </div>
</template>
<script setup>
defineProps({
    title : {
        type : String
    },
    removeNewLink : {
        type : Boolean
    },
    trashCount : {
        type : Number
    },
    route : {
        type : String
    },
    label : {
        type : String
    },
})
</script>