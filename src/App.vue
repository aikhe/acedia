<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">home</RouterLink>
      <RouterLink to="/test">test</RouterLink>
      <RouterLink to="/lumi">lumi</RouterLink>
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
  font-size: 14pt;
  font-family: ApercuMonoMedium;
  font-optical-sizing: auto;
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
