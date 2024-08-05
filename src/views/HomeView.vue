<template>
  <MainMenu />
  <div class="p-6">
    <Breadcrumbs :items="breadcrumbs" />
    <p>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/training_profile/12">Profile</RouterLink>
      </nav>
    </p>
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";

export default {
  components: {
    MainMenu,
    Breadcrumbs
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Home', link: '/' },
      ]
    };
  }
};
</script>