<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'

const counter = useCounterStore()

const { count, doubleCount } = storeToRefs(counter)

const { increment } = counter

const incre = () => {
  count.value++
}

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    ;[firstName.value, lastName.value] = newValue.split(' ')
  },
})
</script>

<template>
  <main>
    <div class="">
      <img src="/acedia.png" alt="Acedia" />
      <div>
        <h1>acedia</h1>
        <p>ike</p>
        <p>d5d 6c756d69 6d616f6d69</p>
        <p>Using text interpolation: <span style="color: red">This should be red.</span></p>

        <p>{{ count }}</p>
        <p>{{ doubleCount }}</p>
        <button @click="increment()">increment</button>
        <button @click="incre()">incre</button>

        <p>{{ fullName }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
