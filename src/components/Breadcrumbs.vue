<template>
  <div class="flex flex-row items-center flex-wrap mb-6">
    <div class="breadcrumb-item">
      <i class="icons8-home text-slate-500 text-2xl" />
    </div>
    <div
      v-for="(crumb, index) in items"
      :key="index"
      class="breadcrumb-item text-slate-500"
    >
      <a v-if="index !== items.length - 1" :href="crumb.link">{{ crumb.text }}</a>
      <span v-else>{{ crumb.text }}</span>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'Breadcrumbs',
    props: {
      items: {
        type: Array,
        required: true,
        validator: (value) => {
          return value.every(item => 'text' in item && 'link' in item);
        }
      }
    }
  };
</script>
  
<style scoped>
  .breadcrumb-item + .breadcrumb-item::before {
    content: "/";
    padding: 0 1rem;
  }
</style>