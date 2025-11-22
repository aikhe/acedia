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
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 4px;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
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
