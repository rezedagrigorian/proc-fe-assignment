<template>
  <MainMenu />
  <p>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/training_profile/12">Profile</RouterLink>
    </nav>
  </p>
</template>

<script>
import MainMenu from "@/components/MainMenu.vue";

export default {
  components: {
    MainMenu,
  },
};
</script>