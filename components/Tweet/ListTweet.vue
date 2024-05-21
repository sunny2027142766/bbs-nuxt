<script lang="ts" setup>
const props = defineProps(['tweets'])
const {bbsBorderColor} = useTailwindConfig()

const isEmptyArray = computed(()=>props.tweets.length === 0)
</script>

<template>
  <div>
    <div v-if="isEmptyArray" class="p-4">
      <p class="text-center text-gray-500">
        没有推文
      </p>
    </div>
    <div v-else v-for="item in tweets" :key="item.id"
         :class="bbsBorderColor" class="pb-4 border-b hover:bg-gray-100 cursor-pointer dark:hover:bg-dim-300">
      <TweetItem :tweet="item"/>
    </div>
  </div>
</template>

<style scoped>

</style>