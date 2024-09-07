<template>
    <ul class="pagination cursor-pointer p-0" v-if="pages.length > 1">
        <li v-if="data.current_page > 1" class="page-item">
            <a class="page-link" @click="changePage(data.current_page - 1)"> قبلی </a>
        </li>
        <li
            v-for="(page, key) in pages"
            :key="key"
            class="page-item"
            :class="[page == data.current_page ? 'active' : '']"
        >
            <a class="page-link" @click="changePage(page)">
                <span>{{ $replaceEnNumber(page) }}</span>
            </a>
        </li>

        <li class="page-item" v-if="data.last_page > pages[pages.length - 1]">
            <a class="page-link">
                <span>...</span>
            </a>
        </li>

        <li class="page-item" v-if="data.last_page > pages[pages.length - 1]">
            <a class="page-link"  @click="changePage(data.last_page)">
                <span>{{ $replaceEnNumber(data.last_page) }}</span>
            </a>
        </li>

        <li v-if="data.current_page < data.last_page" class="page-item">
            <a class="page-link" @click="changePage(data.current_page + 1)">
                <span>بعدی</span>
            </a>
        </li>
    </ul>
</template>
<script setup>
const props = defineProps({
    data: {
        type: Object,
    },
    offset: {
        type: Number,
        default: 4,
    },
    fetchData: {
        type: Function,
    },
});

const pages = computed(() => {
    let pages = [];
    if (props.data.to !== undefined) {
        let form = props.data.current_page - props.offset;
        if (form < 1) {
            form = 1;
        }
        let to = form + props.offset;
        if (to > props.data.last_page) {
            to = props.data.last_page;
        }
        for (let page = form; page <= to; page++) {
            pages.push(page);
        }
    }
    return pages;
});

function changePage(page) {
    props.fetchData(page);
}
</script>
