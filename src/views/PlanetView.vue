<script>
import SolarSystem from '../../src/json/SolarSystem.json'
import VerticalNavigation from '../components/VerticalNavigation.vue'
import LogoComp from '../components/LogoComp.vue'
import GeneralPlanetInfo from '@/components/GeneralPlanetInfo.vue'
import SectionComp from '@/components/SectionComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import FavoriteDrawer from '@/components/FavoriteDrawer.vue'

export default {
  name: 'PlanetView',
  data() {
    return {
      type: String,
      data: Array,
      favorite_planets: [],
    }
  },
  mounted() {
    this.setData()
  },
  components: {
    FavoriteDrawer,
    FooterComp,
    SectionComp,
    GeneralPlanetInfo,
    VerticalNavigation,
    LogoComp,
  },
  computed: {
    computedImgSrc() {
      return `/img/objects/${this.data.name}.jpg`
    },
  },
  methods: {
    setData() {
      this.type = this.$route.params.planet

      const planets = SolarSystem['planets']
      for (let key in planets) {
        const planet = planets[key]

        if (planet.name === this.type) {
          this.data = planet
        }
      }
    },
    handleFavorite() {
      this.favorite_planets = JSON.parse(localStorage.getItem('favorite_planets'))

      if (this.favorite_planets.find((item) => item === this.data.name)) {
        this.favorite_planets.splice(this.favorite_planets.indexOf(this.data.name), 1)
      } else {
        this.favorite_planets.push(this.data.name)
      }

      localStorage.setItem('favorite_planets', JSON.stringify(this.favorite_planets))
      this.$refs.fav_comp.updateFavorites()
    },
  },
}
</script>

<template>
  <main>
    <div class="main_window">
      <LogoComp />
      <FooterComp />
      <FavoriteDrawer ref="fav_comp" />
      <VerticalNavigation />
      <GeneralPlanetInfo />
      <img class="img_bg_planet" :src="computedImgSrc" :alt="data.name" />
      <div class="outer_container">
        <div class="sections">
          <img class="fav" src="/img/ui/fav.png" @click="handleFavorite" />
          <h1>{{ this.data.name }}</h1>
          <SectionComp :data="{ title: 'About', text: this.data.description_1 }" />
          <SectionComp :data="{ title: '', text: this.data.description_2 }" />
          <SectionComp :data="{ title: 'Detailed description', text: this.data.text }" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  float: left;
  width: 30vw;
  color: white;
  font-size: 90px;
}

.outer_container {
  position: absolute;
  top: 0;
  left: 30em;
  margin-top: 10em;
  margin-bottom: 30em;
  width: 45vw;
}

.fav {
  position: relative;
  width: 3em;
  float: left;
  margin-top: 4em;
}

.fav:hover {
  background-color: #ffffff55;
  transition: 0.5s;
}

.img_bg_planet {
  user-select: none;
  position: absolute;
  top: -40vh;
  right: -20vw;
  width: 50vw;
  height: auto;
  animation: spin360 280s linear infinite;
}

@keyframes spin360 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
