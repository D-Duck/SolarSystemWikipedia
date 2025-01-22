<script>
import FavoritePlanet from './FavoritePlanet.vue'
import { createApp } from 'vue'

export default {
  name: 'FavoriteDrawer',
  methods: {
    updateFavorites() {
      const container = document.getElementById('fav_drawer')
      const favoritePlanets = JSON.parse(localStorage.getItem('favorite_planets')) || []

      console.log(container.children.length)

      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }

      console.log(container.children.length)

      // Your code to add new children here
      favoritePlanets.forEach((planet) => {
        const app = createApp(FavoritePlanet, { name: planet })
        const div = document.createElement('div')
        app.mount(div)
        container.appendChild(div)
      })

      // console.log(container.chil)
      // console.log(container.children.length)

      // for (var ii = 0; ii < favoritePlanets.length; ii++) {
      //   // console.log(favoritePlanets[ii])
      //   const app = createApp(FavoritePlanet, { name: favoritePlanets[ii] })
      //   const div = document.createElement('div')
      //   app.mount(div)
      //   container.appendChild(div)
      // }
      // console.log('--')
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
