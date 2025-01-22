<script>
import FavoritePlanet from './FavoritePlanet.vue'

export default {
  name: 'FavoriteDrawer',
  methods: {
    updateFavorites() {
      const container = document.getElementById('fav_drawer')

      for (var i = 1; i < container.children.length; i++) {
        container.removeChild(container.children[0])
      }

      for (var planet in localStorage.getItem('favorite_planets')) {
        const ChildConstructor = Vue.extends(FavoritePlanet)
        const instance = new ChildConstructor({
          name: planet,
        })
        instance.$mount()
        container.appendChild(instance.$el)
      }
    },
  },
}
</script>

<template>
  <div id="fav_drawer"></div>
</template>

<style scoped>
#fav_drawer {
  position: fixed;
  bottom: -3em;
  left: -3em;
  padding: 4em;
  background-color: black;
  width: 25em;
  height: 3em;
  border: 2px, solid, #ffffff55;
  border-radius: 3em;
}
</style>
