<script lang="ts" setup>
import {ChartBarIcon, HeartIcon, ReceiptPercentIcon, ShareIcon} from "@heroicons/vue/24/outline";

const props = defineProps(['tweet'])
const replyLength = computed(() => {
  return props.tweet.replies.length
})

const generateRandomNumber = ()=>{
  return Math.floor(Math.random() * 100)
}
</script>

<template>
  <div class="flex items-center justify-around w-full">
    <TweetItemActionIcon color="blue">
      <template #icon>
        <ChartBarIcon class="w-5 h-5"/>
      </template>
      <template #default>{{ replyLength}}</template>
    </TweetItemActionIcon>

    <TweetItemActionIcon color="green">
      <template #icon>
        <ReceiptPercentIcon class="w-5 h-5"/>
      </template>
      <template #default>{{generateRandomNumber()}}</template>
    </TweetItemActionIcon>

    <TweetItemActionIcon color="yellow">
      <template #icon>
        <HeartIcon class="w-5 h-5"/>
      </template>
      <template #default>{{generateRandomNumber()}}</template>
    </TweetItemActionIcon>

    <TweetItemActionIcon color="red">
      <template #icon>
        <ShareIcon class="w-5 h-5"/>
      </template>
      <template #default>{{generateRandomNumber()}}</template>
    </TweetItemActionIcon>

  </div>

</template>

<style scoped>

</style>