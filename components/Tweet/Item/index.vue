<script setup lang="ts">
const props = defineProps(['tweet'])
const {bbsBorderColor} = useTailwindConfig()
</script>

<template>
  <div>
    <TweetItemHeader :tweet="tweet"/>
    <div class="ml-16 ">

      <p class="flex-shrink font-medium text-gray-800 w-auto dark:text-white">
        {{ tweet.text }}
      </p>

      <div v-for="image in tweet.mediaFile" :key="image.id" class="flex my-3 mr-2 border-2 rounded-2xl"
           :class="bbsBorderColor">
        <img :src="image.url" alt="" class="rounded-2xl w-full"/>
      </div>

      <div class="mt-2">
        <TweetItemAction :tweet="tweet"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>