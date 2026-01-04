<script setup lang="ts">
import BlogLayout from '@/layouts/BlogLayout.vue'
import CurrentStatus from '@/components/CurrentStatus.vue'
</script>

<template>
  <main>
    <CurrentStatus />
    <div class="spacing--medium" />
    <BlogLayout />
    <div class="spacing--large" />
  </main>
</template>

<style scoped>
.spacing--medium {
  width: 100%;
  height: 6.8rem;
}

.spacing--large {
  width: 100%;
  height: 10rem;
}

.spacing--huge {
  width: 100%;
  height: 16rem;
}

@media (max-width: 768px) {
  .spacing--medium {
    height: 5rem;
  }

  .spacing--large {
    height: 6rem;
  }

  .spacing--huge {
    height: 8rem;
  }
}
</style>
