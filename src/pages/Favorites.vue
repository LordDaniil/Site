<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import Cardlist from '../components/Cardlist.vue'

const favorites = ref([])
onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://cfefbe51b5eb09b2.mokky.dev/favorites?_relations=items`
    )
    favorites.value = data.map((obj) => obj.item)
  } catch (err) {
    console.log(err)
  }
})
</script>
<template>
  <h1>Мои избранное</h1>
  <h2 class="text-3xl font-bold mb-8">Моё избранное</h2>
  <Cardlist :items="favorites" is-favorites />
</template>
