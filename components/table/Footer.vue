<template>
    <div
        class="table-footer d-flex justify-content-between align-items-center"
        v-if="data.total !== undefined"
    >
        <div class="d-flex">
            <span class="color-grey fs-13">تعداد نتایج : </span>
            <div class="color-black fs-14 d-flex px-2">
                <span>{{ $replaceEnNumber(data.total) }}</span>
                <span class="px-2">رکورد</span>
            </div>
        </div>
        <TablePagination 
            :data="data"
            :fetchData="fetchData"
        />
    </div>
</template>
<script setup>
defineProps(["data","fetchData"]);
</script>
