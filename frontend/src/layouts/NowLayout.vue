<script setup lang="ts"></script>

<template>
  <section class="">
    <div class="blog-container hero">
      <div class="hero__title blog-title">
        <h1>Now</h1>
      </div>

      <p class="hero__desc font-plex-sans font-desc">
        My current decisions, my life, my experiences and everything to come may it be my plans or
        the unexpected outcomes.
      </p>

      <div class="hero__banner">
        <img class="banner__img" src="/now.png" alt="Banner" />
      </div>
    </div>
  </section>
</template>

<style scoped>
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
  width: 48ch;
  margin-top: 0.8rem;
}

.hero__banner {
  margin-top: 2.4rem;
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

@media (max-width: 768px) {
  .hero__desc {
    width: 34ch;
    margin-top: 0rem;
  }

  .hero__banner {
    margin-top: 1rem;
  }
}
</style>
