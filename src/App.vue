<template>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <br />
    <RouterLink to="/training_profile/12">Profile</RouterLink>
  </nav>
  <RouterView />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";
@import "https://cdn.syncfusion.com/ej2/material.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 100px;
}
</style>
