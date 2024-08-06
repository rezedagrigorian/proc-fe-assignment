<template>
  <MainMenu />
  Detailed profile view!
  {{ $route.params.id }}

  {{ filterValue }}
      <MagicToggle
        v-model="filterValue"
      />

</template>

<script>
import MainMenu from "@/components/MainMenu.vue";
import MagicToggle from "../components/MagicToggle.vue";

export default {
  components: {
    MainMenu,
    MagicToggle
  },
  data() {
    return {
      filterValue: 'Failed'
    }
  },
  emits: ["update:value"],
};
</script>