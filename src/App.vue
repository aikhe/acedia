<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">home</RouterLink>
      <RouterLink to="/lumi">lumi</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 1rem;
}

nav {
  display: flex;
  gap: 1rem;
  font-size: 1.02rem;
  font-family: ApercuMonoMedium;
  font-optical-sizing: auto;
  font-style: bold;
}

nav a.router-link-exact-active {
  color: black;
  opacity: 1;
}

nav a {
  background-color: transparent;
  color: black;
  opacity: 0.6;
}

nav a:hover {
  text-decoration: underline;
}
</style>
