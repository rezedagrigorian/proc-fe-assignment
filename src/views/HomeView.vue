<template>
<nav class="bg-white border-b border-slate-200">
  <div class="mx-auto px-2 sm:px-6 lg:px-4">
    <div class="flex justify-between items-center h-16">
      <div class="flex items-center">
        <img
          src="@/assets/svg/LogoProcademy.svg"
        />
      </div>
      <div class="flex items-center justify-between">
        <i class="icons8-envelope text-slate-500 text-2xl mr-3" />
        <i class="icons8-notification text-slate-500 text-2xl mr-5" />
        <AvatarIcon initials="RG" />
        <i class="icons8-expand-arrow text-[#64748B] text-xl" />
      </div>
    </div>
  </div>
</nav>
<p>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/training_profile/12">Profile</RouterLink>
  </nav>
</p>
</template>

<script>
import AvatarIcon from './AvatarIcon.vue';

export default {
  components: {
    AvatarIcon,
  },
};
</script>