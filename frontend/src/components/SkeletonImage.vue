<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  src: string
  alt: string
  caption?: string
}>()

const loaded = ref(false)
</script>

<template>
  <div class="skeleton-image-wrapper">
    <div v-if="!loaded" class="skeleton-placeholder"></div>
    <img
      :src="src"
      :alt="alt"
      loading="lazy"
      @load="loaded = true"
      :style="{ display: loaded ? 'block' : 'none' }"
    />

    <span v-if="caption" class="image-caption font-plex-sans sub-reg">{{ caption }}</span>
  </div>
</template>

<style scoped>
.skeleton-image-wrapper {
  width: 100%;
  position: relative;
}

.skeleton-placeholder {
  width: 100%;
  height: 400px;
  background: #f5f5f5;
  animation: skeleton-pulse 1.5s ease-in-out infinite;
}

@keyframes skeleton-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

img {
  width: 100%;
  height: auto;
}

.image-caption {
  display: block;
  margin-top: 0.5rem;
  opacity: 0.6;
  font-size: 0.9rem;
}
</style>
