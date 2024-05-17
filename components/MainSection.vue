<script lang="ts" setup>
defineProps(['title', 'loading'])

const {bbsBorderColor} = useTailwindConfig()
</script>

<template>
  <div :class="bbsBorderColor" class="border-x">
    <div class="sticky top-0 px-4 bg-white/80 backdrop-blur-md dark:bg-dim-900/80">
      <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">{{ title }}</h2>
    </div>
    <div v-if="loading" class="flex items-center justify-center p-4 border-b">
      <UISpinner/>
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>