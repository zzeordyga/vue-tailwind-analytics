<script lang="ts" setup>
import SideNavigation from '@/components/SideNavigation/index.vue'
import DefaultLayout from '@/layouts/DefaultLayout/index.vue'
import dayjs from 'dayjs'


</script>
<template lang="">
    <div>
        <SideNavigation>
            <template #default>
                <DefaultLayout>
                    <template #title>
                        <div>Dashboard</div>
                        <div class="text-gray-500 text-sm">Today's date: {{dayjs().format('ddd, DD MMM YYYY')}}</div>
                    </template>
                    <template #content>
                        
                    </template>
                </DefaultLayout>
            </template>
            <template #secondary>
                Hello
            </template>
        </SideNavigation>
    </div>
</template>
<style lang="">
    
</style>