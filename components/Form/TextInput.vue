<template>
    <div class="input-box" :class="disable == true ? 'disable' : ''">
        <label :for="id" v-if="hideLabel != true" :style="{ top: top }">
            {{ label }}
        </label>
        <div class="input-div" :class="[error ? 'error-border' : '']">
            <slot name="perfix"></slot>
            <input
                type="text"
                class="form-control"
                v-model="model"
                :id="id"
                :disabled="disable"
                :placeholder="placeholder != undefined ? placeholder : ''"
                @focusout="focusout"
                @focus="focus"
                @click="click"
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
    initialValue: {
        type: [String, Number],
    },
});

const model = defineModel();

const { top, error, focusout, focus, click, validateInput } = input(
    props,
    model
);

const addRule = inject("addRule");
onMounted(() => {
    if (props.initialValue !== undefined || props.initialValue !== null) {
        model.value = props.initialValue;
    }

    if (model.value == "" || model.value == null) {
        top.value = "13px";
    } else {
        top.value = "-13px";
    }

    if (addRule !== undefined) {
        addRule(validate);
    }
});

function validate() {
    return validateInput(props, model.value);
}
</script>
