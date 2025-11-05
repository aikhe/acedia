<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">HOME</RouterLink>
      <RouterLink to="/test">TEST</RouterLink>
      <RouterLink to="/lumi">LUMI</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

nav {
  display: flex;
  gap: 1rem;
  font-size: 12pt;
  font-family: ApercuMonoLight;
}

nav a.router-link-exact-active {
  color: black;
  opacity: 1;
}

nav a {
  color: black;
  opacity: 0.6;
}

nav a:hover {
  text-decoration: underline;
}
</style>
