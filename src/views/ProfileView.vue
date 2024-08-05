<template>
  <MainMenu />
  Detailed profile view!
  {{ $route.params.id }}
</template>

<script>
import MainMenu from "@/components/MainMenu.vue";

export default {
  components: {
    MainMenu,
  },
};
</script>