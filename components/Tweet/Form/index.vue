<script setup lang="ts">

defineProps(['user'])

const {postTweet} = useTweets();

const handleFormSubmit = async (data: any) => {
  try {
    loading.value = true
    const resp = await postTweet({
      text:data.text,
      mediaFiles: data.mediaFiles
    })

  } catch (e) {
    console.log(e)
  }finally {
    loading.value = false
  }
}

const loading = ref(false)
</script>

<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center py-6">
      <UISpinner/>
    </div>
    <div v-else>
      <TweetFormInput :user="user" @onSubmit="handleFormSubmit"/>
    </div>
  </div>
</template>

<style scoped>

</style>