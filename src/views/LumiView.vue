<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia'

const counter = useCounterStore()

const { count } = storeToRefs(counter)
</script>

<template>
  <div class="lumi">
    <h1>This is a page dedicated for my wife&lt;3</h1>
    <p>{{ count }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
