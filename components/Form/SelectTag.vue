<template>
    <div class="select-tag input-box" :class="{ disable: disable }">
        <div
            @click="toggleBox"
            class="input-div"
            :class="{ 'error-border': error }"
        >
            <div>
                <label :for="id" v-if="hideLabel != true" :style="{ top: top }">
                    {{ label }}
                </label>
                <img :src="icon" v-if="icon != null" class="box-16" />
                <span>
                    {{ text }}
                </span>
            </div>
            <fa-icon ref="selectIcon" :icon="['fas', 'angle-down']" />
        </div>

        <div v-if="showList && disable == false" class="item-list w-100">
            <div class="my-3" v-if="items.length > 10">
                <FormTextInput
                    placeholder="جستجو"
                    hide-label
                    v-model="searchText"
                    class="search-input"
                />
            </div>
            <ul class="none-list-style">
                <template v-for="(item, key) in items" :key="key">
                    <li
                        @click="selectItem(item)"
                        :class="{ active: model == item[itemValue] }"
                        v-if="
                            item[itemText]
                                .toString()
                                .indexOf(searchText ?? '') >= 0
                        "
                    >
                        <div v-if="item['icon'] !== undefined">
                            <img :src="item['icon']" class="box-16" />
                        </div>
                        <span>
                            {{ item[itemText] }}
                        </span>
                    </li>
                </template>
            </ul>
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
const text = ref(null);
const selectIcon = ref(null);
const searchText = ref(null);
function toggleBox() {
    if (model.value == "" || model.value == null) {
        top.value = "13px";
    } else {
        top.value = "-13px";
    }
    showList.value = !showList.value;
    if (showList.value == true) {
        selectIcon.value.$el.style.transform = "rotate(180deg)";
    } else {
        selectIcon.value.$el.style.transform = "rotate(0)";
    }
}

function validate() {
    return validateInput(props, model.value);
}

const addRule = inject("addRule");
onMounted(() => {
    if (props.initialValue !== undefined || props.initialValue !== null) {
        const item = findItemWithValue(props.initialValue);
        if (item) {
            model.value = item[props.itemValue];
            text.value = item[props.itemText];
            if (item["icon"]) {
                icon.value = item["icon"];
            }
        }
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

function selectItem(item) {
    if (
        model.value == item[props.itemValue] &&
        text.value == item[props.itemText]
    ) {
        model.value = null;
        text.value = null;
        if (item["icon"]) {
            icon.value = null;
        }
    } else {
        model.value = item[props.itemValue];
        text.value = item[props.itemText];
        if (item["icon"]) {
            icon.value = item["icon"];
        }
        toggleBox();
    }
}

function findItemWithValue(value) {
    let result = false;
    props.items.forEach((item) => {
        if (item[props.itemValue] == value) {
            result = item;
        }
    });
    return result;
}

</script>
