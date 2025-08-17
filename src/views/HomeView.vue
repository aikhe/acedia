<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia'
import { ref, computed, watch, useTemplateRef, onMounted } from 'vue'

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

const glazed = ref('glazed')
const hail = ref('hail')
const isGlazed = ref(true)

const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
])

function even(numbers: number[]): number[] {
  return numbers.filter((number: number) => number % 2 === 0)
}

let id = 0

const newPain = ref('')
const pains = ref<{ id: number; text: string }[]>([
  {
    id: id++,
    text: 'this is acedia',
  },
  {
    id: id++,
    text: 'weltschmerz',
  },
])

const addPain = () => {
  console.log(newPain.value)

  pains.value.push({ id: id++, text: newPain.value })
  newPain.value = ''
}

const removePain = (pain: { id: number; text: string }) => {
  pains.value = pains.value.filter((p) => p != pain)
}

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)

watch(question, async (newQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    } finally {
      loading.value = false
    }
  }
})

// the first argument must match the ref value in the template
const input = useTemplateRef('my-input')

onMounted(() => {
  input.value?.focus()
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

        <p :class="[{ [glazed]: isGlazed }, hail]">{{ fullName }}</p>

        <li v-for="(item, index) in items" :key="index">
          {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>

        <ul v-for="(numbers, index) in sets" :key="index">
          <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
        </ul>

        <form @submit.prevent="addPain">
          <input
            :value="newPain"
            @input="(event) => (newPain = (event.target as HTMLInputElement).value)"
          />
          <p>You typed: {{ newPain }}</p>
          <input v-model="newPain" type="text" required />
          <button>pain</button>
        </form>
        <ul v-for="(pain, index) in pains" :key="index">
          {{
            pain.id
          }}
          -
          {{
            pain.text
          }}
          <button @click="removePain(pain)">x</button>
        </ul>

        <p>
          Ask a yes/no question:
          <input v-model="question" :disabled="loading" />
        </p>
        <p>{{ answer }}</p>

        <input ref="my-input" />
      </div>
    </div>
  </main>
</template>

<style scoped>
img {
  width: 50%;
}

.glazed {
  font-size: 4rem;
}

.hail {
  border: red solid 1px;
}
</style>
