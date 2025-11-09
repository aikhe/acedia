<script setup lang="ts">
import CurrentStatus from '@/components/CurrentStatus.vue'
import HeroLayout from '@/layouts/HeroLayout.vue'
import AboutLayout from '@/layouts/AboutLayout.vue'
import NowDirect from '@/components/NowDirect.vue'
</script>

<template>
  <main>
    <CurrentStatus />
    <div class="spacing--medium" />
    <HeroLayout />
    <div class="spacing--large" />
    <AboutLayout />
    <div class="spacing--huge" />
    <NowDirect />
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
</style>
