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
                <template v-for="(item, key) in data.data" :key="key">
                    <tr>
                        <td>
                            {{ $replaceEnNumber(key + 1) }}
                        </td>
                        <td class="text-center" v-for="(column,key2) in columns" :key="key2">
                            <template v-if="typeof column['value'] == 'string'">
                                {{ item[column['value']] }}                                    
                            </template>
                        </td>
                    </tr>
                </template>
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
});
</script>
