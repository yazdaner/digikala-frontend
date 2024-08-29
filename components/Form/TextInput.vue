<template>
    <div class="input-box" :class="disable == true ? 'disable' : ''">
        <label v-if="hideLabel != true"
            :style="{top:top}"
        >
            {{ label }}
        </label>
        <div class="input-div" :class="[error ? 'error-border' : '']">
            <input class="form-control"
                :disabled="disable"
            >
        </div>
        <div v-if="error" class="has-error">
            {{ error }}
        </div>
    </div>
</template>
<script setup>
    defineProps({
        disable : {
            type : Boolean
        },
        label:{
            type : String
        },
        hideLabel:{
            type : Boolean
        }
    })
    const top = ref('12px');
    const error = ref(false);
    const value = ref('');
</script>