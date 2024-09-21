<template>
    <div class="select-tag relative" :class="{ disable: disable }">
        <div @click="showBox" class="tag" :class="{ 'error-border': error }">
            <div>
                <label :style="{ top: top }" v-if="text == null">
                    {{ label }}
                </label>
                <img :src="icon" v-if="icon != null" class="box-16" />
                <span>
                    {{ $replaceEnNumber(text) }}
                </span>
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
                        >
                            <div v-if="item['icon'] !== undefined">
                                <img :src="item['icon']" class="box-16" />
                            </div>
                            <span>
                                {{ $replaceEnNumber(item[itemText]) }}
                            </span>
                        </li>
                    </template>
                </ul>
            </div>
            <fa-icon ref="selectIcon" :icon="['fas', 'angle-down']" />
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
function showBox() {
    showList.value = !showList.value;
}
function validate() {
    return validateInput(props, model.value);
}
</script>
