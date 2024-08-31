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
        let sendForm = true;
        for (let i = 0; i < rules.value.length; i++) {
           let result = rules.value[i]();
            if(sendForm == true){
                sendForm = result;
            }
        }
        // if(sendForm == true){
            
        // }

    }
    provide('addRule',addRule);
    provide('sendForm', sendForm);
</script>
