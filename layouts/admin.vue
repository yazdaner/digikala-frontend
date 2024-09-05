<template>
    <client-only>
        <div class="panel-layout admin">
            <div class="d-flex">
                <admin-sidebar />
                <div class="content w-100">
                    <admin-header />
                    <slot class="p-5" />
                </div>
            </div>
        </div>
    </client-only>
</template>
<script setup></script>
<style>
@import "/assets/admin.css";
</style>
