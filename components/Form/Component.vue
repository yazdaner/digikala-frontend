<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup>
    function addRules(){
        alert('addRules');
    }
    provide('addRules',addRules);
</script>
