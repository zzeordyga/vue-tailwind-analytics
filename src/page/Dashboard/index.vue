<script lang="ts" setup>
import { ArrowRightIcon, ArrowUpIcon, ArrowDownIcon } from 'heroicons-vue3/outline'
import DefaultChart from '@/components/Chart/defaultChart'
import SideNavigation from '@/components/SideNavigation/index.vue'
import DefaultLayout from '@/layouts/DefaultLayout/index.vue'
import dayjs from 'dayjs'

const cards =[
    { name: 'Profit', data: 'Rp. 11.500.000', extra: '0.3% compared to 7 days ago', extraIcon: ArrowUpIcon, color: 'fiery-rose' },
    { name: 'Sales', data: 'Rp. 11.500.000', extra: '0.5% compared to 7 days ago', extraIcon: ArrowDownIcon, color: 'emerald' },
    { name: 'Transactions', data: '1.059 transactions', extra: 'same as 7 days ago', extraIcon: ArrowRightIcon, color: 'medium-champagne' },
]
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
                        <div class="max-w-6xl mx-auto px-4 sm:px-2 lg:px-4">
                            <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                <div v-for="card in cards" :key="card.name" class="bg-white overflow-hidden shadow rounded-lg">
                                    <div class="p-3">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0">
                                                <component :is="card.icon" class="h-6 w-6 text-gray-400" aria-hidden="true" />
                                            </div>
                                            <div class="ml-5 w-0 flex-1">
                                                <dl>
                                                    <dt class="text-sm font-medium text-gray-500 truncate">
                                                        {{ card.name }}
                                                    </dt>
                                                    <dd>
                                                        <div class="text-lg font-medium text-gray-900">
                                                            {{ card.data }}
                                                        </div>
                                                    </dd>
                                                    <dd>
                                                        <div :class="['text-' + card.color, 'float-right text-xs font-medium flex']">
                                                            <component :is="card.extraIcon"
                                                                :class="['text-' + card.color, 'mr-2 h-4 w-4']"
                                                                aria-hidden="true" />
                                                            {{ card.extra }}
                                                        </div>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid overflow-hidden grid-cols-3 grid-rows-2 gap-2">
                            <div class="box row-span-1 col-start-1 col-span-2">
                                <DefaultChart/>
                            </div>
                            <div class="box row-span-2">2</div>
                            <div class="box col-span-2">3</div>
                        </div>
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