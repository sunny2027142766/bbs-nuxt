<script lang="ts" setup>
import {HomeIcon} from "@heroicons/vue/16/solid";
import {
  BellIcon,
  BookmarkIcon,
  DocumentTextIcon,
  EllipsisHorizontalCircleIcon,
  HashtagIcon,
  InboxIcon,
  PencilIcon,
  UserIcon
} from "@heroicons/vue/24/outline";

const {defaultTransition} = useTailwindConfig()
</script>

<template>
  <div class="flex flex-col h-screen">
    <div
        :class="defaultTransition"
        class="p-2 my-2 hover:bg-blue-50 rounded-full w-min dark:hover:bg-white/20"
    >
      <NuxtLink to="/">
        <div class="w-8 h-8 ">
          <LogoTwitter/>
        </div>
      </NuxtLink>
    </div>

    <div class="mt-2 space-y-3">
      <SidebarLeftTab active>
        <template v-slot:icon>
          <HomeIcon/>
        </template>
        <template v-slot:name>首页</template>
      </SidebarLeftTab>
      <SidebarLeftTab active>
        <template v-slot:icon>
          <HashtagIcon/>
        </template>
        <template v-slot:name>探索</template>
      </SidebarLeftTab>
      <SidebarLeftTab active>
        <template v-slot:icon>
          <BellIcon/>
        </template>
        <template v-slot:name>通知</template>
      </SidebarLeftTab>
      <SidebarLeftTab active>
        <template v-slot:icon>
          <InboxIcon/>
        </template>
        <template v-slot:name>消息</template>
      </SidebarLeftTab>
      <SidebarLeftTab active>
        <template v-slot:icon>
          <BookmarkIcon/>
        </template>
        <template v-slot:name>书签</template>
      </SidebarLeftTab>
      <SidebarLeftTab active>
        <template v-slot:icon>
          <DocumentTextIcon/>
        </template>
        <template v-slot:name>文档列表</template>
      </SidebarLeftTab>
      <SidebarLeftTab active>
        <template v-slot:icon>
          <UserIcon/>
        </template>
        <template v-slot:name>个人信息</template>
      </SidebarLeftTab>
      <SidebarLeftTab active>
        <template v-slot:icon>
          <EllipsisHorizontalCircleIcon/>
        </template>
        <template v-slot:name>更多</template>
      </SidebarLeftTab>
      <div class="hidden xl:block">
        <UIButton size="lg" :liquid="true">
          <span class="font-bold w-full">发表文章</span>
        </UIButton>
      </div>
      <div class="block xl:hidden">
        <UIButton>
          <div class="w-6 h-6 font-bold">
            <PencilIcon/>
          </div>
        </UIButton>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>