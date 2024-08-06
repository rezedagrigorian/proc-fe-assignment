<template>
  <div class="rounded-xl bg-white border border-slate-200 p-5 p-t-6">
    <div :class="additionalContentClass">
      <div v-if="$slots.title">
        <slot name="title" />
      </div>
      <div v-else>
        <h1 class="text-slate-800 font-bold leading-8">{{ title }}</h1>
      </div>
      <p class="text-slate-500 text-xs mt-2">{{ description }}</p>
      <div class="mt-4">
        <slot />
      </div>
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
    },
    additionalContentClass: {
      type: String,
      default: ''     
    }
  }
};
</script>
