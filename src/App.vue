<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="navbar container">
      <div class="acedia">
        <div class="acedia__box" />
        <span class="sub-reg">ACEDIA</span>
      </div>

      <nav class="sub-reg">
        <RouterLink to="/">ME</RouterLink>
        <RouterLink to="/home">HOME</RouterLink>
        <RouterLink to="/test">TEST</RouterLink>
        <RouterLink to="/lumi">LUMI</RouterLink>
      </nav>

      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="header__theme-toggle"
        >
          <path
            d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"
          />
        </svg>
      </button>
    </div>
  </header>

  <RouterView />

  <footer class="container">
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="footer__brand sub-reg">
      <RouterLink class="brand__container" to="/">ACEDIA</RouterLink>
      <span class="brand__container">AIKHE @2025</span>
    </div>
  </footer>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

footer {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer__brand {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand__container {
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  gap: 16rem;
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

.acedia {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
}

.acedia__box {
  width: 0.7rem;
  height: 0.7rem;
  background-color: black;
}

.header__theme-toggle {
  width: 1.2rem;
  height: 1.2em;
  fill: black;
}
</style>
