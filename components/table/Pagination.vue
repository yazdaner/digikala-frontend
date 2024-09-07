<template>
    <div>
        restore
    </div>
</template>
<script setup>
const props = defineProps({
    data:{
        type:Object
    },
    offset:{
        type:Number,
        default:4
    }
});

const pages = computed(()=>{
    let pages = [];
    if(props.data.to !== undefined){
        
    }
})

</script>