<template>
    <div class="checkbox-div">
        <input type="checkbox" v-model="model" :id="id" />
        <label @click="model =! model" :for="id">{{ label }}</label>
        <input type="hidden" :name="name" :value="model" class="c-input"/>
    </div>
</template>
<script setup>
const model = defineModel();
const props = defineProps({
    id: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    label: {
        type: String,
    },
    initialValue: {
        type: [String, Number],
    },
});
onMounted(() => {
    if (props.initialValue !== undefined || props.initialValue !== "") {
        model.value = props.initialValue;
    }else{
        model.value = false;
    }
});
</script>
