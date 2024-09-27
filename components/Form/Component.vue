<template>
    <div :ref="form">
        <slot></slot>
    </div>
</template>
<script setup>
const props = defineProps({
    method: {
        type: String,
        default: "get",
    },
    result: {
        type: Function,
    },
    action: {
        type: String,
    },
    sendFunction: {
        type: Function,
    },
});

// add rule for inputs
const rules = ref([]);
function addRule(fun) {
    rules.value.push(fun);
}

// check inputs validation

function sendForm() {
    let sendForm = true;
    for (let i = 0; i < rules.value.length; i++) {
        let result = rules.value[i]();
        if (sendForm == true) {
            sendForm = result;
        }
    }
    if (sendForm == true) {
        submitForm();
    }
}

// send data for api

const { $axios } = useNuxtApp();
const form = ref("form");
function submitForm() {
    // get data
    const data = [];
    const inputs = form.value.querySelectorAll(".c-input");
    inputs.forEach((input) => {
        data[input.getAttribute("name")] = input.getAttribute("value");
    });
    console.log(data);
    const method = props.method;
    const url = useRuntimeConfig().public.api + "/" + props.action;

    if (props.sendFunction !== undefined) {
        props.sendFunction(data);
    } else {
        if (method != "get" && data != []) {
            $axios[method](url, data)
                .then((response) => {
                    props.result(response);
                })
                .catch((e) => {
                    props.result(e);
                });
        } else {
            $axios[method](url)
                .then((response) => {
                    props.result(response);
                })
                .catch((e) => {
                    props.result(e);
                });
        }
    }
}

// set providers

provide("addRule", addRule);
provide("sendForm", sendForm);
</script>
