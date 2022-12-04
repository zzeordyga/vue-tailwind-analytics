<script lang="ts" setup>
    const props = defineProps({
        title: String,
    })

    const cards =[
        { name: 'Profit', data: 'Rp. 11.500.000', extra: '0.3% compared to 7 days ago', extraIcon: '', color: 'fiery-rose' },
        { name: 'Sales', data: 'Rp. 11.500.000', extra: '0.5% compared to 7 days ago', extraIcon: '', color: 'emerald' },
        { name: 'Transactions', data: '1.059 transactions', extra: 'same as 7 days ago', extraIcon: '', color: 'medium-champagne' },
    ]
</script>
<template lang="">
    <div>
        <h1 class="text-2xl font-semibold text-gray-900">
            <slot name="title"></slot>
        </h1>
        <div class="mt-8">
            <div class="max-w-6xl mx-auto px-4 sm:px-2 lg:px-4">
            <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div v-for="card in cards" :key="card.name" class="bg-white overflow-hidden shadow rounded-lg">
                <div class="p-5">
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
                          <div class="text-lg font-medium text-gray-900">
                            {{ card.data }}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div>

                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>