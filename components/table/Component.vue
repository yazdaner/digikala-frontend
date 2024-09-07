<template>
    <div>
        <table v-if="theme == 'desktop'" class="table">
            <thead>
                <tr>
                    <th>ردیف</th>
                    <th
                        class="text-center"
                        v-for="(column, key) in columns"
                        :key="key"
                    >
                        {{ column.title }}
                    </th>
                    <th v-if="disableAction == false">عملیات</th>
                </tr>
            </thead>
            <tbody>
                <template
                    v-if="data.data.length > 0"
                    v-for="(item, key) in data.data"
                    :key="key"
                >
                    <tr>
                        <td>
                            {{ $replaceEnNumber(key + 1) }}
                        </td>
                        <td
                            class="text-center"
                            v-for="(column, key2) in columns"
                            :key="key2"
                        >
                            <template
                                v-if="$slots[column['value']] !== undefined"
                            >
                                <slot :name="column['value']" :item="item" />
                            </template>

                            <template v-if="typeof column['value'] == 'string'">
                                {{ item[column["value"]] }}
                            </template>

                            <template
                                v-if="typeof column['value'] == 'function'"
                            >
                                {{ column["value"](item) }}
                            </template>
                        </td>
                        <td class="text-center" v-if="disableAction == false">
                            <div class="table-action-box">
                                <table-default-actions
                                    :item="item"
                                    :title="title"
                                    :trashed="trashed"
                                    :disableDeleteIcon="disableDeleteIcon"
                                    :disableEditIcon="disableEditIcon"
                                    :editUrl="editUrl"
                                    :route="route"
                                />
                            </div>
                        </td>
                    </tr>
                    <tr v-if="sparateLine">
                        <td :colspan="tableColspan">
                            <slot name="row" :item="item"></slot>
                        </td>
                    </tr>
                </template>
                <tr v-else>
                    <td :colspan="tableColspan" class="text-center">
                        رکوردی برای نمایش یافت نشد
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-else>
            <div
                class="mobile-table"
                v-for="(item, key) in data.data"
                :key="key"
            >
                <div v-for="column in columns" class="item">
                    <div class="color-grey">
                        {{ column.title }}
                    </div>
                    <div>
                        <template v-if="$slots[column['value']] !== undefined">
                            <slot :name="column['value']" :item="item" />
                        </template>

                        <template v-if="typeof column['value'] == 'string'">
                            {{ item[column["value"]] }}
                        </template>

                        <template v-if="typeof column['value'] == 'function'">
                            {{ column["value"](item) }}
                        </template>
                    </div>
                </div>

                <div v-if="sparateLine">
                    <slot name="row" :item="item"></slot>
                </div>

                <div class="table-action-box" v-if="disableAction == false">
                    <table-default-actions
                        :item="item"
                        :title="title"
                        :trashed="trashed"
                        :disableDeleteIcon="disableDeleteIcon"
                        :disableEditIcon="disableEditIcon"
                        :editUrl="editUrl"
                        :route="route"
                    />
                </div>
            </div>
        </div>
        <table-footer :data="data" />
    </div>
</template>
<script setup>
const theme = useState("theme");
const props = defineProps({
    data: {
        type: Object,
    },
    columns: {
        type: Array,
    },
    disableAction: {
        type: Boolean,
    },
    trashed: {
        type: Boolean,
    },
    disableEditIcon: {
        type: Boolean,
    },
    disableDeleteIcon: {
        type: Boolean,
    },
    editUrl: {
        type: String,
    },
    route: {
        type: String,
    },
    title: {
        type: String,
    },
    sparateLine: {
        type: Boolean,
    },
});

const tableColspan = computed(() => {
    let n = props.columns.length + 1;
    if (props.disableAction == false) {
        n++;
    }
    return n;
});
</script>
