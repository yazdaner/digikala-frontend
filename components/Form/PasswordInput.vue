<template>
    <div class="input-box" :class="disable == true ? 'disable' : ''">
        <label :for="id" v-if="hideLabel != true" :style="{ top: top }">
            {{ label }}
        </label>
        <div class="input-div" :class="[error ? 'error-border' : '']">
            <slot name="perfix"></slot>
            <input
                class="form-control"
                v-model="model"
                :type="type"
                :id="id"
                :disabled="disable"
                :placeholder="placeholder != undefined ? placeholder : ''"
                @focusout="focusout"
                @focus="focus"
                @click="click"
            />
            <fa-icon
                :icon="['far', passwordIcon]"
                @click="changePasswordInputType"
            />
            <slot name="suffix"></slot>
        </div>
        <div v-if="error" class="has-error">
            {{ error }}
        </div>
        <input type="hidden" :name="name" :value="model" class="c-input" />
    </div>
</template>
<script setup>
import { input } from "~/functions/input.js";

const props = defineProps({
    id: {
        type: String,
    },
    name: {
        type: String,
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

const model = defineModel();

const { top, error, focusout, focus, click, validateInput } = input(
    props,
    model
);

const type = ref("password");
const passwordIcon = ref("eye");

const addRule = inject("addRule");
onMounted(() => {
    if (model.value == "" || model.value == null) {
        top.value = "13px";
    } else {
        top.value = "-13px";
    }
    addRule(validate);
});
function validate() {
    return validateInput(props, model.value);
}

function changePasswordInputType() {
    if (type.value == "password") {
        type.value = "text";
        passwordIcon.value = "eye-slash";
    } else {
        type.value = "password";
        passwordIcon.value = "eye";
    }
}
</script>
