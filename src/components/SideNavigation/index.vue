<template>
  <div class="h-screen flex overflow-hidden bg-white">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" static class="fixed inset-0 flex z-40 lg:hidden" @close="sidebarOpen = false"
        :open="sidebarOpen">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
          leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
              enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button type="button"
                  class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  @click="sidebarOpen = false">
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div class="flex-shrink-0 flex items-center px-4">
                Sales Dash
              </div>
              <nav aria-label="Sidebar" class="mt-5">
                <div class="pl-2 space-y-1">
                  <div v-for="item in navigation" :key="item.name">
                    <a :href="item.href"
                      :class="[item.current ? 'text-neon-blue' : 'text-gray-600', 'group/parent flex items-center px-2 py-2 text-base font-medium rounded-md relative']">
                      <component :is="item.icon"
                        :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover/parent:text-gray-500', 'mr-3 h-6 w-6']"
                        aria-hidden="true" />
                      {{ item.name }}
                      <a @click="dropdownOpen ? (dropdownOpen = false) : (dropdownOpen = true)"
                        class="absolute right-0">
                        <component :is="item?.dropdownIcon" v-if="(item.children?.length != 0)"
                          class="float-right rounded-l-lg mr-3 h-6 w-6" />
                      </a>
                      <div v-if="item.current" class="h-5 absolute right-0 rounded-l-lg w-1 bg-neon-blue"></div>
                    </a>
                    <div class="flex flex-col relative" v-if="dropdownOpen">
                      <a v-for="child in item.children" :key="child.name" :href="child.href"
                        :class="[child.current ? 'text-neon-blue' : 'text-gray-600', 'group/child items-center px-2 py-2 text-base font-medium rounded-md ml-9']">
                        {{ child.name }}
                        <div v-if="child.current"
                          class="float-right h-5 absolute right-0 rounded-l-lg w-1 bg-neon-blue"></div>
                      </a>
                    </div>
                    <div class="relative mt-3 mx-4" v-if="item.children">
                      <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="w-full border-t-2 border-gray-300" />
                      </div>
                      <div class="relative flex justify-center">
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="flex flex-col w-64">
        <div class="flex flex-col h-0 flex-1 border-r border-gray-200 bg-gray-100">
          <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div class="flex items-center flex-shrink-0 px-4">
              Sales Dash
            </div>
            <nav class="mt-5 flex-1" aria-label="Sidebar">
              <div class="pl-2 space-y-1">
                <div v-for="item in navigation" :key="item.name">
                  <a :href="item.href"
                    :class="[item.current ? 'text-neon-blue' : 'text-gray-600', 'group/parent flex items-center px-2 py-2 text-base font-medium rounded-md relative']">
                    <component :is="item.icon"
                      :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover/parent:text-gray-500', 'mr-3 h-6 w-6']"
                      aria-hidden="true" />
                    {{ item.name }}
                    <a @click="dropdownOpen ? (dropdownOpen = false) : (dropdownOpen = true)" class="absolute right-0">
                      <component :is="item?.dropdownIcon" v-if="(item.children?.length != 0)"
                        class="float-right rounded-l-lg mr-3 h-6 w-6" />
                    </a>
                    <div v-if="item.current" class="h-5 absolute right-0 rounded-l-lg w-1 bg-neon-blue"></div>
                  </a>
                  <div class="flex flex-col relative" v-if="dropdownOpen">
                    <a v-for="child in item.children" :key="child.name" :href="child.href"
                      :class="[child.current ? 'text-neon-blue' : 'text-gray-600', 'group/child items-center px-2 py-2 text-base font-medium rounded-md ml-9']">
                      {{ child.name }}
                      <div v-if="child.current" class="float-right h-5 absolute right-0 rounded-l-lg w-1 bg-neon-blue">
                      </div>
                    </a>
                  </div>
                  <div class="relative mt-3 mx-4" v-if="item.children">
                      <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="w-full border-t-2  border-gray-300" />
                      </div>
                      <div class="relative flex justify-center">
                      </div>
                    </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
      <div class="lg:hidden">
        <div class="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
          <div>
            Sales Dash
          </div>
          <div>
            <button type="button"
              class="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
              @click="sidebarOpen = true">
              <span class="sr-only">Open sidebar</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div class="flex-1 relative z-0 flex overflow-hidden">
        <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <!-- Start main area-->
          <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
            <slot></slot>
          </div>
          <!-- End main area -->
        </main>
        <aside class="hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 border-l border-gray-200">
          <!-- Start secondary column (hidden on smaller screens) -->
          <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
            <slot name="secondary"></slot>
          </div>
          <!-- End secondary column -->
        </aside>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {
  HomeIcon,
  ScaleIcon,
  MenuIcon,
  ReceiptRefundIcon,
  ArrowLeftIcon,
  ShareIcon,
  CubeIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XIcon,
} from 'heroicons-vue3/outline'

export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    MenuIcon,
    XIcon,
  },
  setup() {
    const sidebarOpen = ref(false)
    const dropdownOpen = ref(false)
    const navigation = reactive([
      {
        name: 'Dashboard',
        href: '/',
        icon: HomeIcon,
        current: true
      },
      {
        name: 'Balance',
        href: '/balance',
        icon: ScaleIcon,
        current: false
      },
      {
        name: 'Transaction',
        href: '/transaction',
        icon: ReceiptRefundIcon,
        current: false
      },
      {
        name: 'Product',
        href: '/product',
        icon: CubeIcon,
        current: false
      },
      {
        name: 'Channel',
        icon: ShareIcon,
        current: false,
        dropdownIcon: !dropdownOpen ? ChevronDownIcon : ChevronUpIcon,
        children: [
          {
            name: 'Agent',
            href: '/agent',
            current: false,
          },
          {
            name: 'Balance',
            href: '/balance',
            current: false,
          },
          {
            name: 'Transaction',
            href: '/transaction',
            current: false,
          },
        ]
      },
      {
        name: 'Logout',
        href: '/logout',
        icon: ArrowLeftIcon,
        current: false
      },
    ])

    return {
      navigation,
      sidebarOpen,
      dropdownOpen,
    }
  },
}
</script>