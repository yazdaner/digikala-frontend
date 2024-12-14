<template>
    <div>
        <fa-icon
            :icon="['fas', 'refresh']"
            class="mx-2 cursor-pointer"
            @click="showModalBox"
        />
        <Modal ref="modal" :el="'restore-modal-' + item.id">
            <template v-slot:body>
                <p class="text-bold fs-18">
                    آیا از بازگردانی این {{ title }} مطمین هستید ؟
                </p>
            </template>
            <template v-slot:footer>
                <button class="btn btn-success" @click="sendRequest">
                    بله
                </button>
                <button class="btn btn-danger" @click="modal.hideBox()">
                    خیر
                </button>
            </template>
        </Modal>
    </div>
</template>
<script setup>
const modal = ref(null);
const toast = useState("toast");
const { $axios } = useNuxtApp();

const props = defineProps(["url", "title", "trashed", "item", "fetchData"]);
function showModalBox() {
    modal.value.showBox();
}

function sendRequest() {
    modal.value.hideBox();
    $axios
        .post(props.url)
        .then((response) => {
            if (response.data.status == "ok") {
                toast.value = {
                    message: "بازگردانی با موفقیت انجام شد",
                    type: "success",
                };
                props.fetchData();
            }
        })
        .catch((e) => {
            toast.value = {
                message: "خطا در اجرای درخواست",
                type: "error",
            };
        });
}
</script>
