<script lang="ts" setup>

const {defaultTransition} = useTailwindConfig()

const props = defineProps(['color'])
</script>

<template>
  <div class="flex items-center text-gray-400 cursor-pointer group">
    <div
        :class="`p-2 rounded-full group-hover:text-${color}-400 group-hover:bg-${color}-100 dark:group-hover:bg-opacity-20 ${defaultTransition}`">
      <slot name="icon"/>
    </div>
    <span :class="`ml-1 group-hover:text-${color}-400`">
      <slot name="default"></slot>
    </span>
  </div>
</template>

<style scoped>

</style>