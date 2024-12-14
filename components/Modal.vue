<template>
    <div class="modal fade" :id="el" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header" v-if="$slots['header']">
                    <slot name="header" />
                </div>
                <div class="modal-body">
                    <slot name="body" />
                </div>
                <div class="modal-footer" v-if="$slots['footer']">
                    <slot name="footer" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const { $bootstrap } = useNuxtApp();
const props = defineProps({
    el: {
        type: String,
    },
});
function showBox() {
    let modal = new $bootstrap.Modal(document.querySelector("#" + props.el));
    modal.show();
}
function hideBox() {
    $bootstrap.Modal.getInstance(document.querySelector("#" + props.el)).hide();
}
defineExpose({
    showBox,
    hideBox
});
</script>
