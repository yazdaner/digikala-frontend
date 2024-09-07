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
                <template v-if="data.data.length > 0" v-for="(item, key) in data.data" :key="key">
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
                                <nuxt-link
                                    :to="getUpdateUrl(item)"
                                    v-if="
                                        disableEditIcon == false &&
                                        trashed == false
                                    "
                                >
                                    <fa-icon :icon="['fas', 'pen-to-square']" />
                                </nuxt-link>
                                <table-delete-link
                                    :title="title"
                                    :trashed="trashed"
                                    v-if="disableDeleteIcon == false"
                                    :url="getDeleteUrl(item)"
                                />
                                <table-restore-link
                                    v-if="trashed"
                                    :title="title"
                                    :trashed="trashed"
                                    :url="getRestoreUrl(item)"
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

function getUpdateUrl(item) {
    if (props.editUrl === undefined) {
        return "/" + props.route + "/" + item.id + "/edit";
    } else {
        return props.editUrl.toString().replace(":id", item.id);
    }
}
function getDeleteUrl(item) {
    return useRuntimeConfig().public.api + "/" + props.route + "/" + item.id;
}
function getRestoreUrl(item) {
    return (
        useRuntimeConfig().public.api +
        "/" +
        props.route +
        "/" +
        item.id +
        "/restore"
    );
}

const tableColspan = computed(()=>{
    let n = props.columns.length + 1
    if(props.disableAction == false){
        n++;
    }
    return n;
});

</script>
