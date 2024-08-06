<template>
  <nav class="bg-white border-b border-slate-200 mt-12">
    <div class="mx-auto px-2 sm:px-6 lg:px-4">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <RouterLink to="/">
            <img src="@/assets/svg/LogoProcademy.svg" />
          </RouterLink>
        </div>
        <div class="flex items-center justify-between">
          <i class="icons8-envelope text-slate-500 text-2xl mr-3" />
          <i class="icons8-notification text-slate-500 text-2xl mr-6 relative notification-marker" />
          <AvatarIcon initials="RG" />
          <i class="icons8-expand-arrow text-[#64748B] text-xl" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import AvatarIcon from '../components/AvatarIcon.vue';

  export default {
    components: {
      AvatarIcon,
    }
  };
</script>

<style scoped>
  .notification-marker::after {
    position: absolute;
    background-color: theme(colors.rose.500);
    top: -2px;
    right: -4px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    content: ' ';
  }
</style>