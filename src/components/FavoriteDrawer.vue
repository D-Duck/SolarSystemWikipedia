<script>
import FavoritePlanet from './FavoritePlanet.vue'
import { createApp } from 'vue'

export default {
  name: 'FavoriteDrawer',
  methods: {
    updateFavorites() {
      const container = document.getElementById('fav_drawer')
      const favoritePlanets = JSON.parse(localStorage.getItem('favorite_planets')) || []

      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }

      favoritePlanets.forEach((planet) => {
        const app = createApp(FavoritePlanet, { name: planet })
        const div = document.createElement('div')
        app.mount(div)
        container.appendChild(div)
      })
    },
  },
  mounted() {
    this.updateFavorites()
  },
}
</script>

<template>
  <div id="fav_drawer"></div>
</template>

<style scoped>
#fav_drawer {
  z-index: 1;
  position: fixed;
  display: flex;
  bottom: 2em;
  left: 2em;
  padding: 1em;
  width: fit-content;
  background-color: black;
  border: 2px, solid, #ffffff55;
  border-radius: 3em;
}
</style>
