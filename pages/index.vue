<script setup lang="ts">

const loading = ref(false)

const {useAuthUser} = useAuth()
const user = useAuthUser()

const {getTweets} = useTweets()
const tweets = ref([])
onMounted(async () => {
  const tweetsRes = await getTweets()
  tweets.value = tweetsRes.tweets
})
</script>

<template>
  <MainSection title="首页" :loading="loading">
    <Head>
      <Title>首页 | 发表推文</Title>
    </Head>
    <TweetForm :user="user"/>
    <TweetListTweet :tweets="tweets"/>
  </MainSection>
</template>

<style scoped>

</style>