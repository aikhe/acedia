<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia'

const counter = useCounterStore()

const { count } = storeToRefs(counter)
</script>

<template>
  <main>
    <div class="">
      <div>
        <h1>acedia</h1>
        <p>ike</p>
        <p>d5d 6c756d69 6d616f6d69</p>
        <p>{{ count }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
img {
  width: 50%;
}
</style>
