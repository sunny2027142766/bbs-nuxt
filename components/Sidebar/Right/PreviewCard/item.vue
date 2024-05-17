<script lang="ts" setup>
const {defaultTransition, bbsBorderColor} = useTailwindConfig();
const wrapperClasses = computed(() => `${defaultTransition} ${bbsBorderColor}`)


</script>

<template>
  <div :class="wrapperClasses" class="p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-350 ">
    <slot/>
  </div>
</template>

<style scoped>

</style>