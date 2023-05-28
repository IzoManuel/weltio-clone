<script setup>
const props = defineProps({
  action: {
    type: Function,
  },
  actionLabel: {
    type: String,
  },
  loader: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <button
    :disabled="loader"
    :class="{
      'inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900':
        actionLabel === 'Delete',
      'inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800':
        actionLabel === 'Edit' || actionLabel != 'Delete',
      'cursor-not-allowed':loader
    }"
    
  >
    <spinner
      :height="'h-4'"
      :width="'w-4'"
      :fill="'fill-white'"
      v-if="loader"
    ></spinner>
    {{ actionLabel }}
  </button>
</template>