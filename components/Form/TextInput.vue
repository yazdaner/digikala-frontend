<template>
    <div class="input-box" :class="disable == true ? 'disable' : ''">
        <label v-if="hideLabel != true" :style="{ top: top }">
            {{ label }}
        </label>
        <div class="input-div" :class="[error ? 'error-border' : '']">
            <slot name="perfix"></slot>
            <input
                class="form-control"
                :disabled="disable"
                :placeholder="placeholder != undefined ? placeholder : ''"
                @keyup="inputKeyUp"
                @focusout="inputFocusout"
                @focus="inputFocus"
                @click="inputClick"
                v-model="value"
                />
            <slot name="suffix"></slot>
        </div>
        <div v-if="error" class="has-error">
            {{ error }}
        </div>
    </div>
</template>
<script setup>
import { inputKeyUp, inputFocusout,inputFocus, inputClick } from "~/functions/form.js";
defineProps({
    disable: {
        type: Boolean,
    },
    label: {
        type: String,
    },
    hideLabel: {
        type: Boolean,
    },
    placeholder: {
        type: String,
    },
});

const top = ref("-12px");
const error = ref(false);
const value = defineModel();

onMounted(()=>{
    if(value.value == '' || value.value == null){
        top.value = '12px';
    }else{
        top.value = '-12px';
    }
    const addRules = inject('addRules');
    addRules('','validate');
})

</script>
<style>
.input-box {
    margin: 15px 0;
    position: relative;
}
.input-box label {
    position: absolute;
    right: 20px;
    color: #b0b3b6;
    background-color: white;
    transition-duration: 0.2s;
}
.form-control {
    border-radius: 5px !important;
    height: 50px;
}

.form-control:focus {
    box-shadow: none !important;
}
</style>
