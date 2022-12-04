<script lang="ts" setup>
import maxim from "@/assets/logo/maxim.svg"
import ovo from "@/assets/logo/ovo.svg"
import pln from "@/assets/logo/pln.svg"
import telkomsel from "@/assets/logo/telkomsel.svg"
import three from "@/assets/logo/three.svg"
import punpun from "@/assets/pictures/punpun.png"
import EllipsisVertical from "@/assets/logo/ellipsis-vert.svg"
import { ArrowRightIcon, ArrowUpIcon, ArrowDownIcon, ChevronDownIcon  } from 'heroicons-vue3/outline'
import Card from '@/components/Card/index.vue'
import DefaultChart from '@/components/Chart/defaultChart'
import SideNavigation from '@/components/SideNavigation/index.vue'
import DefaultLayout from '@/layouts/DefaultLayout/index.vue'
import dayjs from 'dayjs'

const products = [
    {
        name: 'Maxim',
        price: 150000,
        transactions: 150,
        src: maxim,
    },
    {
        name: 'OVO',
        price: 150000,
        transactions: 150,
        src: ovo,
    },
    {
        name: 'Three',
        price: 150000,
        transactions: 150,
        src: three,
    },
    {
        name: 'Telkomsel',
        price: 150000,
        transactions: 150,
        src: telkomsel,
    },
    {
        name: 'PLN Postpaid',
        transactions: 150,
        src: pln,
    },
]

const agents = [
    {
        name: 'Punpun',
        profit: 3000000,
        sales: 7000000,
        transactions: 43,
        src: punpun,
    },
    {
        name: 'Punpun',
        profit: 3000000,
        sales: 7000000,
        transactions: 43,
        src: punpun,
    },
    {
        name: 'Punpun',
        profit: 3000000,
        sales: 7000000,
        transactions: 43,
        src: punpun,
    },
    {
        name: 'Punpun',
        profit: 3000000,
        sales: 7000000,
        transactions: 43,
        src: punpun,
    },
    {
        name: 'Punpun',
        profit: 3000000,
        sales: 7000000,
        transactions: 43,
        src: punpun,
    },
]

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

                        <div class="grid overflow-hidden grid-rows-3 grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap mt-8">
                            <div class="p-4 box row-span-1 col-start-1 col-span-3">
                                <h4 class="text-md font-bold">Sales Chart</h4>
                                <DefaultChart/>
                            </div>
                            <div class="p-4 box row-span-2">
                                <Card class="p-4">
                                    <h4 class="text-md font-bold">Top 5 Agents</h4>
                                    <div class="relative my-3">
                                        <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                            <div class="w-full border-t  border-gray-300" />
                                        </div>
                                        <div class="relative flex justify-center">
                                        </div>
                                    </div>
                                    <div class="flex justify-start space-x-2 items-center" v-for="(item, index) in agents" :key="index">
                                        <img :src="item.src" alt="Profile Picture" class="rounded-full border-2 p-1 border-neon-blue w-12 h-12">
                                        <div class="grid overflow-hidden grid-cols-1 grid-rows-6 lg:grid-cols-2 lg:grid-rows-4 font-semibold">
                                            <div class="box row-span-1 col-start-1 col-span-2 text-neon-blue">{{item.name}}</div>
                                            <div class="text-xs box text-gray-400 mr-2">Profit</div>
                                            <div class="text-xs box">Rp. {{item.profit}}</div>
                                            <div class="text-xs box text-gray-400 mr-2">Sales</div>
                                            <div class="text-xs box">Rp. {{item.sales}}</div>
                                            <div class="text-xs box text-gray-400 mr-2">Transaction</div>
                                            <div class="text-xs box">{{item.transactions}} transactions</div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                            <div class="p-4 box col-span-3">
                                <h4 class="text-md font-bold">Top 5 Products</h4>
                                <Card class="flex p-5 space-y-4 lg:space-y-0 lg:space-x-8 flex-col lg:flex-row">
                                    <Card class="p-5 shadow-md shadow-neon-blue" v-for="(item, index) in products" :key="index">
                                        <div class="flex flex-col justify-center text-center items-center">
                                            <img :src="item.src" alt="my-logo" class="h-32 w-32"/>
                                            <div class="mt-2 font-bold">
                                                <h4>{{item.name}}</h4>
                                                <h5 class="font-semibold text-gray-400">{{item?.price}}</h5>
                                                <div class="text-md">
                                                    {{item.transactions}}
                                                    <span class="text-sm"> transactions</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Card>
                            </div>
                        </div>
                    </template>
                </DefaultLayout>
            </template>
            <template #secondary>
                <div class="p-4">
                    <div class="flex justify-start space-x-4 items-center">
                        <img :src="punpun" alt="Profile Picture" class="rounded-full border-2 p-1 border-neon-blue w-20 h-20">
                        <div class="grid overflow-hidden grid-cols-3 grid-rows-2 font-semibold">
                            <div class="text-3xl box col-span-2">Punpun</div>
                            <ChevronDownIcon class="row-span-2 h-8 w-8 m-auto"/>
                            <div class="text-sm box text-gray-400 col-span-2">Owner at Teras Rumpi</div>
                        </div>
                    </div>
                    <Card class="space-y-3 p-4 mt-5 text-center bg-white">
                        <div class="text-sm font-semibold text-gray-400 relative">
                            Total balance
                            <img :src="EllipsisVertical" alt="more" class="text-gray-400 absolute top-0 right-0 w-4 h-4"/>
                        </div>
                        <div class="text-2xl font-semibold">Rp. 1.580.000.000</div>
                        <button class="bg-neon-blue mt-5 w-4/5 text-white p-2 rounded-md">Top up</button>
                    </Card>
                </div>
            </template>
        </SideNavigation>
    </div>
</template>
<style lang="">
    
</style>