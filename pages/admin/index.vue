<template>
    <div>
       <p>داشبود</p>

       <Modal el="yazdan" />
    </div>
</template>
<script setup>

definePageMeta({
    layout: 'admin',
    middleware : ['auth']
});

</script>