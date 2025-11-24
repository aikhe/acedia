<script setup lang="ts">
import NowLayout from '@/layouts/NowLayout.vue'
import MomentLayout from '@/layouts/MomentLayout.vue'
import CollegeLayout from '@/layouts/CollegeLayout.vue'
import SuccessLayout from '@/layouts/SuccessLayout.vue'
import TheFollowingLayout from '@/layouts/TheFollowingLayout.vue'
</script>

<template>
  <main>
    <div class="spacing" />
    <NowLayout />
    <div class="spacing-content" />
    <MomentLayout />
    <div class="spacing-content" />
    <CollegeLayout />
    <div class="spacing-content" />
    <SuccessLayout />
    <div class="spacing-content" />
    <TheFollowingLayout />
    <div class="spacing--medium" />
  </main>
</template>

<style scoped>
.spacing {
  width: 100%;
  height: 12rem;
}

.spacing--medium {
  width: 100%;
  height: 16rem;
}

.spacing-content {
  width: 100%;
  height: 6rem;
}

@media (max-width: 768px) {
  .spacing {
    height: 8rem;
  }

  .spacing--medium {
    height: 8rem;
  }

  .spacing-content {
    height: 4rem;
  }
}
</style>
