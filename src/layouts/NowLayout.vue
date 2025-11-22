<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="">
    <div class="container hero">
      <div class="hero__title font-title">
        <h1>Now</h1>
      </div>
      <p class="hero__desc font-plex-sans font-desc">
        My current decisions, life, experiences and<br />
        whats to come may it be my plans and unexpected outcomes
      </p>
      <div class="hero__banner">
        <img class="banner__img" src="/now.png" alt="Banner" />
        <div class="banner__caption font-plex-sans sub-reg">
          <span class="caption__more">+ MORE INFO</span>
          <RouterLink to="/home" class="caption__now">
            <span class="now__text">NOW</span>
            &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="left-arrow"
            >
              <path
                fill-rule="evenodd"
                d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: 10rem;
}

.hero {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hero__title {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 0.75;
}

.hero__desc {
  margin-top: 0.8rem;
}

.hero__banner {
  margin-top: 0.8rem;
}

.banner__img {
  width: 100%;
}

.banner__caption {
  margin-top: 0.2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.caption__more {
  color: #28ae3c;
}

.caption__now {
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.now__text:hover {
  text-decoration: underline;
}

.left-arrow {
  height: 1.2rem;
}
</style>
