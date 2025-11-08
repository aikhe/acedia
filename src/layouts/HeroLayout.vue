<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia'

const counter = useCounterStore()

const { count } = storeToRefs(counter)
</script>

<template>
  <section class="">
    <div class="container">
      <h1>acedia</h1>
      <p>ike</p>
      <p>d5d 6c756d69 6d616f6d69</p>
      <p>{{ count }}</p>
    </div>
  </section>
</template>

<style scoped></style>
