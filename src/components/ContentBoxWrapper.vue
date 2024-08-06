<template>
  <div class="rounded-xl bg-white border border-slate-200 p-5 p-t-6">
    <div v-if="$slots.title">
      <slot name="text" />
    </div>
    <div v-else>
      <h1 class="text-slate-800 font-bold leading-8">{{ title }}</h1>
    </div>
    <p class="text-slate-500 text-xs mt-1">{{ description }}</p>
    <div class="mt-4">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentBoxWrapper',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
};
</script>
