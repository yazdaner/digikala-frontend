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
            <ul class="none-list-style" v-if="Citems[listKey] !== undefined">
                <li
                    @click="previousItems"
                    v-if="listKey > 0"
                    class="color-grey"
                >
                    <fa-icon :icon="['fas', 'arrow-right']" />
                </li>

                <template v-for="(item, key) in Citems[listKey]" :key="key">
                    <li
                        :class="{ active: model == item[itemValue] }"
                        class="d-flex justify-content-between align-items-center"
                        v-if="
                            item[itemText]
                                .toString()
                                .indexOf(searchText ?? '') >= 0
                        "
                    >
                        <div
                            @click="selectItem(item)"
                            class="d-flex align-items-center justify-content-between"
                        >
                            <div
                                v-if="
                                    item['icon'] !== undefined &&
                                    disableIcon == false
                                "
                            >
                                <img :src="item['icon']" class="box-16" />
                            </div>
                            <span>
                                {{ item[itemText] }}
                            </span>
                        </div>
                        <fa-icon
                            :icon="['fas', 'angle-left']"
                            @click="showChildList(item)"
                            v-if="
                                createItemsList(item[props.itemValue]).length >
                                0
                            "
                        />
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
    property: {
        type: String,
    },
    disableIcon: {
        type: Boolean,
    },
});
const model = defineModel();
import { input } from "~/functions/input.js";
const { top, error, validateInput } = input(props, model);
const showList = ref(false);
const icon = ref(null);
const text = ref(null);
const selectIcon = ref(null);
const searchText = ref(null);
const Citems = ref([]);
const listKey = ref(0);

function toggleBox() {
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

function previousItems() {
    if (listKey.value > 0) {
        Citems.value.splice(listKey.value, 1);
        listKey.value--;
    }
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

    Citems.value[listKey.value] = createItemsList(0);
    if (addRule !== undefined) {
        addRule(validate);
    }
});

function createItemsList(value) {
    let items = [];
    props.items.forEach((item) => {
        if (item[props.property] == value) {
            items.push(item);
        }
    });
    return items;
}

function showChildList(item) {
    const list = createItemsList(item[props.itemValue]);
    if (list.length > 0) {
        listKey.value++;
        Citems.value[listKey.value] = list;
    }
}

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

watch(
    () => props.items,
    () => {
        if (props.initialValue !== undefined && props.initialValue !== null) {
            const item = findItemWithValue(props.initialValue);
            if (item) {
                selectItem(item);
            }
            Citems.value = [listKey.value] = createItemsList(0);
        }
    }
);
</script>
