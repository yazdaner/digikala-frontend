<template>
    <div>
        <div style="width: 300px; margin: 20px">
            <FormComponent
                action="shop/categories-data?ids=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16"
                :result="showResponse"
            >
                <FormTextInput
                    label="نام کاربری"
                    :rules="['required']"
                    name="username"
                    id="username"
                />
                <FormTextInput
                    label="xxxxxxxxx"
                    :rules="['required']"
                    name="xxxxxxxxx"
                    id="xxxxxxxxx"
                />
                <FormTextInput
                    label="fff"
                    :rules="['required']"
                    name="fff"
                    id="fff"
                />
                <FormSelectTag
                    :items
                    item-text="name"
                    item-value="id"
                    label="استان"
                    initial-value="1"
                     
                />
                <FormPasswordInput
                    label="رمز"
                    rules="required"
                    name="password"
                    id="password"
                />
                <FormButton design="btn-success">ورود</FormButton>
            </FormComponent>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: false,
});
const username = ref(null);

function showResponse(response) {
    console.log(response);
}

const items = [
    { id: 1, name: "Iowa", deleted_at: null },
    { id: 2, name: "South Dakota", deleted_at: null },
    { id: 3, name: "Tennessee", deleted_at: null },
    { id: 4, name: "Pennsylvania", deleted_at: null },
    { id: 5, name: "California", deleted_at: null },
    { id: 6, name: "Nebraska", deleted_at: null },
    { id: 7, name: "Kentucky", deleted_at: null },
    { id: 8, name: "okZU4d77AG", deleted_at: null },
    { id: 10, name: "Tennessee", deleted_at: null },
    { id: 11, name: "Tennessee", deleted_at: null },
    { id: 12, name: "California", deleted_at: null },
    { id: 13, name: "Missouri", deleted_at: null },
    { id: 14, name: "Nevada", deleted_at: null },
    { id: 15, name: "Iowa", deleted_at: null },
    { id: 16, name: "Missouri", deleted_at: null },
    { id: 17, name: "Kansas", deleted_at: null },
    { id: 18, name: "Wisconsin", deleted_at: null },
    { id: 19, name: "LBbUJnJbr9", deleted_at: null },
    { id: 21, name: "Utah", deleted_at: null },
    { id: 22, name: "Arizona", deleted_at: null },
    { id: 23, name: "Hawaii", deleted_at: null },
    { id: 24, name: "Louisiana", deleted_at: null },
    { id: 25, name: "Vermont", deleted_at: null },
    { id: 26, name: "New York", deleted_at: null },
    { id: 27, name: "Alaska", deleted_at: null },
    { id: 28, name: "North Dakota", deleted_at: null },
    { id: 29, name: "Rhode Island", deleted_at: null },
    { id: 30, name: "South Carolina", deleted_at: null },
    { id: 31, name: "oS8gr8pz4O", deleted_at: null },
    { id: 33, name: "Indiana", deleted_at: null },
    { id: 34, name: "New Mexico", deleted_at: null },
    { id: 35, name: "Ohio", deleted_at: null },
];
</script>
