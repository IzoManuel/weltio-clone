<script setup>
import { ref, computed } from "vue";
import CustomButton from "./custom-button.vue";

let index = ref("");

const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  items: {
    type: Array,
  },
  createItem: {
    type: Function,
  },
  createItemLabel: {
    type: String,
  },
  loader: {
    type: Boolean,
  },
  deleteLoader: {
    type: Boolean,
    default: false,
  },
  actions: {
    type: Array,
  },
});
</script>

<template>
  <div
    class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5"
  >
    <div class="w-full mb-1">
      <div class="mb-4">
        <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl">
          All items
        </h1>
      </div>
      <div
        class="items-center justify-end gap-5 block sm:flex md:divide-x md:divide-gray-100"
      >
        <div class="flex items-center mb-4 sm:mb-0">
          <div class="flex items-center w-full sm:justify-end"></div>
        </div>
        <button
          class="text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          type="button"
          @click="() => createItem('create')"
        >
          {{ createItemLabel }}
        </button>
      </div>
    </div>
  </div>
  <div class="flex flex-col">
    <div class="overflow-x-auto">
      <div class="inline-block min-w-full align-middle">
        <div class="overflow-hidden shadow">
          <table class="min-w-full divide-y divide-gray-200 table-fixed">
            <thead class="bg-gray-100">
              <tr>
                <th scope="col" class="p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-all"
                      aria-describedby="checkbox-1"
                      type="checkbox"
                      class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:bg-gray-700"
                    />
                    <label for="checkbox-all" class="sr-only">checkbox</label>
                  </div>
                </th>
                <th
                  :key="headerIndex"
                  v-for="(header, headerIndex) in headers"
                  scope="col"
                  class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                >
                  {{ header.text }}
                </th>
                <th
                  scope="col"
                  class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                >
                  <slot name="customColumn"></slot>
                </th>
              </tr>
            </thead>
            <tbody
              class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
            >
              <!-- Loader -->
              <tr
                v-show="loader"
                class="hover:bg-gray-100 hover:cursor-pointer dark:hover:bg-gray-700"
                :key="skeletonIndex"
                v-for="(item, skeletonIndex) in Array(7)"
              >
                <td
                  :key="sItemindex"
                  v-for="(item, sItemindex) in Array(headers.length + 1)"
                  class="p-4 text-sm font-normal text-gray-700 whitespace-nowrap dark:text-gray-400"
                >
                  <p class="h-2 w-12 animate-pulse bg-gray-200"></p>
                </td>
              </tr>
              <!-- Loader -->
              <tr
                v-show="!loader"
                class="hover:bg-gray-100 hover:cursor-pointer dark:hover:bg-gray-700"
                :key="itemIndex"
                v-for="(item, itemIndex) in items"
              >
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input
                      id=""
                      aria-describedby="checkbox-1"
                      type="checkbox"
                      class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="" class="sr-only">checkbox</label>
                  </div>
                </td>
                <td
                  :key="itemIndex"
                  v-for="(headerValue, itemIndex) in headers"
                  class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400"
                >
                  {{ item[headerValue.value] }}
                </td>

                <td class="p-4 space-x-2 whitespace-nowrap">
                  <span :key="i" v-for="(action, i) in actions">
                    <custom-button
                      :loader="deleteLoader && `${itemIndex}${i}` == index"
                      :action-label="action.actionLabel"
                      @click="
                        action.actionFunction(item.id);
                        index = `${itemIndex}${i}`;
                      "
                    >
                    </custom-button>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>