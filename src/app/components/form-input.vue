<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  errorMessage: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  type: {
    type: String,
  },
  renderAs: {
    type: String,
  },
  options: {
    type: Array,
    default: []
  },
  optionValue:  {
    type: String
  },
  optionKey: {
    type: String
  }
});

const isValid = computed(() => {
  return !props.errorMessage;
});

const emit = defineEmits(['update:modelValue'])

function input(e) {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <div>
    <label
      :for="id"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >{{ label }} </label
    >
    <!-- Input field -->
    <input
      v-if="type === 'date' || type === 'text' || type === 'password' || type === 'email'"
      :type="type"
      :name="id"
      :id="id"
      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :placeholder="placeholder"
      :value="modelValue"
      @input="input"
    />

    <!-- Textarea field -->
    <textarea
      v-if="renderAs === 'textarea'"
      :name="id"
      :id="id"
      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      :placeholder="placeholder"
      :value="modelValue"
      @input="input"
    />

    <!-- Select field -->
    <select
    v-if="renderAs === 'select'"
      :id="id"
      :value="modelValue"
      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      @input="input"
    >
      <option value="">Select option</option>
      <option
      :value="option[optionKey]"
      :key="index"
      v-for="(option, index) in options"
      >
      {{ option[optionValue] }}
      </option>
    </select>

    <!-- Error message -->
    <div
      class="mt-2 bg-red-100 border border-red-400 text-red-700 px-2 py-1 text-xs rounded relative"
      role="alert"
      v-show="!isValid"
    >
      <span class="block sm:inline">{{ errorMessage }}</span>
    </div>
  </div>
</template>