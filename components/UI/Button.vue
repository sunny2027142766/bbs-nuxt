<script lang="ts" setup>
const props = defineProps(['disabled', 'size', 'liquid'])

const paddingClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3 py-1'
    case 'md':
      return 'px-4 py-2'
    case 'lg':
      return 'px-5 py-3'
    default:
      return 'px-3 py-3'
  }
})

const textFontSize = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-sm'
    case 'md':
      return 'text-md'
    case 'lg':
      return 'text-lg'
    default:
      return 'text-sm'
  }
})

const defaultWidth = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-1/4'
    case 'lg':
      return 'w-full'
    default:
      return 'w-min'
  }
})

const classes = computed(() => `${paddingClasses.value} ${defaultWidth.value}`)

const emits = defineEmits(['onClick'])
const handleClick = () => {
  emits('onClick')
}


</script>

<template>
  <button
      :disabled="disabled"
      class="flex justify-center items-center text-white bg-blue-400 rounded-full hover:bg-blue-500 font-sm disabled:bg-blue-300 disabled:cursor-not-allowed"
      :class="classes"
      @click="handleClick"
  >
    <span :class="textFontSize">
      <slot/>
    </span>
  </button>
</template>

<style scoped>

</style>