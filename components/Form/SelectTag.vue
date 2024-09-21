<template>
    <div class="select-tag relative" :class="{ disable: disable }">
        <div @click="showBox" class="tag" :class="{ 'error-border': error }">
            <div>
                <label v-if="hideLabel != true" :style="{ top: top }">
                    {{ label }}
                </label>
                <img :src="icon" v-if="icon != null" class="box-16">
                <span></span>
            </div>
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
    items: {
        type: Array,
    },
    itemText: {
        type: String,
        default: "title",
    },
    itemValue: {
        type: String,
        default: "value",
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
    rules: {
        type: [String, Array],
    },
    initialValue: {
        type: [String, Number],
    },
});
const model = defineModel();
const { top, error, validateInput, click } = input(props, model);
const showList = ref(false);
const icon = ref(null);
function showBox() {}
function validate() {
    return validateInput(props, model.value);
}
</script>
