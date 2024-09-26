<template>
    <div class="input-box">
        <div
            class="input-div file-upload"
            :class="{ 'error-border': error }"
            @click="file.click()"
        >
            <fa-icon :icon="['fas', 'upload']" />
            <span class="label">
                {{
                    boxLabel.length > 25 && boxLabel != label
                        ? boxLabel.toString().substring(0, 25) + "..."
                        : boxLabel
                }}
            </span>
        </div>
        {{ sizeFile }}
        <div v-if="error" class="has-error">
            {{ error }}
        </div>
        <input
            type="file"
            ref="file"
            :name="name"
            :value="model"
            class="c-input d-none"
            @change="setFile()"
        />
    </div>
</template>
<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    label: {
        type: String,
    },
    rules: {
        type: [String, Array],
    },
});
const model = defineModel();
import { input } from "~/functions/input.js";
const { error, validateInput } = input(props, model);
const file = ref(null);
const sizeFile = ref(null);
const boxLabel = ref(props.label);

const addRule = inject("addRule");
onMounted(() => {
    if (model.value == "" || model.value == null) {
        top.value = "13px";
    } else {
        top.value = "-13px";
    }
    if (addRule !== undefined) {
        addRule(validate);
    }
});
function setFile() {
    if (file.value != null && file.value.files !== undefined) {
        boxLabel.value = file.value.files[0].name;

        let size = file.value.files[0].size;
        let fSExt = ["Bytes", "KB", "MB", "GB"],
            i = 0;
        while (size > 900) {
            size /= 1024;
            i++;
        }

        sizeFile.value = Math.round(size * 100) / 100 + " " + fSExt[i];
    }
}

function validate() {
    return validateInput(props, model.value);
}
</script>
