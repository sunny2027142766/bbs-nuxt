<script lang="ts" setup>

const {bbsBorderColor} = useTailwindConfig()

defineProps(['user'])
const emits = defineEmits(['onSubmit'])

const text = ref("");
const isDisabled = computed(() => text.value === '')
const handleFormSubmit = () => {
  emits('onSubmit', {
    text: text.value,
    mediaFiles: [selectFile.value]
  })
}

const imageInput = ref()
const handleImageClick = () => {
  imageInput.value.click()
}

const selectFile = ref(null)
const inputImageUrl = ref()
const handleImageChange = (event: any) => {
  const file = event.target.files[0]
  selectFile.value = file
  const reader = new FileReader()
  reader.onload = (event) => {
    inputImageUrl.value = event.target?.result
  }
  reader.readAsDataURL(file)
}
</script>

<template>
  <div class="flex items-center flex-shrink-0 p-4 pb-0">
    <div class="flex w-12 items-top">
      <img :alt="user.username" :src="user.profileImage" class="inline-block w-10 h-10 rounded-full">
    </div>
    <div class="w-full p-2">
        <textarea
            v-model="text"
            class="w-full h-10 text-lg text-gray-900 placeholder:text-gray-400 bg-transparent border-0 dark:text-white focus:ring-0"
            placeholder="What's happening?"/>
    </div>
  </div>
  <!--  file Selector    -->
  <div class="p-4 pl-16">
    <img v-if="inputImageUrl" :class="bbsBorderColor" :src="inputImageUrl" alt="" class="rounded-2xl border">
    <input ref="imageInput" accept="image/png,image/jpeg" hidden type="file" @change="handleImageChange"/>
  </div>

  <div class="flex p-2 pl-14">
    <div class="flex w-full text-white">
      <div class="p-2 text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-dim-800" @click="handleImageClick">
        <IconFrame/>
      </div>
      <div class="p-2 text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-dim-800">
        <IconGif/>
      </div>
      <div class="p-2 text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-dim-800">
        <IconChart/>
      </div>
      <div class="p-2 text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-dim-800">
        <IconEmoji/>
      </div>
      <div class="p-2 text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-dim-800">
        <IconCalender/>
      </div>
    </div>
    <div class="w-full flex justify-end">
      <UIButton size="sm" :disabled="isDisabled" @onClick="handleFormSubmit">
        <span class="font-bold">发表</span>
      </UIButton>
    </div>
  </div>
</template>

<style scoped>

</style>