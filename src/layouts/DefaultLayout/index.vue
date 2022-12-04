<script lang="ts" setup>
</script>
<template lang="">
    <div class="bg-gray">
        <h1 class="text-2xl font-semibold text-gray-900">
            <slot name="title">
                Dashboard
            </slot>
        </h1>
        <div class="mt-8">
            <slot name="content">
                Content
            </slot>
        </div>
    </div>
</template>
<style lang="">
    
</style>