<template>
    <div class="input-box" :class="disable == true ? 'disable' : ''">
        <label :for="id" v-if="hideLabel != true" :style="{ top: top }">
            {{ label }}
        </label>
        <div class="input-div" :class="[error ? 'error-border' : '']">
            <slot name="perfix"></slot>
            <input
                :name="name"
                :id="id"
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
import {
    inputKeyUp,
    inputFocusout,
    inputFocus,
    inputClick,
    validateInput,
} from "~/functions/form.js";
const props = defineProps({
    id: {
        type: [String],
    },
    name: {
        type: [String],
        required: true,
    },
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
    rules: {
        type: [String, Array],
    },
});

const top = ref("-12px");
const error = ref(false);
const value = defineModel();

const addRule = inject("addRule");
onMounted(() => {
    if (value.value == "" || value.value == null) {
        top.value = "12px";
    } else {
        top.value = "-12px";
    }
    addRule(validate);
});
function validate() {
    const result = validateInput(props, value.value);
    if (result != true) {
        error.value = result;
    } else {
        error.value = false;
    }
    return result;
}
</script>
