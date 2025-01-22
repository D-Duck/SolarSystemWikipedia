<script>
import SolarSystem from '../../src/json/SolarSystem.json'
import VerticalNavigation from '../components/VerticalNavigation.vue'
import LogoComp from '../components/LogoComp.vue'
import GeneralPlanetInfo from '@/components/GeneralPlanetInfo.vue'
import SectionComp from '@/components/SectionComp.vue'

export default {
  name: 'PlanetView',
  data() {
    return {
      type: String,
      data: Array,
    }
  },
  mounted() {
    this.setData()
  },
  components: {
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
  },
}
</script>

<template>
  <main>
    <LogoComp />
    <VerticalNavigation />
    <GeneralPlanetInfo />
    <img id="img_bg_planet" :src="computedImgSrc" />
    <div id="outer_container">
      <div id="sections">
        <h1>{{ this.data.name }}</h1>
        <SectionComp :data="{ title: 'About', text: this.data.description_1 }" />
        <SectionComp :data="{ title: '', text: this.data.description_2 }" />
        <SectionComp :data="{ title: 'Detailed description', text: this.data.text }" />
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  float: left;
  width: 40vw;
  color: white;
  font-size: 90px;
}

#outer_container {
  margin-top: 10em;
}

#img_bg_planet {
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
