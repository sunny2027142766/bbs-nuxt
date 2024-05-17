<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: null
  },
  placeholder: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'text'
  }
})

const emits = defineEmits(['update:modelValue'])

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emits('update:modelValue', target.value)
}
</script>

<template>
  <label v-if="label" class="block pl-3 ml-px text-sm font-medium text-gray-700">{{ label }}:</label>
  <div class="mt-1">
    <input
        :model-value="modelValue"
        :placeholder="placeholder"
        :type="type"
        class="block px-4 w-full border-gray-300 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        @input="handleInput"
        autocomplete="off"
    />
  </div>

</template>

<style scoped>

</style>