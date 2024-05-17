<script lang="ts" setup>
const {defaultTransition} = useTailwindConfig()

const props = defineProps({
  active: {
    type: Boolean,
    default: false
  }
})

const textClasses = computed(() => props.active ? 'font-semi-bold' : 'font-normal')
</script>

<template>
  <NuxtLink
      class="flex  items-center p-3  xl:w-full w-min text-black hover:bg-gray-200 rounded-full dark:hover:bg-dim-200 dark:text-white"
      to="#">
    <div :class="defaultTransition" class="w-6 h-6 text-dark">
      <slot name="icon"></slot>
    </div>
    <div :class="textClasses" class="text-xl ml-4 hidden xl:block">
      <slot name="name"></slot>
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>