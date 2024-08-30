<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup>
    const rules = ref([]);
    function addRule(fun){
        rules.value.push(fun);
    }

    function sendForm(){
        rules.value[0]();
    }
    provide('addRule',addRule);
    provide('sendForm', sendForm);
</script>
