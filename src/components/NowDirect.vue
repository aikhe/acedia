<script setup lang="ts"></script>

<template>
  <section>
    <div class="now">
      <RouterLink to="/home" class="now__link font-plex-sans sub-reg">
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
  </section>
</template>

<style scoped>
.now {
  margin-bottom: 4rem;
}

.now__link {
  padding: 0.34rem 0.8rem;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.now__link:hover {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
}

.now__text {
  font-size: 12pt;
}

.left-arrow {
  height: 1.4rem;
}
</style>
