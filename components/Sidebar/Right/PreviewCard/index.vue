<script lang="ts" setup>
const props = defineProps(['title'])

const {bbsBorderColor, defaultTransition} = useTailwindConfig();
</script>

<template>
  <div :class="bbsBorderColor" class="m-2 border rounded-2xl bg-gray-50 dark:bg-dim-700">
    <h1 class="p-3 text-xl font-extra-bold text-gray-900 border-b dark:text-white">
      {{ props.title }}
    </h1>

    <slot/>

    <div :class="defaultTransition"
         class="rounded-2xl p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-800">
      更多
    </div>
  </div>
</template>

<style scoped>

</style>