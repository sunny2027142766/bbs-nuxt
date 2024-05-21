<script lang="ts" setup>
const props = defineProps(['tweet'])
const author = props.tweet.author
</script>

<template>
  <div class="flex p-4">
    <div>
      <img :src="author.profileImage" alt="" class="w-10 h-10 rounded-full">
    </div>
    <div class="ml-3">
      <span>{{ author.name }}</span>
      <span class="ml-3 text-sm font-medium text-gray-400">
      <nuxt-link to="#">
      {{ author.handle }}
    </nuxt-link>
      .{{ tweet.postedAtHuman }}
    </span>
      <p v-if="tweet.replyTo" class="text-sm">
        <span class="text-gray-500">
          回复
        </span>
        <nuxt-link to="#" class="text-blue-400">
          {{ tweet.replyTo.author.handle }}
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>