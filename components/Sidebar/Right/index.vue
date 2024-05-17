<script lang="ts" setup>
const newsList = reactive([
  {
    id: 1,
    title: 'Vue3',
    count: 100
  },
  {
    id: 2,
    title: 'React',
    count: 200
  }
])

const followList = reactive([
  {
    id: 1,
    name: '张三',
    image: 'https://picsum.photos/200/300',
    handle: '@张三'
  },
  {
    id: 2,
    name: '张三',
    image: 'https://picsum.photos/200/300',
    handle: '@张三'
  },
  {
    id: 3,
    name: '张三',
    image: 'https://picsum.photos/200/300',
    handle: '@张三'
  }
])
</script>

<template>
  <div class="flex flex-col">
    <!--  preview card: what's happening  -->
    <SidebarRightPreviewCard title="近期动态">
      <SidebarRightPreviewCardItem v-for="news in newsList" :key="news.id">
        <div>
          <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ news.title }}</h2>
          <p class="text-xs text-gray-400">{{ news.count }}</p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <!--  preview card: who to follow  -->
    <SidebarRightPreviewCard title="关注列表">
      <SidebarRightPreviewCardItem v-for="follow in followList" :key="follow.id">
        <div class="flex flex-row justify-between p-2">
          <div class="flex flex-row">
            <img :alt="follow.name" :src="follow.image" class="size-10 rounded-full">
            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ follow.name }}</h1>
              <p class="text-xs">{{ follow.handle }}</p>
            </div>
          </div>
          <div class="flex items-center h-full">
            <button class="px-4 py-2 bg-black text-xs font-bold text-white dark:text-black dark:bg-white rounded-full">
              关注
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>

<style scoped>

</style>