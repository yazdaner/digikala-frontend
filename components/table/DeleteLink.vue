<template>
    <div>
        <fa-icon
            :icon="['fas', 'trash']"
            class="color-red cursor-pointer mx-2"
            @click="showModalBox"
        />
        <Modal ref="modal" :el="'delete-modal-' + item.id">
            <template v-slot:body>
                <p class="text-bold fs-18">آیا از حذف این {{ title }} مطمین هستید ؟</p>
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
import axios from "axios";

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
        .delete(props.url)
        .then((response) => {
            if (response.data.status == "ok") {
            toast.value = {
                    message: "حذف با موفقیت انجام شد",
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
