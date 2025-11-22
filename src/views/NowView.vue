<script setup lang="ts">
import CollegeLayout from '@/layouts/CollegeLayout.vue'
import MomentLayout from '@/layouts/MomentLayout.vue'
import NowLayout from '@/layouts/NowLayout.vue'
import SuccessLayout from '@/layouts/SuccessLayout.vue'
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
    <div class="spacing" />
  </main>
</template>

<style scoped>
.spacing {
  width: 100%;
  height: 12rem;
}

.spacing-content {
  width: 100%;
  height: 6rem;
}
</style>
