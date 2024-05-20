<script lang="ts" setup>

import LoadingPage from "~/components/LoadingPage.vue";

const darkMode = ref(false)
const {useAuthUser, initAuth, useAuthLoading} = useAuth()
const user = useAuthUser()
const loading = useAuthLoading()

onBeforeMount(() => {
  initAuth()
})
</script>

<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <LoadingPage v-if="loading" />
      <!-- App -->
      <div v-else-if="user" class="min-h-full">
        <div
            class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5"
        >
          <!--   left sidebar     -->
          <div class="hidden md:block col-span-5 xs:col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft/>
            </div>
          </div>
          <!--   Main content     -->
          <main class="col-span-12 marker:md:col-span-8 xl:col-span-6">
            <NuxtPage/>
          </main>

          <!--   Right sidebar     -->
          <div
              class="hidden col-span-5 bg-blue-500 md:block md:col-span-3 xl:col-span-4"
          >
            <div class="sticky top-0">
              <SidebarRight/>
            </div>
          </div>
        </div>
      </div>
      <AuthPage v-else/>
    </div>
  </div>
</template>


