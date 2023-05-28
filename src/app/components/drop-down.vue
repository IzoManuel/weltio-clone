<script setup>
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  TransitionRoot,
} from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

const props = defineProps({
  menuButtonLabel: {
    type: String,
  },
});
</script>
<template>
  <div class="w-56 group" style="cursor: pointer;">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton>
          <slot name="menuButton"></slot>
        </MenuButton>
      </div>
      <TransitionRoot
        class="hidden group-hover:block before:content before:absolute before:top-[20px] before:h-6 before:w-[80px] before:left-0 before:right-0"
        :show="true"
        enter="transition-opacity duration-75"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity duration-150"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <MenuItems
          class="absolute mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="pl-5 py-8 flex flex-col items-start gap-8">
            <MenuItem>
              <button class="transition-opacity hover:opacity-50 duration-300" style="cursor: pointer;">
                English
              </button>
            </MenuItem>
            <MenuItem>
              <button class="transition-opacity hover:opacity-50 duration-300" style="cursor: pointer;">
                Español
              </button>
            </MenuItem>
          </div>
          <!-- <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                Archive
              </button>
            </MenuItem>
          </div> -->
        </MenuItems>
      </TransitionRoot>
    </Menu>
  </div>
</template>

<style scoped>
</style>